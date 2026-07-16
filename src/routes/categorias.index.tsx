import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { categories } from "@/lib/categories";

export const Route = createFileRoute("/categorias/")({
  head: () => ({
    meta: [
      { title: "Categorias de Comidas Japonesas | Receitas por Tipo" },
      {
        name: "description",
        content:
          "Explore as categorias de receitas japonesas: sushis e sashimis, pratos quentes, entradas, sobremesas japonesas e bebidas e molhos como matcha, teriyaki e ponzu.",
      },
      {
        name: "keywords",
        content:
          "categorias comida japonesa, tipos de comida japonesa, receitas japonesas por categoria, sushi, ramen, sobremesa japonesa, molhos japoneses",
      },
      { property: "og:title", content: "Categorias de Comidas Japonesas" },
      {
        property: "og:description",
        content: "Navegue por todas as categorias de receitas de culinária japonesa.",
      },
      { property: "og:url", content: "https://comidasjaponesas.com/categorias" },
    ],
    links: [{ rel: "canonical", href: "https://comidasjaponesas.com/categorias" }],
  }),
  component: CategoriesIndex,
});

function CategoriesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title="Categorias de Receitas Japonesas"
        subtitle="Descubra os principais grupos da culinária japonesa organizados por tipo de prato — do sushi tradicional às sobremesas wagashi."
        crumbs={[{ label: "Home", to: "/" }, { label: "Categorias" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="sr-only">Lista de categorias</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categorias/$slug"
              params={{ slug: c.slug }}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Categoria
              </span>
              <h3 className="mt-3 text-xl font-extrabold text-ink transition group-hover:text-primary">
                {c.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Ver receitas →
              </p>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
