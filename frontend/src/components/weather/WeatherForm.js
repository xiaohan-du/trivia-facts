import React from 'react';

class WeatherForm extends React.Component {
    
    render() {
        return (
            <form>
                <p className="title">Weather</p>
                <p className="subtitle">Check weather by city and country</p>
                <div className="field">
                    <label className="label">Country</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type country name here" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type city name here" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button
                            className="button is-light is-large"
                            onClick={this.props.getWeather}>Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default WeatherForm