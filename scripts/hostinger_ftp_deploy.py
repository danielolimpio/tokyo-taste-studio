from __future__ import annotations

import os
from ftplib import FTP, error_perm
from pathlib import Path
from posixpath import basename


HOST = os.environ["FTP_HOST"]
USER = os.environ["FTP_USER"]
PASSWORD = os.environ["FTP_PASS"]
LOCAL_DIR = Path(os.environ.get("FTP_LOCAL_DIR", "dist/client")).resolve()
TARGET_DIR = (os.environ.get("FTP_TARGET_DIR") or "").strip()
REMOVE_NESTED_PUBLIC_HTML = os.environ.get("REMOVE_NESTED_PUBLIC_HTML", "true").lower() == "true"
ASSUME_LOGIN_IS_WEBROOT = os.environ.get("FTP_ASSUME_LOGIN_IS_WEBROOT", "false").lower() == "true"

SITE_MARKERS = {"index.html", "robots.txt", "llms.txt", "assets", ".htaccess"}
ACCOUNT_ROOT_MARKERS = {
    "domains",
    "mail",
    "logs",
    "ssl",
    "tmp",
    "etc",
    "backups",
    "private_html",
}
STALE_FILES = {
    "index.html",
    ".htaccess",
    "_headers",
    "robots.txt",
    "llms.txt",
    "sitemap.xml",
    ".ftp-deploy-sync-state.json",
    ".ftp-deploy-sync-state-hostinger.json",
    ".ftp-deploy-sync-state-hostinger-v2.json",
}
STALE_DIRS = {"assets"}
PROTECTED_DIRS = {"domains", "mail", "logs", "ssl", "tmp", "etc", "backups", "private_html"}
PUBLIC_HTML = "public_html"


def normalize_name(item: str) -> str:
    clean = item.strip().rstrip("/")
    if not clean or clean in {".", ".."}:
        return ""
    return basename(clean.replace("\\", "/"))


def names(ftp: FTP) -> set[str]:
    try:
        return {
            normalize_name(name)
            for name, _facts in ftp.mlsd()
            if normalize_name(name)
        }
    except Exception:
        pass

    try:
        return {normalize_name(item) for item in ftp.nlst() if normalize_name(item)}
    except error_perm:
        return set()


def print_listing(ftp: FTP, label: str) -> None:
    print(f"{label} ({ftp.pwd()}): {', '.join(sorted(names(ftp))) or '(vazio)'}")


def is_dir(ftp: FTP, name: str) -> bool:
    current = ftp.pwd()
    try:
        ftp.cwd(name)
        ftp.cwd(current)
        return True
    except error_perm:
        try:
            ftp.cwd(current)
        except error_perm:
            pass
        return False


def remove_remote_path(ftp: FTP, name: str) -> None:
    if is_dir(ftp, name):
        current = ftp.pwd()
        ftp.cwd(name)
        for child in sorted(names(ftp)):
            remove_remote_path(ftp, child)
        ftp.cwd(current)
        try:
            ftp.rmd(name)
        except error_perm as exc:
            print(f"Aviso: não foi possível remover pasta {name}: {exc}")
    else:
        try:
            ftp.delete(name)
        except error_perm as exc:
            print(f"Aviso: não foi possível remover arquivo {name}: {exc}")


def ensure_cwd(ftp: FTP, target: str) -> None:
    if target in {"", ".", "./"}:
        return

    normalized = target.strip("/")
    if not normalized:
        return

    for part in normalized.split("/"):
        if not part or part == ".":
            continue
        try:
            ftp.cwd(part)
        except error_perm:
            ftp.mkd(part)
            ftp.cwd(part)


def choose_target_dir(ftp: FTP) -> str:
    if TARGET_DIR:
        return TARGET_DIR

    # Nesta hospedagem, o FTP já entra na public_html externa. Quando ela está
    # vazia e possui apenas a public_html duplicada, detectar automaticamente é
    # impossível; por isso o workflow força FTP_TARGET_DIR='.'.
    if ASSUME_LOGIN_IS_WEBROOT:
        return "."

    root_names = names(ftp)
    current_dir = ftp.pwd().strip().rstrip("/")

    # Caso do print da Hostinger: o FTP/painel já está dentro da public_html
    # real, mas existe uma public_html duplicada dentro dela. Se já há arquivos
    # de site na pasta atual, publicar aqui e remover a pasta aninhada.
    if SITE_MARKERS.intersection(root_names):
        return "."

    if current_dir.endswith(f"/{PUBLIC_HTML}") or current_dir == PUBLIC_HTML:
        return "."

    # Se o FTP abre na raiz da conta Hostinger, publicar dentro do public_html real.
    if PUBLIC_HTML in root_names and ACCOUNT_ROOT_MARKERS.intersection(root_names):
        return PUBLIC_HTML

    # Se o FTP abre um nível acima do site e mostra somente public_html, essa é
    # a public_html REAL. Entrar nela evita publicar arquivos fora da raiz do
    # domínio e depois remove a public_html aninhada que causa 403.
    if PUBLIC_HTML in root_names:
        return PUBLIC_HTML

    return "."


def assert_not_account_root(ftp: FTP) -> None:
    current_names = names(ftp)
    current_dir = ftp.pwd().strip().rstrip("/") or "/"

    if ASSUME_LOGIN_IS_WEBROOT:
        blocked_markers = {"mail", "logs", "ssl", "tmp", "etc", "backups", "private_html"}
        if blocked_markers.intersection(current_names):
            raise SystemExit(
                "Segurança: o FTP parece estar na raiz da conta, não na public_html do site. "
                "Ajuste FTP_TARGET_DIR antes de apagar a pasta public_html."
            )
        return

    if current_dir.endswith(f"/{PUBLIC_HTML}") or current_dir == PUBLIC_HTML:
        return
    if SITE_MARKERS.intersection(current_names):
        return
    if PUBLIC_HTML in current_names:
        raise SystemExit(
            "Segurança: o deploy ainda está um nível acima do site. "
            "A pasta public_html existe aqui, então os arquivos devem ser publicados dentro dela."
        )


def remove_nested_public_html(ftp: FTP) -> None:
    # Remove somente public_html dentro da pasta escolhida para publicação.
    # Nunca é chamado na raiz da conta: assert_not_account_root protege isso.
    if REMOVE_NESTED_PUBLIC_HTML and PUBLIC_HTML in names(ftp) and is_dir(ftp, PUBLIC_HTML):
        print("Removendo public_html duplicada dentro da raiz publicada...")
        remove_remote_path(ftp, PUBLIC_HTML)
        if PUBLIC_HTML in names(ftp):
            raise SystemExit("Não foi possível remover a pasta public_html duplicada; deploy abortado.")


def upload_dir(ftp: FTP, local_dir: Path) -> None:
    if (local_dir / PUBLIC_HTML).exists():
        raise SystemExit(
            "Pacote local inválido: existe uma pasta public_html dentro de hostinger-dist. "
            "Isso recriaria public_html/public_html."
        )

    for item in sorted(local_dir.iterdir(), key=lambda p: (p.name != "index.html", p.is_file(), p.name.lower())):
        if item.name in {".DS_Store", "Thumbs.db"}:
            continue

        if item.is_dir():
            try:
                ftp.mkd(item.name)
            except error_perm:
                pass
            ftp.cwd(item.name)
            upload_dir(ftp, item)
            ftp.cwd("..")
        elif item.is_file():
            with item.open("rb") as file_handle:
                ftp.storbinary(f"STOR {item.name}", file_handle)
            print(f"Enviado: {item.relative_to(LOCAL_DIR)}")


def main() -> None:
    if not LOCAL_DIR.exists():
        raise SystemExit(f"Pasta local não encontrada: {LOCAL_DIR}")
    if not (LOCAL_DIR / "index.html").exists():
        raise SystemExit(f"index.html não encontrado em: {LOCAL_DIR}")
    if not (LOCAL_DIR / "assets").exists():
        raise SystemExit(f"assets não encontrado em: {LOCAL_DIR}")

    with FTP(HOST, timeout=60) as ftp:
        ftp.login(USER, PASSWORD)
        ftp.set_pasv(True)

        print_listing(ftp, "Conteúdo inicial do FTP")
        target = choose_target_dir(ftp)
        print(f"Raiz FTP inicial: {ftp.pwd()}")
        print(f"Diretório remoto escolhido: {target}")
        ensure_cwd(ftp, target)
        print(f"Publicando em: {ftp.pwd()}")
        print_listing(ftp, "Conteúdo antes da limpeza")
        assert_not_account_root(ftp)

        # Primeiro remove a pasta public_html aninhada, caso ela exista com builds
        # antigos. Assim o upload não continua atualizando a pasta errada.
        remove_nested_public_html(ftp)

        remote_names = names(ftp)
        for stale in sorted(STALE_FILES.intersection(remote_names)):
            remove_remote_path(ftp, stale)
        for stale in sorted(STALE_DIRS.intersection(remote_names)):
            remove_remote_path(ftp, stale)

        remove_nested_public_html(ftp)

        for protected in sorted(PROTECTED_DIRS.intersection(names(ftp))):
            print(f"Mantendo pasta protegida da hospedagem: {protected}")

        upload_dir(ftp, LOCAL_DIR)

        remove_nested_public_html(ftp)

        final_names = names(ftp)
        print_listing(ftp, "Conteúdo final publicado")
        if "index.html" not in final_names:
            raise SystemExit("Deploy concluído sem index.html remoto; abortando.")
        if "assets" not in final_names:
            raise SystemExit("Deploy concluído sem assets remoto; abortando.")
        if PUBLIC_HTML in final_names:
            raise SystemExit("A pasta public_html duplicada ainda existe na raiz publicada; deploy abortado.")

        print("Deploy Hostinger finalizado: index.html e assets estão na raiz correta, sem public_html duplicada.")


if __name__ == "__main__":
    main()