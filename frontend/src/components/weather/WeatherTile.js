import React from 'react';
import FetchWeather from '../../functions/FetchWeather'

class WeatherTile extends React.Component {

    loadWeather() {
        FetchWeather.getWeather();
    }

    render() {
        return (
            <article className="tile is-child notification is-warning">
                <p className="title">Weather</p>
                <p className="subtitle">Check your local weather</p>
                <div className="field">
                    <label className="label">Country</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type country name here" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type city name here" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-light is-large" onClick={this.loadWeather}>Search</button>
                    </div>
                </div>
            </article>
        )
    }
}

export default WeatherTile;
