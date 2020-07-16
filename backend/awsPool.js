const mysql = require('mysql');

const awsPool = mysql.createPool({
    connectionLimit: 10,
    host: "trivia-fact.c970ohmsoyhi.eu-west-2.rds.amazonaws.com",
    user: "xiaohan_du",
    password: "Cardiff123",
    port: 3306,
    database: 'trivia-facts',
    debug: false
});

module.exports = awsPool;