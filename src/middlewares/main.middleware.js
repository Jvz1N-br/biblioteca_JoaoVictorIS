const logger = require('./logger.middleware');
const autentificar = require('./auth.middleware');
const erroHandler = require('./errorHandler.middleware')
const validarContentType = require('./contentType.middleware')
//const erroHandler = require('./errorHandler.middleware')

module.exports = {
    logger,
    autentificar,
    erroHandler,
    validarContentType
    // erroHandler
};