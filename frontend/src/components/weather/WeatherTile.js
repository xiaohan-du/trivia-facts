import React from 'react';
import WeatherResult from './WeatherResult';
import axios from 'axios';

class WeatherTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherFetched: false,
            addressData: [],
            coordinate: [],
            postcodeInput: '',
            errors: {},
            formIsValid: true,
            displayResult: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async getCoord() {
        const postcodeAPI = `http://api.postcodes.io/postcodes/${this.state.postcodeInput}`;

        let response = await fetch(postcodeAPI);
        await response.json().then(response => {
            this.setState({
                addressData: response,
                coordinate: [response.result.latitude, response.result.longitude]
            });
            let coord = {
                latitude: this.state.coordinate[0],
                longitude: this.state.coordinate[1]
            }
            axios.post('http://localhost:4000/search-location', coord)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        displayResult: true
                    });
                }, (error) => {
                    console.log(error);
                });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            this.getCoord();
        };
    }

    handleInputChange(e) {
        this.setState({
            postcodeInput: e.target.value,
            formIsValid: true,
            displayResult: false
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
            <article className="tile is-child notification is-warning">
                <div className='columns'>
                    <div className="column">
                        <form onSubmit={this.handleSubmit}>
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
                                        <input
                                            type='submit'
                                            className="button is-light is-large"
                                            value='Search'
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        {this.state.displayResult ? <WeatherResult /> : null}
                    </div>
                </div>
            </article>
        )
    }
}

export default WeatherTile;
