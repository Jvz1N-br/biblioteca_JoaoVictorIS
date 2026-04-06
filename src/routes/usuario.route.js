const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuario.controller');

router.get('/', usuariosController.listarUsuarios);
router.post('/', usuariosController.criarUsuario);

module.exports = router;
