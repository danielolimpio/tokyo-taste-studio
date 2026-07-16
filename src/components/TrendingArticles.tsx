import { Link } from "@tanstack/react-router";
import { Flame, Clock, ArrowRight } from "lucide-react";
import { recipes } from "@/lib/recipes";

export function TrendingArticles() {
  const trending = recipes.slice(0, 6);
  const [hero, ...rest] = trending;

  return (
    <section aria-labelledby="trending-heading" className="relative border-t border-border/60 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              <Flame className="h-3.5 w-3.5" />
              Em alta agora
            </span>
            <h2 id="trending-heading" className="mt-3 text-3xl font-extrabold text-ink md:text-4xl">
              Artigos e Receitas mais lidos da semana
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              As receitas japonesas mais buscadas no Google, testadas pela nossa equipe e amadas
              pelos leitores.
            </p>
          </div>
          <Link
            to="/receitas"
            className="hidden items-center gap-2 rounded-md border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5 md:inline-flex"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Hero card */}
          <Link
            to="/receitas/$slug"
            params={{ slug: hero.slug }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={hero.image}
                alt={hero.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow">
                #1 em alta
              </span>
            </div>
            <div className="p-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                {hero.category}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-ink group-hover:text-primary">
                {hero.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{hero.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {hero.prep}
                </span>
                <span>Por {hero.author}</span>
              </div>
            </div>
          </Link>

          {/* Compact list */}
          <ol className="grid gap-4 sm:grid-cols-1">
            {rest.map((r, i) => (
              <li key={r.slug}>
                <Link
                  to="/receitas/$slug"
                  params={{ slug: r.slug }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-28">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-full bg-ink/85 text-[11px] font-bold text-white">
                      {i + 2}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {r.category}
                    </span>
                    <h3 className="mt-1 line-clamp-2 text-sm font-extrabold leading-snug text-ink group-hover:text-primary sm:text-base">
                      {r.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {r.prep}
                      </span>
                      <span>Por {r.author}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/receitas"
            className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary"
          >
            Ver todas as receitas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
