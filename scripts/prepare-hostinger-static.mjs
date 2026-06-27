import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const publicDir = "dist/client";
const assetsDir = join(publicDir, "assets");

const files = readdirSync(assetsDir);
const entryScript = files.find((file) => /^index-[\w-]+\.js$/.test(file));
const stylesheet = files.find((file) => /^styles-[\w-]+\.css$/.test(file));

if (!entryScript) {
  throw new Error("Não foi possível encontrar o bundle principal em dist/client/assets.");
}

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

writeFileSync(join(publicDir, "index.html"), html);
writeFileSync(join(publicDir, ".htaccess"), htaccess);

console.log(`Hostinger static files created: index.html, .htaccess, /assets/${entryScript}`);