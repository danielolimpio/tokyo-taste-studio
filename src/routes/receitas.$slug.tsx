import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { findRecipe, recipes } from "@/lib/recipes";
import { Users, Clock, Flame, ChefHat, Printer } from "lucide-react";

export const Route = createFileRoute("/receitas/$slug")({
  loader: ({ params }) => {
    const recipe = findRecipe(params.slug);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => {
    const r = loaderData?.recipe;
    if (!r) return { meta: [{ title: "Receita não encontrada" }] };
    return {
      meta: [
        { title: `${r.title} — ComidasJaponesas` },
        { name: "description", content: r.excerpt },
        { property: "og:title", content: r.title },
        { property: "og:description", content: r.excerpt },
        { property: "og:image", content: r.image },
        { name: "twitter:image", content: r.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-32 text-center">
        <h1 className="text-3xl font-extrabold">Receita não encontrada</h1>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-32 text-center">
        <h1 className="text-3xl font-extrabold">Não foi possível carregar a receita</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
      </div>
      <SiteFooter />
    </div>
  ),
  component: RecipePage,
});

function RecipePage() {
  const { recipe: r } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title={r.title}
        eyebrow={r.category}
        meta={
          <>
            <span className="flex items-center gap-1.5">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                {r.author[0]}
              </span>
              <span className="font-semibold uppercase tracking-wider text-foreground">{r.author}</span>
            </span>
            <span className="opacity-50">/</span>
            <span className="uppercase tracking-wider">{r.date}</span>
            <span className="opacity-50">/</span>
            <span className="uppercase tracking-wider">1 comentário</span>
          </>
        }
      />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-base leading-relaxed text-primary/90">{r.excerpt}</p>

        {/* Hero image with print button */}
        <div className="relative mt-10 overflow-hidden rounded-xl">
          <img src={r.image} alt={r.title} className="w-full object-cover" />
          <button className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-ink/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-ink">
            <Printer className="h-3.5 w-3.5" /> Imprimir
          </button>
        </div>

        {/* Recipe card */}
        <div className="mt-10 rounded-xl border border-border bg-card">
          <header className="border-b border-border p-6">
            <h2 className="text-2xl font-extrabold text-ink">{r.title}</h2>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              Receita por {r.author}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Categoria: <span className="font-bold text-primary">{r.category}</span></span>
              <span>Cozinha: <span className="font-bold text-primary">{r.cuisine}</span></span>
              <span>Dificuldade: <span className="font-bold text-primary">{r.difficulty}</span></span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                [Users, "Porções", r.servings],
                [Clock, "Preparo", r.prep],
                [ChefHat, "Cocção", r.cook],
                [Flame, "Calorias", r.calories],
              ].map(([Icon, label, val]: any) => (
                <div key={label} className="rounded-lg border border-border bg-background p-4 text-center">
                  <Icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="text-sm font-bold text-ink">{val}</p>
                </div>
              ))}
            </div>
          </header>

          <section className="bg-[oklch(0.98_0.018_80)] p-6">
            <h3 className="text-lg font-extrabold text-ink">Ingredientes</h3>
            <ul className="mt-4 space-y-3">
              {r.ingredients.map((i) => (
                <li key={i} className="flex items-start gap-3 border-b border-border/60 pb-3 text-sm text-foreground last:border-0 last:pb-0">
                  <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-primary/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </section>

          <section className="p-6">
            <h3 className="text-lg font-extrabold text-ink">Modo de Preparo</h3>
            <ol className="mt-4 space-y-4">
              {r.directions.map((d, i) => (
                <li key={i} className="flex gap-4 border-b border-border/60 pb-4 text-sm text-foreground last:border-0">
                  <span className="text-2xl font-extrabold text-primary leading-none">{i + 1}</span>
                  <span className="pt-1.5">{d}</span>
                </li>
              ))}
            </ol>
          </section>

          {r.notes.length > 0 && (
            <section className="p-6 pt-0">
              <h3 className="text-lg font-extrabold text-ink">Notas do Chef</h3>
              <div className="mt-4 space-y-3">
                {r.notes.map((n, i) => (
                  <div key={i} className="flex gap-3 rounded-lg bg-[oklch(0.98_0.018_80)] p-4 text-sm text-foreground">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">i</span>
                    {n}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Comments */}
        <div className="mt-16">
          <h3 className="text-xl font-extrabold text-ink">Um comentário</h3>
          <div className="mt-6 border-t border-border pt-6">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">Y</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-extrabold text-ink">Yumi</p>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{r.date} / 09:30 / Responder</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Fiz no fim de semana e ficou perfeita — as quantidades estão muito precisas e o passo
                  a passo deixa tudo claro. Próxima vez vou dobrar o molho!
                </p>
              </div>
            </div>
          </div>

          {/* Reply form */}
          <div className="mt-12">
            <h4 className="text-lg font-extrabold text-ink">Deixe uma resposta</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Seu e-mail não será publicado. Campos obrigatórios marcados com *
            </p>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 md:grid-cols-3">
                <input placeholder="Nome *" className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                <input type="email" placeholder="E-mail *" className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                <input placeholder="Site" className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
              </div>
              <textarea placeholder="Comentário *" rows={5} className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="rounded border-border" />
                Salvar meu nome, e-mail e site neste navegador para a próxima vez que eu comentar.
              </label>
              <button className="w-fit rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                Publicar Comentário
              </button>
            </form>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
