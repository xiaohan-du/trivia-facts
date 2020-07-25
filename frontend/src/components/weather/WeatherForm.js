import React from 'react';
import PostcodeInput from '../address/PostcodeInput';

class WeatherForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.getWeather();
        this.props.getPostcode();
    }

    render() {
        return (
            <form>
                <p className="title">Weather</p>
                <p className="subtitle">Check UK weather by entering postcode</p>
                <PostcodeInput />
                <div className="field">
                    <div className="control">
                        <input
                            type='button'
                            className="button is-light is-large"
                            onClick={this.handleClick} value='Search' />
                    </div>
                </div>
            </form>
        )
    }
}

export default WeatherForm