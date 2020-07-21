import React from 'react';

class FetchData extends React.Component {

    static async getFacts() {
        let response = await fetch('http://localhost:4000/trivia-fact');
        let body = await response.json();
        return body
    }
}

export default FetchData;