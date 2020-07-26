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
                <div><p>Country: {this.props.weatherData.sys.country}</p></div>
                <div><p>Longitude: {this.props.weatherData.coord.lon}; Latitude: {this.props.weatherData.coord.lat}</p></div>
                <div><p>Temperature: {this.props.weatherData.main.temp} Kelvin</p></div>
            </div>
        )
    }

    render() {
        let resultUI;
        if (this.props.weatherFetched) {
            resultUI = this.fetchedUI();
        }
        else {
            resultUI = this.unfetchedUI();
        }
        return (
            <div className="columns">
                <div className="column">
                    <div>If: user allows to determine location - show current location's weather</div>
                    <div>Else if: user does not allow to determine location - show London's weather</div>
                </div>
                <div className="column">
                    <div>
                        {resultUI}
                    </div>
                </div>
            </div>

        )
    }
}

export default WeatherResult;