const express = require('express');
const routes = require('./src/routes/index.route');
const logger = require('./src/middlewares/logger.middleware');
const app = express();

app.use(express.json());
app.use(logger);

// Utilizando as rotas
app.use(routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`[SERVIDOR]: Biblioteca online em http://localhost:${PORT}`);
});
