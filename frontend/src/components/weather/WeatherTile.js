import React from 'react';
import FetchWeather from '../../functions/FetchWeather'

class WeatherTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherFetched: false,
            weatherData: []
        }
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(e) {
        e.preventDefault();
        FetchWeather.getWeather().then(response => {
            this.setState({
                weatherData: response,
                weatherFetched: true
            })
            console.log(this.state.weatherData)
        })
    }

    render() {
        return (
            <article className="tile is-child notification is-warning">
                <form>
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
                    <div>{this.state.weatherFetched ? this.state.weatherData.main.temp : null}</div>
                    <div className="field">
                        <div className="control">
                            <button
                                className="button is-light is-large"
                                onClick={this.getWeather}>Search</button>
                        </div>
                    </div>
                </form>
            </article>
        )
    }
}

export default WeatherTile;
