const livrosService = require('../services/livros.services');

// Get /livros
const listarLivros = async (req, res) => {
  try {
    const livros = await livrosService.listarTodosLivros();
    res.status(200).json({ total: livros.length, livros });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno ao listar livros.' });
  }
};

module.exports = { listarLivros };
