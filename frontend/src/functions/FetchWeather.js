import React from 'react';

class FetchWeather extends React.Component {

    static async getWeather(e) {
        e.preventDefault();
        const weatherURL = `http://localhost:4000/weather`;
        let response = await fetch(weatherURL),
            body = await response.json();
        return body
    }

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