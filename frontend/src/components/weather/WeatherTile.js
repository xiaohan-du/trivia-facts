import React from 'react';
import FetchWeather from '../../functions/FetchWeather';
import WeatherForm from './WeatherForm';
import WeatherResult from './WeatherResult';

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
        })
    }

    render() {
        return (
            <article className="tile is-child notification is-warning">
                <div className="columns">
                    <div className="column">
                        <WeatherForm getWeather={this.getWeather} />
                    </div>
                    <div className="column">
                        <div className="columns">
                            <div className="column">
                                <div>If: user allows to determine location - show current location's weather</div>
                                <div>Else if: user does not allow to determine location - show London's weather</div>
                            </div>
                            <div className="column">
                                <WeatherResult
                                    weatherFetched={this.state.weatherFetched}
                                    weatherData={this.state.weatherData} />
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        )
    }
}

export default WeatherTile;
