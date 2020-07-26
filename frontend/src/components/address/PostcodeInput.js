import React from 'react';

class PostcodeInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postcodeFetched: false,
            postcodeData: [],
            postcodeInput: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async getAddress() {
        const postcodeAPI = `http://api.postcodes.io/postcodes/${this.state.postcodeInput}`;
        let response = await fetch(postcodeAPI);
        await response.json().then(response => {
            this.setState({
                postcodeData: response,
                postcodeFetched: true
            })
        });
    }

    handleClick() {
        this.props.getWeather();
        this.getAddress();
    }

    handleChange(e) {
        this.setState({
            postcodeInput: e.target.value
        });
    }
    
    render() {
        return (
            <div>
                <div className="field">
                    <label className="label">Postcode</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type UK postcode here" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input
                            type='button'
                            className="button is-light is-large"
                            onClick={this.handleClick} value='Search' />
                    </div>
                </div>
            </div>
        )
    }
}

export default PostcodeInput;