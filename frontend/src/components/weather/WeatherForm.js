import React from 'react';
import './WeatherForm.scss';

class WeatherForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addressData: [],
            coordinate: [],
            postcodeInput: '',
            errors: {},
            formIsValid: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    async getCoord() {
        const postcodeAPI = `http://api.postcodes.io/postcodes/${this.state.postcodeInput}`;

        let response = await fetch(postcodeAPI);
        await response.json().then(response => {
            this.setState({
                addressData: response,
                coordinate: [response.result.latitude, response.result.longitude]
            });
        });
    }

    handleBtnClick(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            this.props.getWeather();
            this.getCoord();
        };
    }

    handleInputChange(e) {
        this.setState({
            postcodeInput: e.target.value,
            formIsValid: true
        });
    }

    handleValidation() {
        let errors = {},
            inputFilled = true;
        if (!this.state.postcodeInput) {
            this.setState({ formIsValid: false });
            errors['postcode'] = 'Postcode field cannot be empty';
            inputFilled = false;
        };
        this.setState({ errors: errors });
        return inputFilled;
    }

    render() {
        return (
            <form method='POST' action='/search-location'>
                <p className="title">Weather</p>
                <p className="subtitle">Check UK weather by entering postcode</p>
                <div>
                    <div className="field">
                        <label className="label">Postcode</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Type UK postcode here"
                                onChange={this.handleInputChange}
                                required />
                            {this.state.formIsValid ? null : <span className='WeatherForm__input-error'>{this.state.errors["postcode"]}</span>}
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button
                                className="button is-light is-large"
                                onClick={this.handleBtnClick}>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default WeatherForm