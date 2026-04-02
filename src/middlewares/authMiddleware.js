const CHAVE_DE_ACESSO = 'biblioteca-ralph-teddy';

const autenticar = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            erro: 'Acesso Negado - Falta de Token',
        });
    }


const token = authHeader.split(' ')[1];

if (token !== CHAVE_DE_ACESSO) {
    return res.status(403).json({
        erro: 'Acesso Proibido',
    });
}

next();
};

module.exports = autenticar;