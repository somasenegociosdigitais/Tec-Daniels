export const NEGOCIO = {
  nome: "TecDaniel's Soluções em Aquecedores a Gás",
  marca: "TecDaniel's",
  site: 'https://www.tecdaniels.com.br',
  telefone: '(21) 98617-1050',
  telefoneE164: '+5521986171050',
  whatsapp: '5521986171050',
  // Sem e-mail: o cliente não usa a caixa. Contato é WhatsApp e telefone.
  email: null,
  cnpj: '16.962.952/0001-26',
  endereco: {
    rua: 'Rua Candido Benício 1381, sala 205',
    cidade: 'Rio de Janeiro', estado: 'RJ', cep: '21321-802', pais: 'BR',
  },
  geo: { lat: -22.894142, lng: -43.349163 },
  // Aberta em 4 de outubro de 2003. O número de anos é calculado, não fixo.
  get anos() {
    const abriu = new Date('2003-10-04T00:00:00');
    const hoje = new Date();
    let a = hoje.getFullYear() - abriu.getFullYear();
    const antes = hoje.getMonth() < abriu.getMonth() ||
      (hoje.getMonth() === abriu.getMonth() && hoje.getDate() < abriu.getDate());
    return antes ? a - 1 : a;
  },
  google: {
    url: 'https://g.page/r/CeRlLWupLbrsEBM',
    review: 'https://g.page/r/CeRlLWupLbrsEBM/review',
    nota: '5.0', total: 48,
  },
  rinnai: 'https://www.rinnai.com.br/parceiros/tec-daniel--s-solucoes-em-aquecedores_7947/',
  tagline: 'Pensou em banho quente com segurança? Chame a TecDaniels!',
};

export const MENU = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#todos-os-servicos' },
  { label: 'Quem somos', href: '/quem-somos/' },
  { label: 'Área de atendimento', curto: 'Atendimento', href: '/area-de-atendimento/' },
  { label: 'Contato', href: '/contato/' },
];

export const MARCAS = [
  { nome: 'Rinnai', slug: 'rinnai', logo: '/assets/marcas/rinnai.jpg' },
  { nome: 'Lorenzetti', slug: 'lorenzetti', logo: '/assets/marcas/lorenzetti.png' },
  { nome: 'Komeco', slug: 'komeco', logo: '/assets/marcas/komeco.png' },
  { nome: 'Rheem', slug: 'rheem', logo: '/assets/marcas/rheem.svg' },
  { nome: 'Bosch', slug: 'bosch', logo: '/assets/marcas/bosch.jpg' },
  { nome: 'Orbis', slug: 'orbis', logo: '/assets/marcas/orbis.png' },
].map((m) => ({ ...m, href: '/assistencia-tecnica-' + m.slug + '/' }));

// Eixo Jacarepaguá/Barra + raio curto em volta da empresa.
// Madureira e Praça Seca ficaram fora por decisão do cliente.
// Preposição correta por bairro — evita "na Recreio" nas âncoras geradas.
export const BAIRROS = [
  { nome: 'Jacarepaguá', slug: 'jacarepagua', prep: 'em' },
  { nome: 'Barra da Tijuca', slug: 'barra-da-tijuca', prep: 'na' },
  { nome: 'Recreio dos Bandeirantes', slug: 'recreio-dos-bandeirantes', prep: 'no' },
  { nome: 'Freguesia', slug: 'freguesia', prep: 'na' },
  { nome: 'Taquara', slug: 'taquara', prep: 'na' },
  { nome: 'Vila Valqueire', slug: 'vila-valqueire', prep: 'em' },
  { nome: 'Tijuca', slug: 'tijuca', prep: 'na' },
].map((b) => ({ ...b, href: '/aquecedor-a-gas-' + b.slug + '/', comPrep: b.prep + ' ' + b.nome }));

export const AREAS_SERVIDAS = ['Jacarepaguá', 'Barra da Tijuca', 'Recreio dos Bandeirantes', 'Freguesia', 'Taquara', 'Tanque', 'Vila Valqueire', 'Tijuca', 'Rio de Janeiro', 'Grande Rio', 'Baixada Fluminense'];

export const NORMAS = [
  { nome: 'ABNT NBR 13103', nota: 'Instalação de aparelhos a gás: ventilação, exaustão e volume mínimo do ambiente.' },
  { nome: 'ABNT NBR 15526', nota: 'Redes de distribuição interna de gás: tubulação, pressão e teste de estanqueidade.' },
  { nome: 'RIP-RJ', nota: 'Regulamento de Instalações Prediais de Gás do Estado do Rio de Janeiro.' },
  { nome: 'Padrões Naturgy', nota: 'Exigências da concessionária para ligação, laudo e liberação da instalação.' },
];

export const CONFIANCA = [
  'Orçamento sem compromisso',
  'Atendemos em domicílio',
  'Visita técnica em até 24 horas',
  'Garantia de 90 dias nos serviços',
];

export const AVALIACOES = [
  { texto: 'Posso resumir o excelente serviço com a palavra COMPETÊNCIA! Parabéns ao técnico Patrick, e a Tecdaniels!', nome: 'Luciane Caruso', quando: '2025' },
  { texto: 'Atendimento personalizado com muita competência. Minha experiência com a empresa tem mais de 5 anos e sempre com presteza quando solicitado.', nome: 'Edson Reis Da Silva', quando: 'Cliente há mais de 5 anos' },
  { texto: 'Profissionais honestos, competentes, comprometidos. Agradeço muito o profissionalismo! Melhor empresa. Me atenderam rápido em JACAREPAGUÁ RJ.', nome: 'Mari Lopes', quando: 'Jacarepaguá · 2025' },
];

// Nome de exibição de cada URL de serviço — fonte única para rodapé e "Conheça também".
export const SERVICOS = {
  'conserto-de-aquecedor-a-gas': 'Conserto de aquecedor a gás',
  'manutencao-de-aquecedor-a-gas': 'Manutenção de aquecedor a gás',
  'instalacao-de-aquecedor-a-gas': 'Instalação de aquecedor a gás',
  'venda-de-aquecedor-a-gas': 'Venda de aquecedor a gás',
  'aquecedor-de-fluxo-balanceado': 'Aquecedor de fluxo balanceado',
  'aquecedor-nao-esquenta-a-agua': 'Aquecedor não esquenta a água',
  'quanto-custa-conserto-de-aquecedor': 'Quanto custa o conserto',
  'dimensionamento-de-aquecedor-a-gas': 'Calcular a litragem ideal',
  'manutencao-para-condominios': 'Condomínios e administradoras',
  'gasista': 'Gasista',
  'teste-de-estanqueidade': 'Teste de estanqueidade',
  'teste-de-vazamento-de-gas': 'Teste de vazamento de gás',
  'substituicao-de-tubulacao-de-gas': 'Substituição de tubulação de gás',
  'remanejamento-de-ponto-de-gas': 'Remanejamento de ponto de gás',
  'aplicacao-de-resina-em-tubulacao': 'Aplicação de resina em tubulação',
  'conversao-de-fogao': 'Conversão de fogão',
  'instalacao-de-fogao-e-cooktop': 'Instalação de fogão e cooktop',
  'pressurizador-de-agua': 'Pressurizador de água',
  'pressurizador-lorenzetti': 'Pressurizador Lorenzetti',
  'pressurizador-komeco': 'Pressurizador Komeco',
};

export const servicoUrl = (slug) => '/' + slug + '/';

// Rodapé: só os principais. A lista completa fica na home, para não repetir
// as mesmas 20 âncoras nas 37 páginas.
export const SERVICOS_RODAPE = [
  'conserto-de-aquecedor-a-gas',
  'manutencao-de-aquecedor-a-gas',
  'instalacao-de-aquecedor-a-gas',
  'venda-de-aquecedor-a-gas',
  'aquecedor-nao-esquenta-a-agua',
  'gasista',
  'teste-de-estanqueidade',
  'substituicao-de-tubulacao-de-gas',
  'instalacao-de-fogao-e-cooktop',
  'pressurizador-de-agua',
];

export const wa = (fonte) =>
  'https://wa.me/' + NEGOCIO.whatsapp +
  '?text=' + encodeURIComponent('Olá! Vim pelo site e preciso de atendimento.') +
  (fonte ? '&utm_content=' + fonte : '');
