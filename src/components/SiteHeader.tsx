import { Link } from "@tanstack/react-router";
import { Search, User, Facebook, Instagram, Twitter, Menu } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/receitas", label: "Receitas" },
  { to: "/categorias", label: "Categorias" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      {/* Row 1 — utility row */}
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
        <button aria-label="Buscar" className="text-muted-foreground transition hover:text-primary">
          <Search className="h-4 w-4" />
        </button>
        <Link to="/" className="md:hidden">
          <BrandLogo className="h-6" />
        </Link>
        <button aria-label="Conta" className="text-muted-foreground transition hover:text-primary">
          <User className="h-4 w-4" />
        </button>
      </div>

      {/* Row 2 — brand + nav + cta */}
      <div className="border-t border-border">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4">
          <div className="hidden items-center gap-3 text-muted-foreground md:flex">
            <a href="#" aria-label="Facebook" className="transition hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:text-primary">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <nav className="hidden items-center justify-center gap-10 text-sm font-medium md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground transition hover:text-primary [&.active]:text-primary"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contato"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 md:inline-flex"
          >
            Enviar Receita
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="border-t border-border md:hidden">
            <nav className="flex flex-col gap-1 p-4 text-sm">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-muted-foreground hover:bg-secondary hover:text-primary [&.active]:text-primary"
                  activeProps={{ className: "active" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center font-semibold text-primary-foreground"
              >
                Enviar Receita
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
