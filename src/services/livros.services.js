const acervo = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    disponivel: true,
  },
  {
    id: 2,
    titulo: 'Altered Carbon',
    autor: 'Richard K. Morgan',
    disponivel: true,
  },
  {
    id: 3,
    titulo: "Assassin's Creed",
    autor: 'Oliver Bowden',
    disponivel: true,
  },
];

const listarTodosLivros = async () => {
  return acervo;
};

module.exports = { listarTodosLivros };
