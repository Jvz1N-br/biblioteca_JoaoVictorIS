// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livros.controllers');

router.get('/', livrosController.listarLivros);
router.get('/:id', livrosController.buscarLivroPorId);
router.post('/', livrosController.criarLivro);

module.exports = router;
