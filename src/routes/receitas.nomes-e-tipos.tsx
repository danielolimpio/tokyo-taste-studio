import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";

type Term = { name: string; type: string; description: string };

const SUSHI: Term[] = [
  { name: "Niguiri (Nigiri)", type: "Sushi", description: "Bolinho oval de arroz shari coberto por uma fatia de peixe cru, geralmente salmão, atum ou peixe branco." },
  { name: "Hossomaki (Hosomaki)", type: "Maki", description: "Rolinho fino de arroz e um único recheio (pepino, salmão ou atum) envolto em alga nori — corte em 6 peças." },
  { name: "Uramaki", type: "Maki", description: "Rolinho ao contrário: arroz por fora, nori por dentro. É a base do California roll e do Filadélfia." },
  { name: "Futomaki", type: "Maki", description: "Rolinho grosso com vários recheios coloridos, comum em festas e celebrações." },
  { name: "Temaki", type: "Sushi", description: "Cone de alga nori recheado com arroz, peixe, legumes e molhos. Comido com as mãos." },
  { name: "Gunkan", type: "Sushi", description: "Bolinho de arroz envolto por uma faixa de nori formando um \"barquinho\", recheado com ikura, uni ou tartar." },
  { name: "Sashimi", type: "Peixe cru", description: "Fatias de peixe cru servidas sem arroz, acompanhadas de shoyu e wasabi." },
  { name: "Chirashi", type: "Sushi", description: "Tigela de arroz temperado coberta com peixes variados e legumes." },
  { name: "Hot Roll", type: "Maki", description: "Uramaki empanado em panko e frito rapidamente, servido quente com molho tarê." },
  { name: "Kani", type: "Ingrediente", description: "Bastão de surimi (peixe processado) com sabor de caranguejo, usado em California roll e saladas." },
];

const PRATOS: Term[] = [
  { name: "Ramen", type: "Sopa", description: "Macarrão servido em caldo encorpado (tonkotsu, shoyu, missô ou shio), com chashu, ovo e cebolinha." },
  { name: "Udon", type: "Sopa", description: "Macarrão grosso de trigo servido em caldo dashi quente ou frio com molho." },
  { name: "Soba", type: "Sopa", description: "Macarrão fino feito de trigo sarraceno, servido quente ou frio com molho tsuyu." },
  { name: "Yakisoba", type: "Salteado", description: "Macarrão salteado com carne, legumes e molho à base de shoyu — clássico das festas." },
  { name: "Yakimeshi", type: "Arroz", description: "Arroz frito japonês com ovos, vegetais e carne ou frutos do mar." },
  { name: "Donburi", type: "Tigela", description: "Tigela de arroz coberta com proteína: gyudon (carne), oyakodon (frango e ovo), katsudon (empanado)." },
  { name: "Tempura", type: "Frito", description: "Camarões e legumes envolvidos em massa leve e fritos até ficarem crocantes." },
  { name: "Tonkatsu", type: "Frito", description: "Lombo ou filé de porco empanado em panko e frito, servido com molho tonkatsu." },
  { name: "Gyoza", type: "Pastel", description: "Pastéis japoneses recheados com carne suína e repolho, selados na chapa e cozidos no vapor." },
  { name: "Yakitori", type: "Grelhado", description: "Espetinhos de frango grelhados na brasa, pincelados com molho tarê ou apenas sal." },
];

const SOPAS_DOCES: Term[] = [
  { name: "Missoshiru (Sopa de Missô)", type: "Sopa", description: "Caldo de dashi com pasta de missô, tofu, wakame e cebolinha. Servida no início das refeições." },
  { name: "Mochi", type: "Doce", description: "Bolinho macio de arroz glutinoso, recheado com anko (pasta de feijão doce) ou sorvete." },
  { name: "Dorayaki", type: "Doce", description: "Dois mini-panquecas recheadas com anko — o doce favorito do Doraemon." },
  { name: "Dango", type: "Doce", description: "Bolinhos de arroz glutinoso espetados, servidos com molho doce de shoyu (mitarashi)." },
  { name: "Taiyaki", type: "Doce", description: "Bolinho em formato de peixe recheado com anko, creme ou chocolate." },
  { name: "Pancake Soufflé Japonês", type: "Doce", description: "Panqueca alta e fofa feita com claras em neve, cozida em fogo baixo com tampa." },
];

const MOLHOS: Term[] = [
  { name: "Shoyu", type: "Molho", description: "Molho de soja fermentado — base de quase todos os molhos da culinária japonesa." },
  { name: "Teriyaki", type: "Molho", description: "Mistura brilhante de shoyu, mirin, saquê e açúcar usada para glacear carnes e peixes." },
  { name: "Tarê", type: "Molho", description: "Molho reduzido e adocicado usado em yakitori, hot roll e unagi." },
  { name: "Ponzu", type: "Molho", description: "Molho cítrico à base de shoyu e suco de yuzu ou limão — leve e refrescante." },
  { name: "Wasabi", type: "Condimento", description: "Pasta picante de raiz-forte japonesa, servida com sushi e sashimi." },
  { name: "Gari", type: "Condimento", description: "Gengibre em conserva, usado entre uma peça e outra de sushi para limpar o paladar." },
];

const SECTIONS: { id: string; title: string; intro: string; terms: Term[] }[] = [
  { id: "sushi", title: "Sushi e Sashimi", intro: "Os tipos de sushi mais pedidos nos rodízios japoneses — do clássico niguiri ao temaki que viralizou no Brasil.", terms: SUSHI },
  { id: "pratos", title: "Pratos Quentes e Salteados", intro: "Macarrões, frituras e tigelas que formam o coração da comida japonesa do dia a dia.", terms: PRATOS },
  { id: "sopas-doces", title: "Sopas e Doces (Wagashi)", intro: "Do missoshiru de abertura aos doces tradicionais com pasta de feijão anko.", terms: SOPAS_DOCES },
  { id: "molhos", title: "Molhos e Condimentos", intro: "Os molhos que dão identidade à culinária japonesa — shoyu, teriyaki, tarê, ponzu e mais.", terms: MOLHOS },
];

export const Route = createFileRoute("/receitas/nomes-e-tipos")({
  head: () => ({
    meta: [
      { title: "Comidas Japonesas: Nomes e Tipos | Guia Completo" },
      { name: "description", content: "Guia de nomes de comidas japonesas: significado de niguiri, hossomaki, temaki, kani, ramen, yakisoba, tempura, mochi e mais." },
      { name: "keywords", content: "comidas japonesas nomes, tipos de sushi, o que é niguiri, o que é hossomaki, o que é temaki, kani, ramen, yakisoba, tempura, mochi, glossário comida japonesa" },
      { property: "og:title", content: "Guia de Nomes de Comidas Japonesas" },
      { property: "og:description", content: "O que é sushi, niguiri, temaki, ramen, tempura e mais — glossário completo da culinária japonesa." },
      { property: "og:url", content: "/receitas/nomes-e-tipos" },
    ],
    links: [{ rel: "canonical", href: "/receitas/nomes-e-tipos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Guia de Nomes de Comidas Japonesas",
          hasDefinedTerm: [...SUSHI, ...PRATOS, ...SOPAS_DOCES, ...MOLHOS].map((t) => ({
            "@type": "DefinedTerm",
            name: t.name,
            description: t.description,
            inDefinedTermSet: "Culinária Japonesa",
          })),
        }),
      },
    ],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title="Comidas Japonesas: Nomes e Tipos"
        eyebrow="Guia Completo"
        subtitle="Um glossário visual da culinária japonesa: o que significa cada nome do cardápio — do niguiri ao mochi, do hossomaki ao yakisoba — explicado em uma frase."
        crumbs={[{ label: "Home", to: "/" }, { label: "Receitas", to: "/receitas" }, { label: "Nomes e Tipos" }]}
      />

      {/* Index */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="sr-only">Categorias do guia</h2>
        <nav aria-label="Sumário do guia" className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Sumário</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm font-semibold text-ink hover:text-primary">
                  → {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="mt-10 space-y-16">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{section.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{section.intro}</p>
              <dl className="mt-8 grid gap-4 md:grid-cols-2">
                {section.terms.map((t) => (
                  <div key={t.name} className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-base font-extrabold text-ink">{t.name}</dt>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                        {t.type}
                      </span>
                    </div>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </article>

        <div className="mt-16 rounded-2xl bg-cream p-8 text-center">
          <h2 className="text-xl font-extrabold text-ink md:text-2xl">Pronto para colocar a mão na massa?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Agora que você conhece os nomes, explore as receitas passo a passo de comida japonesa
            testadas pela nossa cozinha.
          </p>
          <Link
            to="/receitas"
            className="mt-5 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Ver Receitas Japonesas
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
