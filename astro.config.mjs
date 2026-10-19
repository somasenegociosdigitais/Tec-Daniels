import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// Data real da última alteração de cada página, tirada do histórico do git.
// Se a página não for encontrada, o sitemap simplesmente não leva data para ela.
function dataDoGit(url) {
  const slug = new URL(url).pathname.replace(/^\/|\/$/g, '') || 'index';
  const arquivo = [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`, `src/pages/${slug}.md`].find(existsSync);
  if (!arquivo) return undefined;
  try {
    return execSync(`git log -1 --format=%cI -- "${arquivo}"`).toString().trim() || undefined;
  } catch {
    return undefined;
  }
}

export default defineConfig({
  // Endereço oficial: https + www. O Astro usa isso no sitemap e nos canonicals.
  site: 'https://www.tecdaniels.com.br',

  // Todas as páginas com barra final (é o padrão que o site já usa nos canonicals).
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },

  integrations: [
    sitemap({
      // Tira do sitemap as páginas noindex (/mapa/ e /politica-de-privacidade/):
      // sitemap só deve listar páginas que o Google pode indexar.
      filter: (page) => !page.includes('/mapa/') && !page.includes('/politica-de-privacidade/'),
      // Troque a opção `lastmod: new Date()` (se existir) por isto: hoje todas as 39 URLs
      // saem com a mesma data do build e o Google ignora o campo. Com a data do git,
      // cada página leva a data real da última alteração (o que também conta como
      // "frescor" para os buscadores de IA).
      // ATENÇÃO: se o build roda no GitHub Actions, o checkout precisa de `fetch-depth: 0`,
      // senão o git só enxerga o último commit e todas as datas ficam iguais.
      changefreq: 'monthly',
      serialize(item) {
        const data = dataDoGit(item.url);
        if (data) item.lastmod = data;
        return item;
      },
    }),
  ],

});
