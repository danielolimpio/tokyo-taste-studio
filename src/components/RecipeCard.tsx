import { Link } from "@tanstack/react-router";
import type { Recipe } from "@/lib/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link to="/receitas/$slug" params={{ slug: recipe.slug }} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-3 p-5">
          <span className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            {recipe.category}
          </span>
          <h3 className="text-lg font-extrabold leading-snug text-ink transition group-hover:text-primary">
            {recipe.title}
          </h3>
          <div className="flex items-center gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
              {recipe.author[0]}
            </div>
            <span className="font-semibold uppercase tracking-wider text-foreground">
              {recipe.author}
            </span>
            <span className="opacity-50">•</span>
            <span className="uppercase tracking-wider">{recipe.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
