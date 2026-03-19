const express = require('express');

const router = express.router();

const LivrosController = require('../controllers/livros.controllers');

router.get('/'), livrosController.listarLivros