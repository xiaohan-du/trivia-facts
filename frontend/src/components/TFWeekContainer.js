import React from 'react';
import apiConfig from '../apiKeys';

class TFWeekContainer extends React.Component {
    componentDidMount() {
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=Cardiff,uk&APPID=${apiConfig.owmKey}`;
        fetch(weatherURL)
            .then(response => response.json())
            .then(data => console.log('data loaded', data.main))
    }
    render() {
        console.log(this.data);
        return (
            <div>
                <p>Week container</p>
            </div>
        )
    }
}

export default TFWeekContainer;