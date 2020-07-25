import React from 'react';

class FetchPostcode extends React.Component {
    constructor(props) {
        super(props);
        this.getAddress = this.getAddress.bind(this);
    }

    static async getAddress() {
        const postcodeAPI = `http://api.postcodes.io/postcodes/cf243aa`;
        let response = await fetch(postcodeAPI),
            body = await response.json();
        return body
    }
}

export default FetchPostcode;