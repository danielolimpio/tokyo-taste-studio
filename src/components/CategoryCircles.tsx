import { Link } from "@tanstack/react-router";
import sushiImg from "@/assets/recipe-sushi.jpg";
import ramenImg from "@/assets/recipe-ramen.jpg";
import misoImg from "@/assets/recipe-miso.jpg";
import mochiImg from "@/assets/recipe-mochi.jpg";
import molhosImg from "@/assets/cat-molhos.jpg";

const items = [
  { label: "Sushis", slug: "sushis-e-sashimis", img: sushiImg },
  { label: "Quentes", slug: "pratos-quentes", img: ramenImg },
  { label: "Entradas", slug: "acompanhamentos-e-entradas", img: misoImg },
  { label: "Sobremesas", slug: "sobremesas-japonesas", img: mochiImg },
  { label: "Molhos", slug: "bebidas-e-molhos-japoneses", img: molhosImg },
];

export function CategoryCircles() {
  return (
    <section aria-label="Categorias de comidas japonesas" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <ul className="flex flex-wrap items-start justify-center gap-6 sm:gap-10 md:gap-14">
          {items.map((it) => (
            <li key={it.slug} className="flex flex-col items-center">
              <Link
                to="/categorias/$slug"
                params={{ slug: it.slug }}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <span className="relative block rounded-full p-[3px] ring-2 ring-primary transition group-hover:ring-primary/70">
                  <span className="block overflow-hidden rounded-full border-2 border-background">
                    <img
                      src={it.img}
                      alt={it.label}
                      width={160}
                      height={160}
                      loading="lazy"
                      className="h-20 w-20 object-cover transition duration-500 group-hover:scale-105 sm:h-24 sm:w-24 md:h-28 md:w-28"
                    />
                  </span>
                </span>
                <span className="max-w-[6rem] text-sm font-bold leading-tight text-ink group-hover:text-primary">
                  {it.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
