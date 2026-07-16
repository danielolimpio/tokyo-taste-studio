import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageBannerSketches } from "./SketchMotifs";

export interface LegalSection {
  id: string;
  label: string;
  icon: LucideIcon;
  content: React.ReactNode;
}

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}

export function LegalLayout({ eyebrow, title, intro, updatedAt, sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-cream">
        <PageBannerSketches />
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              {eyebrow}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Atualizado em {updatedAt}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {intro}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[240px_1fr]">
          {/* Sidebar TOC */}
          <aside className="md:sticky md:top-32 md:h-max">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Índice
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => {
                  const isActive = active === s.id;
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-ink"
                      }`}
                    >
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border transition ${
                          isActive
                            ? "border-primary/40 bg-white text-primary"
                            : "border-border bg-secondary/40 text-ink/70 group-hover:text-primary"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex-1 leading-tight">{s.label}</span>
                      <ChevronRight
                        className={`h-3.5 w-3.5 transition ${
                          isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 space-y-8">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-32 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                        Seção {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="text-xl font-extrabold leading-tight text-ink md:text-2xl">
                        {s.label}
                      </h2>
                    </div>
                  </div>
                  <div className="prose-legal text-[15px] leading-relaxed text-foreground/85">
                    {s.content}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ---------- Reusable content primitives ---------- */

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-base leading-relaxed text-ink/85">{children}</p>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

export function Badge({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "neutral" | "accent";
}) {
  const map = {
    primary: "border-primary/30 bg-primary/10 text-primary",
    neutral: "border-border bg-secondary/60 text-ink/80",
    accent: "border-amber-500/30 bg-amber-500/10 text-amber-700",
  } as const;
  return (
    <span
      className={`mr-2 mb-2 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${map[tone]}`}
    >
      {children}
    </span>
  );
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-4 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span className="flex-1">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoCard({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <div className="my-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
      <div className="mb-2 flex items-center gap-2 text-primary">
        {Icon && <Icon className="h-4 w-4" />}
        <p className="text-[11px] font-bold uppercase tracking-widest">{title}</p>
      </div>
      <div className="text-sm leading-relaxed text-ink/85">{children}</div>
    </div>
  );
}
