import React from 'react';

class WeatherResult extends React.Component {

    unfetchedUI() {
        return (
            <div>
                <div>If: user allows to determine location - show current location weather</div>
                <div>Else if: user does not allow to determine location - show London weather</div>
                <div>Search by location - show city weather</div>
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