const acervo = [
  {
    id: 1,
    titulo: 'Os Olhos do Cão Siberiano',
    autor: 'Antonio Santa Ana',
    disponivel: true,
  },
  {
    id: 2,
    titulo: 'Alice no País das Maravilhas',
    autor: 'Lewis Carroll',
    disponivel: false,
  },
  {
    id: 3,
    titulo: 'O Diário de Anne Frank',
    autor: 'Anne Frank',
    disponivel: true,
  },
];

// Lista todos os livros do acervo
const listarTodosLivros = async () => {
  return acervo;
};

// Busca um livro específico pelo ID
const buscarLivroPorId = async (id) => {
  const livro = acervo.find((l) => l.id === Number(id));
  // Regra de negócio: se não existe, retorna null.
  // O Controller decide o que fazer com o null.
  return livro || null;
};

// Criar um novo livro no acervo
const criarLivro = async ({ titulo, autor }) => {
  // Regra de negócio: título e autor são obrigatórios
  if (!titulo || !autor) {
    throw new Error('Título e autor são obrigatórios.');
  }
  const novoLivro = {
    id: acervo.length + 1,
    titulo,
    autor,
    disponivel: true,
  };
  acervo.push(novoLivro);
  return novoLivro;
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };
