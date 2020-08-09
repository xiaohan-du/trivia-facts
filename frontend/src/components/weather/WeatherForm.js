import React from 'react';

class WeatherForm extends React.Component {

    render() {
        return (
            <form data-testid="form" onSubmit={this.props.handleSubmit}>
                <p className="title">Weather</p>
                <p className="subtitle">Check UK weather by entering postcode</p>
                <div>
                    <div className="field">
                        <label className="label">Postcode</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Type UK postcode here with no space"
                                onChange={this.props.handleInputChange}
                                required />
                            {this.props.error ? <span>Please check your postcode input (no space is needed)</span> : null}
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                type='submit'
                                className="button is-light is-large"
                                value='Search'
                                data-testid='search-button'
                            />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default WeatherForm;