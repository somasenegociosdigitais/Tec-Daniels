import { ARTIGOS, artigoUrl } from '../data/blog.js';

// Feed do blog: /rss.xml, gerado de src/data/blog.js (todos os posts). Sem dependência externa.
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET(context) {
  const site = String(context.site).replace(/\/$/, '');
  const itens = [...ARTIGOS].sort((x, y) => y.publicado.localeCompare(x.publicado));
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<rss version="2.0"><channel>'
    + '<title>Blog TecDaniel\'s</title>'
    + '<link>' + site + '/blog/</link>'
    + '<description>Guias sobre aquecedor a gás e rede de gás no Rio de Janeiro, escritos pela equipe técnica da TecDaniel\'s.</description>'
    + '<language>pt-br</language>'
    + itens.map((a) => {
      const url = site + artigoUrl(a.slug);
      return '<item><title>' + esc(a.h1) + '</title><link>' + url + '</link><guid>' + url + '</guid>'
        + '<description>' + esc(a.seoDescricao) + '</description>'
        + '<pubDate>' + new Date(a.publicado + 'T12:00:00-03:00').toUTCString() + '</pubDate></item>';
    }).join('')
    + '</channel></rss>';
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
