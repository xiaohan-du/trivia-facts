import React from 'react';

class WeatherResult extends React.Component {

    unfetchedUI() {
        return (
            <div>Weather not fetched yet</div>
        )
    }

    fetchedUI() {
        return (
            <div>{this.props.weatherData.main.temp}</div>
        )
    }
    Î
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