import React from 'react';
import { Link } from 'react-router-dom';

class WeatherResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            currentTemp: '',
            humidity: '',
            cityNotFound: '',
            wind: '',
            currentConditionDescription: '',
            cityName: ''
        }
    }

    async fetchWeather() {
        let response = await fetch('/weather');
        await response.json().then(data => {
            if (data.cod === '404') {
                this.setState({
                    isLoading: false,
                    cityNotFound: '404'
                })
            } else {
                this.setState({
                    isLoading: false,
                    currentTemp: Math.round(data.main.temp) + '°',
                    humidity: data.main.humidity + '%',
                    wind: Math.round(data.wind.speed) + ' mph',
                    currentCondition: data.weather[0].main,
                    currentConditionDescription: data.weather[0].description,
                    cityName: data.name
                })
            }
        })
    }

    componentDidMount() {
        this.fetchWeather();
    }

    errorUI() {
        return (
            <div>
                <p> Error with postcode. </p>
                <Link to='/'><button>Try Again</button></Link>
            </div>
        )
    }

    fetchedUI() {
        return (
            <div>
                <div >
                    <div className='conditionsOverview'>
                        <p>{this.state.currentTemp}</p>
                        <p>{this.state.currentConditionDescription}</p>
                    </div>
                    <div className='conditionDetails'>
                        <p>Humidity: {this.state.humidity} </p>
                        <p>Wind Speed: {this.state.wind} </p>
                    </div>
                </div>
                <h4> Location: {this.state.cityName} </h4>
            </div>
        )
    }

    render() {
        return (
            this.state.cityNotFound === 404
                ? <div> {this.errorUI()} </div>
                : <div>{this.fetchedUI()}</div>
        )
    }
}

export default WeatherResult;