import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tecdaniels.com.br',
  trailingSlash: 'always',
  integrations: [sitemap({ changefreq: 'monthly', lastmod: new Date() })],
  build: { inlineStylesheets: 'always' },
});
