import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { PageBannerSketches } from "@/components/SketchMotifs";
import { Play } from "lucide-react";
import chef from "@/assets/chef-hero.jpg";
import video from "@/assets/video-poster.jpg";
import grandma from "@/assets/grandma-recipes.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Blog de Comidas Japonesas" },
      { name: "description", content: "Conheça o ComidasJaponesas: receitas testadas de culinária japonesa — sushi, ramen, temaki e clássicos da gastronomia japonesa." },
      { name: "keywords", content: "blog de culinária japonesa, comidas japonesas, gastronomia japonesa" },
      { property: "og:title", content: "Sobre | Comidas Japonesas" },
      { property: "og:description", content: "Quem está por trás das receitas de comida japonesa do blog." },

      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),

  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title="Sobre Nós"
        subtitle="Uma carta de amor à culinária japonesa — três chefs, uma cozinha pequena no Bairro Liberdade e muitas histórias para contar."
        crumbs={[{ label: "Home", to: "/" }, { label: "Sobre" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-16 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossa história</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Tradição, técnica e respeito ao ingrediente
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Começamos como um caderno de receitas passado de mão em mão entre familiares — anotações
            em japonês e em português, esboços de pratos e correções a lápis. Em 2024, decidimos abrir
            esse caderno para o mundo: o ComidasJaponesas nasceu para preservar e compartilhar a
            cozinha que aprendemos em casa.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Cada receita aqui é testada três vezes na nossa cozinha antes de virar texto. Acreditamos
            que a tradição se mantém viva quando é praticada — não decorada.
          </p>
          <p className="mt-8 font-serif text-2xl italic text-ink">— Chef Akira</p>
        </div>
        <div className="relative">
          <img src={chef} alt="Chef Akira" loading="lazy" className="w-full rounded-2xl shadow-xl" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={video} alt="Cozinha em ação" loading="lazy" className="w-full" />
          <button className="absolute inset-0 grid place-items-center" aria-label="Reproduzir vídeo">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 shadow-lg transition hover:scale-105">
              <Play className="h-6 w-6 translate-x-0.5 fill-primary text-primary" />
            </span>
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Aulas de cozinha japonesa abertas ao público
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Toda semana abrimos nossa cozinha para grupos pequenos. Você aprende a fazer arroz de
            sushi do zero, dobrar gyoza e entender por que o dashi muda tudo. Sem mistério — só
            prática, repetição e bom temperinho.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            As aulas duram cerca de 3 horas e terminam com uma refeição compartilhada feita pelos
            próprios alunos.
          </p>
          <button className="mt-7 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
            Explorar Receitas
          </button>
        </div>
      </section>

      {/* Chefs */}
      <section className="relative isolate overflow-hidden bg-cream">
        <PageBannerSketches />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Nossos Chefs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Três trajetórias diferentes, uma mesma obsessão: a precisão silenciosa da cozinha japonesa.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { name: "Akira Tanaka", role: "Itamae", img: chefAkira },
              { name: "Mei Sato", role: "Pâtissière", img: chefMei },
              { name: "Yuki Nakamura", role: "Sous Chef", img: chefYuki },
              { name: "Haruka Inoue", role: "Chef de Sushi", img: chefHaruka },
              { name: "Ren Kobayashi", role: "Mestre Ramen", img: chefRen },
            ].map((c) => (
              <div key={c.name}>
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-white shadow-md">
                  <img src={c.img} alt={c.name} loading="lazy" width={768} height={768} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{c.name}</h3>
                <p className="text-xs uppercase tracking-widest text-primary">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grandma feature */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={grandma} alt="Receitas da vovó" loading="lazy" className="h-72 w-full object-cover md:h-96" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-14">
            <div className="max-w-md text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Por Vovó Hanako</p>
              <h3 className="mt-2 text-3xl font-extrabold md:text-4xl">Receitas da Vovó</h3>
              <p className="mt-3 text-sm text-neutral-200">
                As receitas mais antigas do nosso caderno — anotadas à mão pela nossa vovó na década de 60.
              </p>
              <button className="mt-5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                Explorar Receitas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Depoimentos</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Camila Ribeiro", t: "Acompanho o blog há meses e as receitas são incríveis — sempre dão certo na primeira tentativa." },
              { n: "Pedro Tanaka", t: "Finalmente consegui fazer um caldo de ramen decente em casa. Vale cada minuto investido." },
              { n: "Aline Souza", t: "As fotos e o texto inspiram. Já marquei aula presencial pra Mei me ensinar mochi pessoalmente!" },
            ].map((x) => (
              <figure key={x.n} className="rounded-xl bg-card p-6 text-left shadow-sm">
                <blockquote className="text-sm leading-relaxed text-foreground">"{x.t}"</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{x.n[0]}</div>
                  <span className="text-sm font-bold text-ink">{x.n}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
