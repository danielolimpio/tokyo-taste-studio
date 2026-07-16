import { Link } from "@tanstack/react-router";
import sushisAsset from "@/assets/cat-sushis.jpg.asset.json";
import quentesAsset from "@/assets/cat-quentes.jpg.asset.json";
import entradasAsset from "@/assets/cat-entradas.jpg.asset.json";
import sobremesasAsset from "@/assets/cat-sobremesas.jpg.asset.json";
import molhosAsset from "@/assets/cat-molhos.jpg.asset.json";

const items = [
  { label: "Sushis", slug: "sushis-e-sashimis", img: sushisAsset.url },
  { label: "Quentes", slug: "pratos-quentes", img: quentesAsset.url },
  { label: "Entradas", slug: "acompanhamentos-e-entradas", img: entradasAsset.url },
  { label: "Sobremesas", slug: "sobremesas-japonesas", img: sobremesasAsset.url },
  { label: "Molhos", slug: "bebidas-e-molhos-japoneses", img: molhosAsset.url },
];

export function CategoryCircles() {
  return (
    <section aria-label="Categorias de comidas japonesas" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <ul className="flex flex-wrap items-start justify-center gap-5 sm:gap-8 md:gap-10">
          {items.map((it) => (
            <li key={it.slug} className="flex flex-col items-center">
              <Link
                to="/categorias/$slug"
                params={{ slug: it.slug }}
                className="group flex flex-col items-center gap-2 text-center"
              >
                <span className="relative block rounded-full p-[2px] ring-2 ring-primary transition group-hover:ring-primary/70">
                  <span className="block h-14 w-14 overflow-hidden rounded-full sm:h-16 sm:w-16 md:h-20 md:w-20">
                    <img
                      src={it.img}
                      alt={it.label}
                      width={160}
                      height={160}
                      loading="lazy"
                      className="block h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                  </span>
                </span>
                <span className="max-w-[6rem] text-xs font-bold leading-tight text-ink group-hover:text-primary sm:text-sm">
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
