# TecDaniel's — site

Astro estático. Cada página é um arquivo .astro com conteúdo próprio: nunca clonar
página trocando nome de serviço ou bairro (conteúdo duplicado derruba as páginas boas).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # gera dist/

## Estrutura

    src/data/site.js        NAP, menu, marcas, bairros, lista de serviços
    src/layouts/Base.astro  head, SEO, JSON-LD, header, rodapé
    src/components/         blocos reutilizáveis (chrome, não conteúdo)
    src/pages/              uma pasta por URL

## Regras de SEO (ver CLAUDE.md do projeto de design)

- Um H1 por página, com a palavra-chave principal e a localidade.
- Título e description próprios, palavra-chave no início do título. 60/155 caracteres.
- Toda página linka para a home com âncora descritiva — nunca `clique aqui`.
- Breadcrumb com Início no topo; Conheça também entre páginas irmãs.
- Fluxo de link juice: página filha → hub → home.

## Performance

O head sai pronto no HTML: title, description, canonical e JSON-LD são renderizados
no build, não injetados por script. Sem React, sem bundle de runtime. O único JS é
o clique de WhatsApp. Não introduzir framework client-side sem motivo.
