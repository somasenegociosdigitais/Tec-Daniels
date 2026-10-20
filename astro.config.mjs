import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

// O texto de 35 páginas fica em src/data/conteudo.json, não no arquivo da página.
// Cada página tem ali o campo "atualizado" (AAAA-MM-DD): ao mudar o texto de uma
// página, atualize esse campo só nela. O sitemap usa a data mais recente entre
// esse campo e o último commit do arquivo da página.
const conteudo = JSON.parse(readFileSync('./src/data/conteudo.json', 'utf8'));
const ATUALIZADO = {};
for (const [k, p] of Object.entries(conteudo.servico.PAGINAS)) ATUALIZADO[k] = p.atualizado;
for (const [k, p] of Object.entries(conteudo.bairro.BAIRROS)) ATUALIZADO['aquecedor-a-gas-' + k] = p.atualizado;
for (const [k, p] of Object.entries(conteudo.marca.MARCAS)) ATUALIZADO['assistencia-tecnica-' + k] = p.atualizado;
for (const [k, p] of Object.entries(conteudo.institucional.PAGINAS)) ATUALIZADO[k] = p.atualizado;

// Data real da última alteração de cada página, tirada do histórico do git.
function dataDoGit(slug) {
  const arquivo = [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`, `src/pages/${slug}.md`].find(existsSync);
  if (!arquivo) return undefined;
  try {
    return execSync(`git log -1 --format=%cI -- "${arquivo}"`).toString().trim() || undefined;
  } catch {
    return undefined;
  }
}

function dataDaPagina(url) {
  const slug = new URL(url).pathname.replace(/^\/|\/$/g, '') || 'index';
  const datas = [dataDoGit(slug), ATUALIZADO[slug] && ATUALIZADO[slug] + 'T12:00:00-03:00']
    .filter(Boolean).map((d) => new Date(d)).filter((d) => !isNaN(d));
  if (!datas.length) return undefined;
  return new Date(Math.max(...datas)).toISOString();
}

export default defineConfig({
  // Endereço oficial: https + www. O Astro usa isso no sitemap e nos canonicals.
  site: 'https://www.tecdaniels.com.br',

  // Todas as páginas com barra final (é o padrão que o site já usa nos canonicals).
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },

  integrations: [
    sitemap({
      // Tira do sitemap as páginas noindex (/mapa/ e /politica-de-privacidade/).
      filter: (page) => !page.includes('/mapa/') && !page.includes('/politica-de-privacidade/'),
      // O GitHub Actions precisa de `fetch-depth: 0` no checkout (já está no deploy.yml).
      changefreq: 'monthly',
      serialize(item) {
        const data = dataDaPagina(item.url);
        if (data) item.lastmod = data;
        return item;
      },
    }),
  ],

});
