const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (app) => {
    /* app.post('/search-location', (req, res) => {
        let latitude = req.body.latitude;
        console.log(req)
        if (latitude) {
            res.redirect('/error');
        }
        else {
            res.redirect('/weather');
        }
    }); */

    app.get('/weather', (req, res) => {
        axios.get('/search-location')
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });

        let latitude, longitude,
            baseUrl = `http://api.openweathermap.org/data/2.5/weather?`,
            apiKey = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
            coordinates = `lat=` + latitude + `&lon=` + longitude,
            /* coordinates = `lat=` + `51.5842` + `&lon=` + `-2.9977`, */
            apiUrl = baseUrl + coordinates + apiKey;
        axios.get(apiUrl)
            .then(response => { res.json(response.data) })
            .catch(error => {
                res.redirect('/error');
                console.log(error);
            });
    });
}