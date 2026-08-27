// Fotos de serviço executado por página. Só as páginas que têm foto real
// aparecem com a seção; as outras seguem sem ela.
export const FOTOS_POR_PAGINA = {
  'pressurizador-komeco': {
    olho: 'Manutenção executada',
    titulo: 'Rotor de um Komeco TP 40 antes e depois da limpeza',
    intro: 'A perda de pressão quase sempre começa no rotor: incrustação de água dura trava a hélice e o motor gira sem empurrar água. Nesta manutenção o corpo da bomba foi aberto, limpo e remontado — sem trocar o aparelho.',
    itens: [
      { src: '/assets/obras/pressurizador-komeco-tp40-rotor-corroido.jpeg', alt: 'Corpo de bomba de pressurizador Komeco TP 40 aberto, com incrustação e corrosão no alojamento do rotor', legenda: 'Antes: alojamento do rotor incrustado', retrato: true },
      { src: '/assets/obras/pressurizador-komeco-tp40-rotor-limpo.jpeg', alt: 'Mesmo corpo de bomba após limpeza, com o alojamento do rotor desobstruído', legenda: 'Depois: alojamento limpo e desobstruído', retrato: true },
      { src: '/assets/obras/pressurizador-komeco-tp40-bomba.jpeg', alt: 'Pressurizador Komeco TP 40 G3 de 127 V remontado, com caixa de comando e chave liga-desliga', legenda: 'Komeco TP 40 G3 remontado', retrato: true },
    ],
  },
};
