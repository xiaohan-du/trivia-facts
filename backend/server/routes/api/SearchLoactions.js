const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (app) => {

    let apiUrl;

    app.get('/search-location', (req, res) => {
        res.send('This is the search location page')
    });

    app.listen(80, function () {
        console.log('search location app listening on port 80');
    });

    app.post('/search-location', (req, res) => {
        let baseUrl = `http://api.openweathermap.org/data/2.5/weather?`,
            apiKey = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
            coordinates = `lat=` + req.body.latitude + `&lon=` + req.body.longitude;
        apiUrl = baseUrl + coordinates + apiKey;
        console.log(apiUrl)
        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
                console.log('------------------- search location');
                res.json(response.data);
            })
            .catch(error => {
                console.log(error);

            });
    });

    app.get('/weather', (req, res) => {
        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
                console.log('------------------- weather');
                res.json(response.data);
            })
            .catch(error => {
                console.log(error);
                console.log('search location error');
            });
    });

}