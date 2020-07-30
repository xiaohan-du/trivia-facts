import React from 'react';
import FetchWeather from '../../functions/FetchWeather';
import WeatherResult from './WeatherResult';
import axios from 'axios';

class WeatherTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherFetched: false,
            /* weatherData: [], */
            addressData: [],
            coordinate: [],
            postcodeInput: '',
            errors: {},
            formIsValid: true,
            displayResult: false
        }
        /* this.getWeather = this.getWeather.bind(this); */
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    /* getWeather() {
        FetchWeather.getWeather().then(response => {
            this.setState({
                weatherData: response,
                weatherFetched: true
            })
        })
    } */

    sendToNode() {
        axios.post('http://localhost:4000/search-location', {
            coord: this.state.coordinate
        })
            .then((response) => {
                console.log(response);
                this.setState({
                    displayResult: true
                });
            }, (error) => {
                console.log(error);
            });
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
        debugger;

    }

    handleBtnClick(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            this.getCoord();
            /* this.getWeather(); */
            this.sendToNode();
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
            <article className="tile is-child notification is-warning">
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
                                <input
                                    type='submit'
                                    className="button is-light is-large"
                                    onClick={this.handleBtnClick} value='Search' />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="column">
                    {this.state.displayResult ? <WeatherResult /> : null}
                </div>
            </article>
        )
    }
}

export default WeatherTile;
