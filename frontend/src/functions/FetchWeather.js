import React from 'react';

class FetchWeather extends React.Component {

    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
    }

    static async getWeather() {
        const weatherURL = `http://localhost:4000/weather`;
        let response = await fetch(weatherURL),
            body = await response.json();
        return body
    }
}

export default FetchWeather;