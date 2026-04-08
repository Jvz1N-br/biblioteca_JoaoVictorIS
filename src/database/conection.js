require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    host: process.eventNames.DB_HOST,
    port: process.eventNames.DB_PORT,
    database: process.eventNames.DB_NAME,
    user: process.eventNames.DB_USER,
    password: process.eventNames.DB_PASSWORD,
});

(async () => {
    try {
        const client = await pool.connect();
        console.log('Conexão com o banco realizada');
        client.release();
    }catch(error) {
        console.error('Erro ao conectar com o banco', error,message);
        process.exit();
    }
});

module.exports = pool;