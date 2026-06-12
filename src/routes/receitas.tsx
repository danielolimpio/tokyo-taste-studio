import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/recipes";

export const Route = createFileRoute("/receitas")({
  head: () => ({
    meta: [
      { title: "Receitas Japonesas | Sushi, Ramen, Temaki, Yakisoba e Mais" },
      { name: "description", content: "Catálogo completo de receitas de comida japonesa: como fazer sushi em casa, ramen tonkotsu, temaki de salmão, yakisoba, tempura crocante, hot roll, gyoza, mochi e molho teriyaki." },
      { name: "keywords", content: "receitas japonesas, receitas de comida japonesa, como fazer sushi em casa, receita de ramen, receita de temaki, receita de yakisoba, receita de tempura, hot roll caseiro, gyoza receita, mochi receita, molho teriyaki" },
      { property: "og:title", content: "Receitas Japonesas | Catálogo de Culinária Japonesa" },
      { property: "og:description", content: "Mais de 9 receitas de culinária japonesa passo a passo: sushi, ramen, temaki, yakisoba, tempura e mais." },
      { property: "og:url", content: "/receitas" },
    ],
    links: [{ rel: "canonical", href: "/receitas" }],
  }),

  component: RecipesPage,
});

function RecipesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title="Receitas Japonesas"
        subtitle="Do nigiri minimalista ao ramen tonkotsu mais reconfortante: aprenda como fazer comida japonesa em casa com receitas testadas — sushi, temaki, hot roll, yakisoba, tempura, gyoza, mochi e o clássico molho teriyaki."

        crumbs={[{ label: "Home", to: "/" }, { label: "Receitas" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => <RecipeCard key={r.slug} recipe={r} />)}
        </div>
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="grid h-9 w-9 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">1</button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-sm font-bold text-muted-foreground hover:bg-secondary">2</button>
          <button className="ml-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary">Próxima →</button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
