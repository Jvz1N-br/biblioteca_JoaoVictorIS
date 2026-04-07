const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const metodo = req.method;
    const url = req.url;

//Registrar entrada
console.log(`[BIBLIOTECA] ${timestamp} | ${metodo} | ${url}`)

//Critico : chama o próximo middleware na cadeia
//Sem esse next(), NENHUMA rota vai funcionar
next();
};

module.exports = logger