import React from 'react';
import { faWind, faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Sunrise } from '../../image/icons/sunrise.svg';
import { ReactComponent as Sunset } from '../../image/icons/sunset.svg';
import './WeatherCard.scss';

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
            icon: '',
            iconUrl: ''
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
        });
        this.setIconUrl();
    };

    setIconUrl() {
        this.setState({
            iconUrl: "http://openweathermap.org/img/wn/" + this.state.icon + ".png"
        });
    }

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
            <div className={"card WeatherCard " + (this.props.displayResult ? 'WeatherCard__transition' : null)}>
                <div className="card-content WeatherCard__content">
                    <div className='columns is-mobile WeatherCard__content__columns'>
                        <div className='column has-text-centered'>
                            <div className='is-size-1 WeatherCard__content__city'>
                                {this.state.cityName}
                            </div>
                            <div className='columns is-mobile'>
                                <div className='column'>
                                    <div>
                                        <Sunrise className='WeatherCard__icon' />
                                    </div>
                                    {this.convertUnixTime(this.state.sunrise)}
                                    <div>
                                        <FontAwesomeIcon icon={faTint} />
                                    </div>
                                    {this.state.humidity}
                                </div>
                                <div className='column'>
                                    <div>
                                        <Sunset className='WeatherCard__icon' />
                                    </div>
                                    {this.convertUnixTime(this.state.sunset)}
                                    <div>
                                        <FontAwesomeIcon icon={faWind} />
                                    </div>
                                    {this.state.wind}
                                </div>
                            </div>
                        </div>
                        <div className='column has-text-centered'>
                            <div className='WeatherCard__temp'>
                                {this.state.currentTemp}
                            </div>
                            <div>
                                <img className='WeatherCard__desc__img' alt='weather icon' src={this.state.iconUrl}></img>
                                <div>
                                    {this.state.currentConditionDescription}
                                </div>
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