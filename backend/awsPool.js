const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const awsPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.AWS_HOST,
    user: process.env.AWS_USER,
    password: process.env.AWS_PASSWORD,
    port: process.env.AWS_PORT,
    database: process.env.AWS_DATABASE,
    debug: false
});

module.exports = awsPool;