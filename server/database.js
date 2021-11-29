const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'handleliste',
    user: 'root',
    password: 'password',
});

module.exports = pool;