import React from 'react';
import { faWind, faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WeatherResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            currentTemp: '',
            humidity: '',
            wind: '',
            currentConditionDescription: '',
            cityName: '',
            longitude: '',
            latitude: '',
            sunrise: '',
            sunset: '',
            icon: ''
        }
    }

    async fetchWeather() {
        let response = await fetch('http://localhost:4000/weather');
        await response.json().then(data => {
            this.setState({
                isLoading: false,
                currentTemp: Math.round(data.main.temp - 273.15) + '°C',
                humidity: data.main.humidity + '%',
                wind: Math.round(data.wind.speed) + ' mph',
                currentCondition: data.weather[0].main,
                currentConditionDescription: data.weather[0].description,
                cityName: data.name,
                longitude: data.coord.lon,
                latitude: data.coord.lat,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                icon: data.weather[0].icon
            })
        })
    };

    componentDidMount() {
        this.fetchWeather();
    }

    convertUnixTime(unixTime) {
        let date = new Date(unixTime * 1000),
            hours = date.getHours(),
            minutes = '0' + date.getMinutes(),
            seconds = '0' + date.getSeconds(),
            formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
    }

    resultUI() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className='columns'>
                        <div className='column has-text-centered'>
                            <div className='is-size-1'>
                                {this.state.cityName}
                            </div>
                            <div className='columns'>
                                <div className='column'>
                                    {this.convertUnixTime(this.state.sunrise)}
                                    
                                    <div>
                                        <FontAwesomeIcon icon={faTint} />
                                    </div>
                                    {this.state.humidity}
                                </div>
                                <div className='column'>
                                    {this.convertUnixTime(this.state.sunset)}
                                    <div>
                                        <FontAwesomeIcon icon={faWind} />
                                    </div>
                                    {this.state.wind}
                                </div>
                            </div>
                        </div>
                        <div className='column has-text-centered'>
                            <div className='is-size-1'>
                                {this.state.currentTemp}
                            </div>
                            <div>
                                {this.state.currentConditionDescription}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.resultUI()
        )
    }
}

export default WeatherResult;