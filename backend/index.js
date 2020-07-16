const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const SELECT_ALL_FACTS_QUERY = 'SELECT * FROM `trivia-facts`.`trivia-fact`;';
app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /trivia-fact to see trivia facts')
});

const pool = require('./awsPool');

pool.getConnection((err, connection) => {
    if (err) {
        return console.log('ERROR! ', err);
    }
    if(!connection) {
        return console.log('No connection was found');
    }
    
    app.get('/trivia-fact', (req, res) => {
        console.log(connection);
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

let port=process.env.PORT||4000;

app.listen(port, () => {
    console.log(`App running on port ${port} `);
});