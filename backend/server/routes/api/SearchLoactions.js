const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (app) => {

    app.get('/search-location', (req, res) => {
        res.send('This is the search location page')
    });

    app.post('/search-location', (req, res) => {

        let latitude, longitude,
            baseUrl = `http://api.openweathermap.org/data/2.5/weather?`,
            apiKey = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
            coordinates = `lat=` + latitude + `&lon=` + longitude,
            /* coordinates = `lat=` + `51.5842` + `&lon=` + `-2.9977`, */
            apiUrl = baseUrl + coordinates + apiKey;
        axios.get(apiUrl)
            .then(response => {
                res.json(response.data);
                console.log(response);
            })
            .catch(error => {
                res.redirect('/error');
                console.log(error);
                console.log('search location error')
            });
    });
}