const mysql = require('mysql2/promise');
const config = require('../config');

async function query(stringQuery) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.query(stringQuery);
    return results;
}

module.exports = {query};