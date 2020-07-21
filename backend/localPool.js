const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const localPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.LOCAL_HOST,
    user: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_DATABASE,
    debug: false
})

module.exports = localPool;