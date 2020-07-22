import React from 'react';

class WeatherResult extends React.Component {

    render() {
        return (
            <div>{this.props.weatherFetched ? this.props.weatherData.main.temp : null}</div>
        )
    }
}

export default WeatherResult;