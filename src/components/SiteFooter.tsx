import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";
import { TrendingArticles } from "./TrendingArticles";

export function SiteFooter() {
  return (
    <>
      <TrendingArticles />
      <footer className="bg-[oklch(0.18_0.02_25)] text-neutral-300">


      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <BrandLogo className="text-white" />
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Receitas autênticas da culinária japonesa, do sushi tradicional aos doces wagashi —
            ensinadas com técnica e respeito ao ingrediente.
          </p>
        </div>
        <FooterCol title="Links Úteis" items={[
          ["Sobre nós", "/sobre"],
          ["Receitas", "/receitas"],
          ["Categorias", "/categorias"],
          ["Política de Privacidade", "/politica-de-privacidade"],
          ["Termos e Condições", "/termos-e-condicoes"],
        ]} />
        <div>
          <h4 className="mb-4 text-sm font-bold text-white">Contato</h4>
          <p className="text-sm leading-relaxed text-neutral-400">
            Rua Liberdade, 123 — Bairro Liberdade<br />São Paulo, SP
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            Tel: <span className="text-primary">(11) 4002-8922</span>
          </p>
          <p className="text-sm text-neutral-400">
            E-mail:{" "}
            <a href="mailto:contato@comidasjaponesas.com" className="text-primary">
              contato@comidasjaponesas.com
            </a>
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold text-white">Receba nossas receitas</h4>
          <p className="text-sm text-neutral-400">
            Cadastre seu e-mail e receba novidades semanais direto da nossa cozinha.
          </p>
          <form className="mt-4 flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Inscrever
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-neutral-500 md:flex-row">
          <span>Copyright © {new Date().getFullYear()} comidasjaponesas.com — Todos os direitos reservados</span>
          <span>Feito com tradição e fogo alto</span>
        </div>
      </div>
      </footer>
    </>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold text-white">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-neutral-400 transition hover:text-primary">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
