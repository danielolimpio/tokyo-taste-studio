from __future__ import annotations

import os
from ftplib import FTP, error_perm
from pathlib import Path


HOST = os.environ["FTP_HOST"]
USER = os.environ["FTP_USER"]
PASSWORD = os.environ["FTP_PASS"]
LOCAL_DIR = Path(os.environ.get("FTP_LOCAL_DIR", "dist/client")).resolve()
TARGET_DIR = (os.environ.get("FTP_TARGET_DIR") or "").strip()
REMOVE_NESTED_PUBLIC_HTML = os.environ.get("REMOVE_NESTED_PUBLIC_HTML", "true").lower() == "true"

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


def names(ftp: FTP) -> set[str]:
    try:
        return {item.strip().rstrip("/") for item in ftp.nlst() if item not in {".", ".."}}
    except error_perm:
        return set()


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

    # Se a raiz visível do FTP contém apenas a duplicação public_html, ela já é
    # a public_html real do domínio. Publicar dentro dela criaria/atualizaria
    # public_html/public_html e manteria o 403 na raiz.
    if PUBLIC_HTML in root_names:
        return "."

    return "."


def upload_dir(ftp: FTP, local_dir: Path) -> None:
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

        target = choose_target_dir(ftp)
        print(f"Raiz FTP inicial: {ftp.pwd()}")
        print(f"Diretório remoto escolhido: {target}")
        ensure_cwd(ftp, target)
        print(f"Publicando em: {ftp.pwd()}")

        remote_names = names(ftp)
        for stale in sorted(STALE_FILES.intersection(remote_names)):
            remove_remote_path(ftp, stale)
        for stale in sorted(STALE_DIRS.intersection(remote_names)):
            remove_remote_path(ftp, stale)

        # Remove somente o public_html duplicado dentro da pasta escolhida para publicação.
        # Isso evita o caminho public_html/public_html que causa 403 na raiz do domínio.
        if REMOVE_NESTED_PUBLIC_HTML and PUBLIC_HTML in names(ftp) and is_dir(ftp, PUBLIC_HTML):
            print("Removendo public_html duplicado dentro da raiz publicada...")
            remove_remote_path(ftp, PUBLIC_HTML)
            if PUBLIC_HTML in names(ftp):
                raise SystemExit("Não foi possível remover a pasta public_html duplicada; deploy abortado.")

        for protected in sorted(PROTECTED_DIRS.intersection(names(ftp))):
            print(f"Mantendo pasta protegida da hospedagem: {protected}")

        upload_dir(ftp, LOCAL_DIR)

        final_names = names(ftp)
        if "index.html" not in final_names:
            raise SystemExit("Deploy concluído sem index.html remoto; abortando.")
        if "assets" not in final_names:
            raise SystemExit("Deploy concluído sem assets remoto; abortando.")
        if PUBLIC_HTML in final_names:
            raise SystemExit("A pasta public_html duplicada ainda existe na raiz publicada; deploy abortado.")

        print("Deploy Hostinger finalizado: index.html e assets estão na raiz correta, sem public_html duplicada.")


if __name__ == "__main__":
    main()