const acervo = [
  {
    id: 1,
    autor: "Antonio Santa Ana",
    disponivel: true,
    titulo: "Os Olhos do Cão Siberiano"
  },
  {
    id: 2,
    autor: "Lewis Carroll",
    disponivel: true,
    titulo: "Alice no País das Maravilhas"
  },
  {
    id: 3,
    autor: "Anne Frank",
    disponivel: true,
    titulo: "O Diário de Anne Frank"
  }
];

const listarTodosOsLivros = async () => {
  return acervo;
};

module.exports = { listarTodosOsLivros };
