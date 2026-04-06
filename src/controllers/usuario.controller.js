const usuariosService = require('../services/usuario.service');

// GET /usuarios
const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuariosService.listarTodosUsuarios();
    res.status(200).json({ total: usuarios.length, usuarios });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar usuarios.' });
  }
};

// POST /usuarios — Cadastra novo usuario
const criarUsuario = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoUsuario = await usuariosService.criarUsuario({ nome, email });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso!',
      usuario: novoUsuario,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarUsuarios, criarUsuario };
