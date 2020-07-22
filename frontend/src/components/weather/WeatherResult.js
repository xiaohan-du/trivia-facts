import React from 'react';

class WeatherResult extends React.Component {

    unfetchedUI() {
        return (
            <div>
                <div>Search by location - show city weather</div>
                <div>Click Search to test.</div>
            </div>
        )
    }

    fetchedUI() {
        return (
            <div>
                <div><p>City: {this.props.weatherData.name}</p></div>
                <div><p>Longitude: {this.props.weatherData.coord.lon}; Latitude: {this.props.weatherData.coord.lat}</p></div>
                <div><p>Temperature: {this.props.weatherData.main.temp} Kelvin</p></div>
            </div>
        )
    }
    
    render() {
        let resultUI;
        if(this.props.weatherFetched){
            resultUI = this.fetchedUI();
        }
        else {
            resultUI = this.unfetchedUI();
        }
        return(
            <div>
                {resultUI}
            </div>
        )
    }
}

export default WeatherResult;