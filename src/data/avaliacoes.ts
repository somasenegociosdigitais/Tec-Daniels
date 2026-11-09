// Fonte única da nota e do total de avaliações do Perfil da Empresa no Google.
// Ao mudar o total, atualize só este arquivo: todo texto do site lê daqui.
// Não usar em aggregateRating/reviewCount do schema (o Google não aceita a
// empresa marcar as próprias avaliações).
export const AVALIACOES = {
  nota: '5,0',
  total: 80,
  atualizadoEm: '2026-11-09',
  link: 'https://g.page/r/CeRlLWupLbrsEBM',
};

// "Nota 5,0 no Google · 80 avaliações"
export const TEXTO_NOTA = `Nota ${AVALIACOES.nota} no Google · ${AVALIACOES.total} avaliações`;
