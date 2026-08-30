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
      { src: '/assets/obras/aquecedor-komeco-varanda-instalado.webp', alt: 'Aquecedor a gás Komeco instalado em varanda, com ligações de água e gás na alvenaria', legenda: 'Komeco em varanda, ligações aparentes', retrato: true },
    ],
  },
  'manutencao-de-aquecedor-a-gas': {
    olho: 'Antes e depois',
    titulo: 'O que a falta de manutenção faz com a câmara de combustão',
    intro: 'Fuligem e corrosão saindo pela frente do gabinete indicam queima irregular há bastante tempo. Neste Lorenzetti LZ 750 BP o aparelho foi substituído e a exaustão refeita — com revisão anual, o quadro não chega a esse ponto.',
    itens: [
      { src: '/assets/obras/aquecedor-lz750bp-antes-depois.webp', alt: 'Comparação de aquecedor Lorenzetti LZ 750 BP: à esquerda com fuligem e corrosão na frente, à direita o aparelho novo com duto de exaustão', legenda: 'Antes e depois, com exaustão refeita' },
    ],
  },
  'conserto-de-aquecedor-a-gas': {
    olho: 'Atendimento executado',
    titulo: 'Quando o conserto não compensa, a troca sai com a exaustão refeita',
    intro: 'Aparelho muito antigo, com corpo corroído ou peça fora de linha, às vezes custa mais que um novo. Neste caso o cliente optou pela troca — e a exaustão foi refeita junto, porque a antiga estava fora de norma.',
    itens: [
      { src: '/assets/obras/troca-aquecedor-lorenzetti-lz750bp.webp', alt: 'Aquecedor a gás Lorenzetti LZ 750 BP recém-instalado, com duto de exaustão novo saindo pela janela', legenda: 'Troca de aparelho, com exaustão refeita', retrato: true },
      { src: '/assets/obras/aquecedor-lorenzetti-lz1600de-area.webp', alt: 'Aquecedor a gás Lorenzetti LZ 1600DE em área de serviço, visto de frente com o painel digital aceso', legenda: 'Aparelho em operação depois do serviço', retrato: true },
    ],
  },
  'gasista': {
    olho: 'Serviço executado',
    titulo: 'Rede de gás refeita, com registro identificado',
    intro: 'Tubulação aparente em cobre, registro de esfera com identificação de gás e teste de estanqueidade no final. É assim que a concessionária aceita a instalação.',
    itens: [
      { src: '/assets/obras/rede-de-gas-tubulacao-registro.webp', alt: 'Rede de gás refeita com tubulação aparente e registro de esfera com identificação de gás', legenda: 'Rede de gás com registro identificado', retrato: true },
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
