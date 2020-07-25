const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const url = `http://api.openweathermap.org/data/2.5/weather?q=cardiff,ukß&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;
const SELECT_ALL_FACTS_QUERY = 'SELECT * FROM `trivia-facts`.`trivia-fact`;';
app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /trivia-fact to see trivia facts, go to /weather to see weather')
});

const pool = require('./awsPool');
const { response } = require('express');

pool.getConnection((err, connection) => {
    if (err) {
        return console.log('ERROR! ', err);
    }
    if (!connection) {
        return console.log('No connection was found');
    }

    app.get('/trivia-fact', (req, res) => {
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

app.get('/weather', (req, res) => {
    axios.get(url)
        .then(response => {res.json(response.data)})
        .catch(error => {
            console.log(error);
        });
})

let port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App running on port ${port} `);
});