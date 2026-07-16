import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { recipes } from "@/lib/recipes";
import { categories } from "@/lib/categories";

const BASE_URL = "https://comidasjaponesas.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/receitas", changefreq: "weekly", priority: "0.9", lastmod: today },
          { path: "/receitas/nomes-e-tipos", changefreq: "monthly", priority: "0.8" },
          { path: "/categorias", changefreq: "weekly", priority: "0.9", lastmod: today },
          { path: "/sobre", changefreq: "monthly", priority: "0.6" },
          { path: "/contato", changefreq: "monthly", priority: "0.5" },
          ...categories.map((c) => ({
            path: `/categorias/${c.slug}`,
            changefreq: "weekly" as const,
            priority: "0.85",
            lastmod: today,
          })),
          ...recipes.map((r) => ({
            path: `/receitas/${r.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
