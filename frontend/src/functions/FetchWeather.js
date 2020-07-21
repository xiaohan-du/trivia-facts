import React from 'react';

class FetchWeather extends React.Component {

    /* static async getWeather() {
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=Cardiff,uk&APPID=${apiConfig.owmKey}`;
        let response = await fetch(weatherURL)
        let body = await response.json();
        return body
    } */

    Weather({ description, city, country, error, temperature }) {
        return (
            <div>
                {city && country && <p>{city}, {country}</p>}
                {temperature && <p>{temperature}</p>}
                {description && <p>{description}</p>}
                {error && <p>{error}</p>}
            </div>
        )
    }
}

export default FetchWeather;