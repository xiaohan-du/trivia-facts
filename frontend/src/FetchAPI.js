import React from 'react';

class FetchAPI extends React.Component {

    static async getResponse() {
        let response = await fetch(this.props.apiUrl)
        let body = await response.json();
        return body
    }
}

export default FetchAPI;