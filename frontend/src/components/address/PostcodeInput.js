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
        
    }

    handleChange(e) {
        this.setState({
            postcodeInput: e.target.value
        })
    }

    render() {
        return (
            <div className="field">
                <label className="label">Postcode</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Type UK postcode here" onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

export default PostcodeInput;