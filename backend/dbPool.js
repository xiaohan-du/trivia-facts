const hostname = "trivia-fact.c970ohmsoyhi.eu-west-2.rds.amazonaws.com",
    username = "xiaohan_du",
    password = "Cardiff123",
    portname = "3306";
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.hostname,
    user: process.env.username,
    password: process.env.password,
    port: process.env.portname,
    database: 'trivia-facts',
    debug: false
});

module.exports = pool;