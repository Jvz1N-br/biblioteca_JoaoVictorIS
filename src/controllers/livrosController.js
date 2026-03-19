const livrosService = require("../services/livrosServices");

const listarLivros = async (req, res) => {
  try {
    const livros = await livrosService.listarTodosOsLivros();
    res.status(200).json({ total: livros.length, livros });
  } catch (error) {
    res.status(500).json({ error: "Erro interno ao listar livros." });
  }
};

module.exports = { listarLivros };
