import { Link } from "@tanstack/react-router";
import { PageBannerSketches } from "./SketchMotifs";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageBanner({
  title,
  subtitle,
  crumbs,
  eyebrow,
  meta,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  eyebrow?: string;
  meta?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <PageBannerSketches />
      <div
        className={`relative mx-auto max-w-4xl px-4 py-20 md:py-24 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl font-extrabold leading-tight text-ink md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {subtitle}
          </p>
        )}
        {meta && <div className="mt-5 flex items-center justify-center gap-3 text-xs text-muted-foreground">{meta}</div>}
        {crumbs && crumbs.length > 0 && (
          <nav className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="text-primary hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
