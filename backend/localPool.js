const mysql = require('mysql');

const localPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'myjs123@',
    database: 'trivia-facts',
    debug: false
})

module.exports = localPool;