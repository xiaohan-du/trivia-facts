import React from 'react';
import apiConfig from './apiKeys';

class FetchWeather extends React.Component {

    static async getWeather() {
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=Cardiff,uk&APPID=${apiConfig.owmKey}`;
        let response = await fetch(weatherURL)
        let body = await response.json();
        return body
    }
}

export default FetchWeather;