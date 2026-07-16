import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { RecipeCard } from "@/components/RecipeCard";
import { categories, findCategory, recipesForCategory } from "@/lib/categories";

export const Route = createFileRoute("/categorias/$slug")({
  loader: ({ params }) => {
    const category = findCategory(params.slug);
    if (!category) throw notFound();
    return { category, recipes: recipesForCategory(params.slug) };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Categoria não encontrada" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { category } = loaderData;
    const url = `https://comidasjaponesas.com/categorias/${params.slug}`;
    return {
      meta: [
        { title: category.title },
        { name: "description", content: category.metaDescription },
        { name: "keywords", content: category.keywords },
        { property: "og:title", content: category.title },
        { property: "og:description", content: category.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: category.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-ink">Categoria não encontrada</h1>
        <p className="mt-4 text-muted-foreground">
          Volte para a{" "}
          <Link to="/categorias" className="text-primary underline">
            lista de categorias
          </Link>
          .
        </p>
      </div>
      <SiteFooter />
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, recipes } = Route.useLoaderData() as ReturnType<typeof recipesLoader>;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title={category.name}
        subtitle={category.summary}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Categorias", to: "/categorias" },
          { label: category.name },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 pt-16">
        <h2 className="text-2xl font-extrabold text-ink">Sobre esta categoria</h2>
        {category.intro.map((p, i) => (
          <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <ul className="mt-6 flex flex-wrap gap-2">
          {category.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-2xl font-extrabold text-ink">
          Receitas de {category.name}
        </h2>
        {recipes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-cream p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Novas receitas desta categoria estão sendo preparadas pela nossa cozinha.
              Enquanto isso, explore a{" "}
              <Link to="/receitas" className="font-semibold text-primary underline">
                lista completa de receitas
              </Link>
              .
            </p>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="text-2xl font-extrabold text-ink">Guia completo de {category.name}</h2>
        {category.longDescription.map((p, i) => (
          <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <h2 className="text-2xl font-extrabold text-ink">Perguntas frequentes</h2>
        <div className="mt-6 space-y-4">
          {category.faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5 open:shadow-md"
            >
              <summary className="cursor-pointer list-none text-base font-bold text-ink transition group-open:text-primary">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-cream p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
            Outras categorias
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/categorias/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
