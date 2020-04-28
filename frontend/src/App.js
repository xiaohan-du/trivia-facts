import React from 'react';

import './App.scss';

import TFCard from './components/TFCard';
import TFNavbar from './components/TFNavbar';
import FetchData from './FetchData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { facts: [] };
    this.renderFacts = this.renderFacts.bind(this);
  }

  componentDidMount() {
    this.getFacts();
  }

  getFacts() {
    FetchData.getFacts().then(response => {
      this.setState({ facts: response.data });
    })
  }

  renderFacts({ id, Category, Question, Answer }) {
    return (
      <div key={id}>
        <TFCard Category={Category} Question={Question} Answer={Answer} />
      </div>
    )
  }

  render() {
    const { facts } = this.state;
    return (
      <div>
        <TFNavbar />
        <div className="columns is-mobile is-multiline is-centered">
          {facts.map(this.renderFacts)}
        </div>
      </div>
    )
  }
}

export default App;