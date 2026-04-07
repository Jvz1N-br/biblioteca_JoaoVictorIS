//Captura todos os erros
//Deve ter exatamente 4 parâmetros para o Express
//Reconhecê-lo como handler de erros (a assinatura é o que importa)
//deve ser o último middlewares registrado no index.

const erroHandler = (err, req, res, next) => {
    //Loga o erro completo no servidor
    console.error(`[ERRO] ${req.method} ${req.url}:`, err.message);

    //Determina o status, se o erro já tem um status definido, usa ele
    //Caso contrário, 500(Intervanal Server Error)
    const status = err.status || 500;

    //Responde ao cliente com uma mensagem amigável
    //Nunca envie erro.stack o cliente em producção.
    res.status(status).json({
        erro: err.message || 'Erro interno na Biblioteca Ralph & Teddy.', caminho: req.url,
    });
};

module.exports = erroHandler;