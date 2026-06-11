import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/recipes";

export const Route = createFileRoute("/receitas")({
  head: () => ({
    meta: [
      { title: "Receitas — ComidasJaponesas" },
      { name: "description", content: "Todas as receitas japonesas do blog: sushi, ramen, tempura, yakitori, mochi e muito mais." },
      { property: "og:title", content: "Receitas — ComidasJaponesas" },
      { property: "og:description", content: "Catálogo completo de receitas autênticas da culinária japonesa." },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title="Receitas"
        subtitle="Do nigiri mais minimalista à tigela de ramen mais reconfortante: cada prato testado e fotografado por nossa cozinha — pronto para você reproduzir em casa."
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
