import React from 'react';
import PostcodeInput from '../address/PostcodeInput';

class WeatherForm extends React.Component {

    
    render() {
        return (
            <form>
                <p className="title">Weather</p>
                <p className="subtitle">Check UK weather by entering postcode</p>
                <PostcodeInput getWeather={this.props.getWeather}/>
            </form>
        )
    }
}

export default WeatherForm