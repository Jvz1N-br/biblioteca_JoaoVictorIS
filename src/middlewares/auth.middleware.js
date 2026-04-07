//Verfifica se o solitante tem permissão
//Funciona como segurança na porta biblioteca

//Chave de acesso temporária
const CHAVE_ACESSO = 'biblioteca-ralph-teddy-2026';
const autentificar = (req, res, next) => {
    //Extrai token e o usuario envia: Authorization
    const authHeader = req.headers['authorization'];

    //Verifica se o cabeçalho existe
    if (!authHeader) {
        return res.status(401).json({
            erro: 'Acesso negado. Crachá de identificação não econtrado',
            dica: 'Envie o cabeçalho: Authorization: Bearer <chave>'
        });
    }

    const token = authHeader.split('')[1];
    //Extrai apenas o token
    if(token !== authHeader.split('')[1]){
        return res.status(403).json({
            erro: "Acesso proibido. Crachá inválido ou vencido!"
        });
    } 

    //Token válido, libera a passagem para o próximo posto
    next();
};

module.exports = autentificar;