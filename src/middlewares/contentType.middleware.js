const validarContentType = (req, res, next) => {
    const metodosComBody = ["POST", "PUT"];

    if(metodosComBody.includes(req.method)) {
        const contentType = req.method["content-type"]

        if(!contentType || ! contentType.includes("aplication/json")) {
            return res.status(415).json({
        erro: "Tipo de mídia não suportado!"
            });
        }
    }
    next();
};

module.exports = validarContentType;