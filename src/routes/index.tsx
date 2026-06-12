import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBannerSketches } from "@/components/SketchMotifs";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/recipes";
import { Clock, User, Apple, Beef, Cookie, Soup } from "lucide-react";
import hero from "@/assets/hero-pancakes.jpg";
import appPromo from "@/assets/app-promo.jpg";
import chef from "@/assets/chef-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comidas Japonesas | Receitas de Culinária Japonesa" },
      { name: "description", content: "Receitas de comida japonesa passo a passo: sushi, ramen, temaki, yakisoba, tempura, gyoza, mochi e molho teriyaki para fazer em casa." },
      { name: "keywords", content: "comidas japonesas, receitas japonesas, culinária japonesa, como fazer sushi, receita de ramen, temaki, yakisoba, tempura, gyoza, mochi, molho teriyaki" },
      { property: "og:title", content: "Comidas Japonesas | Receitas de Culinária Japonesa" },
      { property: "og:description", content: "Sushi, ramen, temaki, yakisoba e dezenas de receitas de comida japonesa passo a passo." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),


  component: Home,
});

function Home() {
  const week = recipes.slice(0, 6);
  const categories = [
    { label: "Sushi", icon: Apple },
    { label: "Ramen", icon: Soup },
    { label: "Yakitori", icon: Beef },
    { label: "Doces", icon: Cookie },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-cream">
        <PageBannerSketches />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Receita da semana
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] text-ink md:text-6xl">
              Comidas Japonesas<br />Receitas Autênticas
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                  <User className="h-3.5 w-3.5" />
                </span>
                Por <span className="font-semibold text-foreground">Chef Akira</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />Atualizado semanalmente
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Aprenda a fazer as principais comidas japonesas em casa: sushi, ramen, temaki,
              yakisoba, tempura, hot roll, gyoza e mochi — receitas de culinária japonesa
              testadas, com técnica tradicional e ingredientes acessíveis.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/receitas/$slug"
                params={{ slug: "sushi-variado-tradicional" }}
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
              >
                Ver Receita
              </Link>
              <Link
                to="/receitas"
                className="rounded-md border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                Explorar Receitas
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img src={hero} alt="Pancakes japoneses" width={896} height={1024} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Recipes of the week */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Receitas Japonesas da Semana</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            As receitas de comida japonesa mais buscadas: como fazer sushi em casa, ramen tonkotsu,
            temaki de salmão, yakisoba de frango e tempura crocante — passo a passo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {week.map((r) => <RecipeCard key={r.slug} recipe={r} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/receitas" className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
            Ver Todas as Receitas
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Receitas de Culinária Japonesa por Categoria</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore a gastronomia japonesa por tipo de prato: sushi e sashimi, sopas de ramen e
              missoshiru, grelhados yakitori e os clássicos doces japoneses como mochi e dorayaki.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {categories.map(({ label, icon: Icon }) => (
              <Link
                to="/receitas"
                key={label}
                className="group relative overflow-hidden rounded-xl bg-ink/90 p-8 text-center text-white transition hover:-translate-y-1"
              >
                <Icon className="mx-auto h-10 w-10 text-primary transition group-hover:scale-110" />
                <h3 className="mt-4 text-lg font-extrabold text-white">{label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* App download */}
      <section className="grid md:grid-cols-2">
        <img src={appPromo} alt="App de receitas" loading="lazy" className="h-72 w-full object-cover md:h-full" />
        <div className="relative isolate overflow-hidden bg-cream-deep p-10 md:p-16">
          <PageBannerSketches />
          <div className="relative max-w-md">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Em breve</span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">Baixe nosso App</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Cozinhe com as mãos livres: receitas em modo passo a passo, timer integrado e lista de
              compras automática.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="rounded-md bg-ink px-5 py-3 text-xs font-semibold text-white">App Store</div>
              <div className="rounded-md bg-ink px-5 py-3 text-xs font-semibold text-white">Google Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualified chefs */}
      <section className="relative isolate overflow-hidden bg-cream">
        <PageBannerSketches />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Nossos Chefs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Três gerações de cozinha japonesa em uma só mesa — tradição, técnica e o respeito ao
            ingrediente que move tudo.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { name: "Akira Tanaka", role: "Itamae Sênior", img: chefAkira },
              { name: "Mei Sato", role: "Chef Pâtissière", img: chefMei },
              { name: "Yuki Nakamura", role: "Sous Chef", img: chefYuki },
              { name: "Haruka Inoue", role: "Chef de Sushi", img: chefHaruka },
              { name: "Ren Kobayashi", role: "Mestre Ramen", img: chefRen },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-white shadow-md">
                  <img src={c.img} alt={c.name} loading="lazy" width={768} height={768} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{c.name}</h3>
                <p className="text-xs uppercase tracking-widest text-primary">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Premiado em 2025</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:text-4xl">
            Uma comunidade global apaixonada por culinária japonesa
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["+2.000", "Leitores diários"],
              ["+3.000", "Receitas testadas"],
              ["100%", "Satisfação"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-4xl font-extrabold text-primary">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-neutral-300">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative isolate overflow-hidden bg-cream py-20">
        <PageBannerSketches />
        <div className="relative mx-auto max-w-2xl px-4">
          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-extrabold text-ink md:text-3xl">Newsletter Semanal</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Insira seu e-mail e receba novas receitas toda semana.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="seu@email.com"
                className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
              />
              <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
