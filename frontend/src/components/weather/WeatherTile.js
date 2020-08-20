import React from 'react';
import WeatherCard from './WeatherCard';
import WeatherForm from './WeatherForm';
import axios from 'axios';

class WeatherTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherFetched: false,
            addressData: [],
            coordinate: [],
            postcodeInput: '',
            formIsValid: true,
            displayResult: false,
            error: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async getCoord() {
        const postcodeAPI = `http://api.postcodes.io/postcodes/${this.state.postcodeInput}`;

        let response;
        
        try {
            response = await fetch(postcodeAPI);
            if (!response.ok) throw new Error('Weather api request failed.');

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
        catch (e) {
            this.setState({ error: true });
            console.log(e);
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            this.getCoord();
            this.setState({ error: false })
        }
        else {
            this.setState({ error: true });
        };
    }

    handleInputChange(e) {
        this.setState({
            postcodeInput: e.target.value,
            formIsValid: true,
            displayResult: false,
            error: false
        });
    }

    handleValidation() {
        let regexConst = new RegExp('^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$');
        console.log(regexConst.test(this.state.postcodeInput));
        return regexConst.test(this.state.postcodeInput);
    }

    render() {
        return (
            <article className="tile TFTile is-child notification is-success">
                <div className='columns'>
                    <div className="column">
                        <WeatherForm
                            handleSubmit={this.handleSubmit}
                            handleInputChange={this.handleInputChange}
                            error={this.state.error} />
                    </div>
                    <div className="column">
                        {this.state.displayResult ? <WeatherCard displayResult={this.state.displayResult}/> : null}
                    </div>
                </div>
            </article>
        )
    }
}

export default WeatherTile;
