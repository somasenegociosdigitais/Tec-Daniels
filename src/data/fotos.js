// Fotos de serviço executado por página. Só as páginas que têm foto real
// aparecem com a seção; as outras seguem sem ela.
export const FOTOS_POR_PAGINA = {
  'instalacao-de-aquecedor-a-gas': {
    olho: 'Instalações executadas',
    titulo: 'Aparelho instalado, exaustão feita e ligação testada',
    intro: 'Toda instalação termina com o duto de exaustão dimensionado, as ligações de água e gás em flexível e o teste de funcionamento. As fotos são de atendimentos nossos.',
    itens: [
      { src: '/assets/obras/aquecedor-rinnai-instalado.webp', alt: 'Aquecedor a gás Rinnai instalado, com duto de exaustão e ligações de água e gás em flexível', legenda: 'Rinnai instalado e ligado', retrato: true },
      { src: '/assets/obras/aquecedor-komeco-slim-instalado.webp', alt: 'Aquecedor a gás Komeco Slim KO 07M BP instalado, com registro de gás e ligações de água', legenda: 'Komeco Slim, com registro identificado', retrato: true },
      { src: '/assets/obras/aquecedor-lorenzetti-lz1600de-instalado.webp', alt: 'Aquecedor a gás Lorenzetti LZ 1600DE instalado em área de serviço, com exaustão pelo teto', legenda: 'Lorenzetti LZ 1600DE com exaustão pelo teto', retrato: true },
      { src: '/assets/obras/aquecedor-rinnai-varanda-exaustao-instalado.webp', alt: 'Aquecedor a gás Rinnai instalado em varanda, com duto de exaustão levado para fora', legenda: 'Rinnai em varanda, com exaustão para o exterior', retrato: true },
      { src: '/assets/obras/aquecedor-komeco-area-externa-instalado.webp', alt: 'Aquecedor a gás Komeco instalado em área externa, com ligações de água e gás aparentes', legenda: 'Komeco em área externa', retrato: true },
      { src: '/assets/obras/aquecedor-lorenzetti-lz1600n-banheiro-instalado.webp', alt: 'Aquecedor a gás Lorenzetti LZ 1600N instalado em banheiro, com ligações de água e gás', legenda: 'Lorenzetti LZ 1600N em banheiro', retrato: true },
      { src: '/assets/obras/aquecedor-lorenzetti-lz1600n-exaustao-instalado.webp', alt: 'Duto de exaustão do aquecedor Lorenzetti LZ 1600N subindo pela parede até a saída externa', legenda: 'Exaustão do mesmo aparelho, até a saída externa', retrato: true },
    ],
  },
  'conserto-de-aquecedor-a-gas': {
    olho: 'Atendimento executado',
    titulo: 'Quando o conserto não compensa, a troca sai com a exaustão refeita',
    intro: 'Aparelho muito antigo, com corpo corroído ou peça fora de linha, às vezes custa mais que um novo. Neste caso o cliente optou pela troca — e a exaustão foi refeita junto, porque a antiga estava fora de norma.',
    itens: [
      { src: '/assets/obras/troca-aquecedor-antes-cosmopolita-a15.webp', alt: 'Aquecedor a gás Cosmopolita A15 antigo antes da troca, com corpo desgastado', legenda: 'Antes: Cosmopolita A15 fora de operação', retrato: true },
      { src: '/assets/obras/troca-aquecedor-antes-cosmopolita-a15-area.webp', alt: 'Área de serviço com o aquecedor Cosmopolita A15 antigo e a exaustão original', legenda: 'Antes: a exaustão original estava fora de norma', retrato: true },
      { src: '/assets/obras/troca-aquecedor-depois-lorenzetti-lz1600de.webp', alt: 'Aquecedor a gás Lorenzetti LZ 1600DE novo instalado no lugar do aparelho antigo, com painel digital aceso', legenda: 'Depois: Lorenzetti LZ 1600DE instalado e ligado', retrato: true },
      { src: '/assets/obras/troca-aquecedor-depois-lorenzetti-lz1600de-desligado.webp', alt: 'Mesmo aquecedor Lorenzetti LZ 1600DE desligado, com as ligações de água e gás e a exaustão nova', legenda: 'Depois: ligações e exaustão refeitas', retrato: true },
      { src: '/assets/obras/troca-aquecedor-lorenzetti-lz750bp.webp', alt: 'Aquecedor a gás Lorenzetti LZ 750 BP recém-instalado, com duto de exaustão novo saindo pela janela', legenda: 'Outra troca, com exaustão refeita', retrato: true },
    ],
  },
  'gasista': {
    olho: 'Serviço executado',
    titulo: 'Rede de gás refeita, com registro identificado',
    intro: 'Tubulação aparente em cobre, registro de esfera com identificação de gás e teste de estanqueidade no final. É assim que a concessionária aceita a instalação.',
    itens: [
      { src: '/assets/obras/rede-de-gas-tubulacao-registro.webp', alt: 'Rede de gás refeita com tubulação aparente e registro de esfera com identificação de gás', legenda: 'Rede de gás com registro identificado' },
    ],
  },
  'venda-de-aquecedor-a-gas': {
    olho: 'Aparelhos em estoque',
    titulo: 'Aparelho novo, lacrado e instalado no mesmo atendimento',
    intro: 'Trabalhamos com Rinnai e Lorenzetti em estoque próprio. O aparelho sai lacrado, é dimensionado para os pontos de água da casa e vai instalado com exaustão e ligações no mesmo atendimento.',
    itens: [
      { src: '/assets/obras/estoque-aquecedores-rinnai-embalados.webp', alt: 'Aquecedores a gás Rinnai novos e embalados no estoque da TecDaniel\'s', legenda: 'Rinnai novos, ainda embalados', retrato: true },
      { src: '/assets/obras/estoque-aquecedores-rinnai-lorenzetti.webp', alt: 'Aquecedores a gás Rinnai e Lorenzetti em estoque, prontos para instalação', legenda: 'Rinnai e Lorenzetti prontos para instalação', retrato: true },
      { src: '/assets/obras/estoque-loja-aquecedores-rinnai-caixas.webp', alt: 'Caixas de aquecedores a gás Rinnai empilhadas no estoque da loja', legenda: 'Estoque próprio na loja', retrato: true },
    ],
  },
  'pressurizador-de-agua': {
    olho: 'Instalação executada',
    titulo: 'Pressurizador dimensionado, instalado e ligado',
    intro: 'O aparelho certo depende da altura da caixa, do número de pontos e do consumo de cada um. Abaixo, um Komeco TP 40 G3 instalado com caixa de comando e chave liga-desliga acessível.',
    itens: [
      { src: '/assets/obras/pressurizador-komeco-tp40-bomba.webp', alt: 'Pressurizador Komeco TP 40 G3 de 127 V instalado, com caixa de comando e chave liga-desliga', legenda: 'Komeco TP 40 G3 instalado', retrato: true },
    ],
  },
  'pressurizador-komeco': {
    olho: 'Manutenção executada',
    titulo: 'Rotor de um Komeco TP 40 antes e depois da limpeza',
    intro: 'A perda de pressão quase sempre começa no rotor: incrustação de água dura trava a hélice e o motor gira sem empurrar água. Nesta manutenção o corpo da bomba foi aberto, limpo e remontado — sem trocar o aparelho.',
    itens: [
      { src: '/assets/obras/pressurizador-komeco-tp40-rotor-corroido.webp', alt: 'Corpo de bomba de pressurizador Komeco TP 40 aberto, com incrustação e corrosão no alojamento do rotor', legenda: 'Antes: alojamento do rotor incrustado', retrato: true },
      { src: '/assets/obras/pressurizador-komeco-tp40-rotor-limpo.webp', alt: 'Mesmo corpo de bomba após limpeza, com o alojamento do rotor desobstruído', legenda: 'Depois: alojamento limpo e desobstruído', retrato: true },
      { src: '/assets/obras/pressurizador-komeco-tp40-bomba.webp', alt: 'Pressurizador Komeco TP 40 G3 de 127 V remontado, com caixa de comando e chave liga-desliga', legenda: 'Komeco TP 40 G3 remontado', retrato: true },
    ],
  },
};
