const express = require('express');
const livrosRoutes = require('./src/routes/livros.routes');
const app = express();

app.use(express.json());

app.use('/livros', livrosRoutes);

const POR = 3000;

app.listen((port), () =>

console.log('[SERVIDOR] Biblioteca ondeline em https://localhost:${PORT}')
)
