const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /trivia-fact to see trivia facts')
});

const pool = mysql.createPool({
    connectionLimit: 10,
    /* host: 'localhost', */
    user: 'root',
    password: 'myjs123@',
    database: 'trivia-facts',
    debug: false
});

pool.getConnection((err, connection) => {
/*     if (err) throw err;
 */    app.get('/trivia-fact', (req, res) => {
        connection.query(SELECT_ALL_FACTS_QUERY, (err, results) => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.json({
                    data: results
                })
            };
        });
    });

});

const SELECT_ALL_FACTS_QUERY = 'SELECT * FROM `trivia-facts`.`trivia-fact`;';

let port=process.env.PORT||4000;

app.listen(port, () => {
    console.log(`App running on port ${port} `);
});
