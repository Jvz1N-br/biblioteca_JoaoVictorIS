const express = require('express');
const livrosRoutes = require('./src/routes/livrosRoutes');
const app = express();

app.use(express.json());

app.use('/livros', livrosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
console.log(`[SERVIDOR]: Biblioteca online em http://localhost:${PORT}`)
})