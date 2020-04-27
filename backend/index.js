const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM `trivia-facts`.`trivia-fact`;';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'myjs123',
    database: 'trivia-facts'
});

connection.connect(err => {
    if (err) {
        return err
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /trivia-fact to see trivia facts')
});

app.get('/trivia-fact', (req, res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
});

app.listen(4000, () => {
    console.log('Trivia facts SQL server listening on PORT 4000');
});

