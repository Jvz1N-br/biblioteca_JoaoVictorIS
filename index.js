const express = require('express');
const livrosRoutes = require('./src/routes/livros.routes');

const app = express();

app.use(express.json());

app.use('/livros', livrosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`[SERVIDOR] Biblioteca ondeline em http://localhost:${PORT}`);
});
