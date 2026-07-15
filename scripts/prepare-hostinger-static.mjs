import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const deployDir = "hostinger-dist";

const candidates = [
  "dist/client",
  ".output/public",
  "dist/server/public",
  "dist/public",
  "dist",
];

let publicDir = null;
for (const c of candidates) {
  if (existsSync(c) && existsSync(join(c, "assets"))) {
    publicDir = c;
    break;
  }
}

if (!publicDir) {
  console.error("Build output not found. Inspected:");
  for (const c of candidates) {
    console.error(`- ${c}: exists=${existsSync(c)}`);
  }
  // Print top-level dist tree for debugging
  if (existsSync("dist")) {
    const walk = (dir, depth = 0) => {
      if (depth > 3) return;
      for (const f of readdirSync(dir)) {
        const p = join(dir, f);
        try {
          const s = statSync(p);
          console.error(" ".repeat(depth * 2) + (s.isDirectory() ? "[D] " : "    ") + p);
          if (s.isDirectory()) walk(p, depth + 1);
        } catch {}
      }
    };
    walk("dist");
  }
  throw new Error("Could not find client build output directory.");
}

const assetsDir = join(publicDir, "assets");
rmSync(deployDir, { recursive: true, force: true });
mkdirSync(deployDir, { recursive: true });
cpSync(publicDir, deployDir, { recursive: true });

const deployAssetsDir = join(deployDir, "assets");
if (!existsSync(deployAssetsDir)) {
  throw new Error(`Assets directory not copied to ${deployAssetsDir}.`);
}

// Nunca deixe uma pasta public_html no pacote local. Se ela existir no build,
// a Hostinger recria public_html/public_html durante o FTP.
const accidentalPublicHtml = join(deployDir, "public_html");
if (existsSync(accidentalPublicHtml)) {
  rmSync(accidentalPublicHtml, { recursive: true, force: true });
}

const files = readdirSync(deployAssetsDir);

// The real client entry contains the Vite mapDeps preamble and no internal imports.
// Pick the index-*.js file that contains "__vite__mapDeps" or, failing that, has no
// `import ... from "./` references (the bootstrap entry).
const jsFiles = files.filter((f) => /\.js$/.test(f));
let entryScript = null;

for (const f of jsFiles) {
  const content = readFileSync(join(deployAssetsDir, f), "utf8").slice(0, 2000);
  if (content.includes("__vite__mapDeps")) {
    entryScript = f;
    break;
  }
}

if (!entryScript) {
  // Fallback: pick the largest index-*.js
  const indexFiles = jsFiles
    .filter((f) => /^index-[\w-]+\.js$/.test(f))
    .map((f) => ({ f, size: statSync(join(deployAssetsDir, f)).size }))
    .sort((a, b) => b.size - a.size);
  if (indexFiles.length > 0) entryScript = indexFiles[0].f;
}

if (!entryScript) {
  throw new Error(`Could not identify client entry script in ${deployAssetsDir}.`);
}

const stylesheet = files.find((f) => /\.css$/.test(f));

const cssLink = stylesheet
  ? `    <link rel="stylesheet" href="/assets/${stylesheet}" />\n`
  : "";

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Comidas Japonesas | Receitas de Culinária Japonesa</title>
    <meta name="description" content="Receitas de comida japonesa passo a passo: sushi, ramen, temaki, yakisoba, tempura, gyoza, mochi e molho teriyaki." />
    <meta name="author" content="ComidasJaponesas" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ComidasJaponesas" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:title" content="Comidas Japonesas | Receitas de Culinária Japonesa" />
    <meta property="og:description" content="Sushi, ramen, temaki, yakisoba e receitas de comida japonesa passo a passo." />
    <meta property="og:url" content="https://comidasjaponesas.com/" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://comidasjaponesas.com/" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" />
${cssLink}  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entryScript}"></script>
  </body>
</html>
`;

const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^ index.html [L]
</IfModule>

DirectoryIndex index.html
Options -Indexes
`;

writeFileSync(join(deployDir, "index.html"), html);
writeFileSync(join(deployDir, ".htaccess"), htaccess);

console.log(`Hostinger static files created in ${deployDir} from ${publicDir}:`);
console.log(`  - index.html (entry: /assets/${entryScript}${stylesheet ? `, css: /assets/${stylesheet}` : ""})`);
console.log(`  - .htaccess`);
