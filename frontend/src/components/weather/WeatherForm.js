import React from 'react';

class WeatherForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <p className="title">Weather</p>
                <p className="subtitle">Check UK weather by entering postcode</p>
                <div className="field">
                    <label className="label">Postcode</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type UK postcode here" />
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