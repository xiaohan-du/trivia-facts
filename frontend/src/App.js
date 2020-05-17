import React from 'react';
import TFCard from './components/TFCard';
import TFNavbar from './components/TFNavbar';
import FetchData from './FetchData';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Section } from 'react-bulma-components';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      uniqueCategory: [],
      selectedFacts: [],
      showAllCards: true,
      showFilteredCards: false
    };
    this.showAllCards = this.showAllCards.bind(this);
    this.renderFacts = this.renderFacts.bind(this);
    this.renderFilteredFacts = this.renderFilteredFacts.bind(this);
  }

  componentDidMount() {
    this.getFacts();
  }

  showAllCards() {
    this.setState({
      showAllCards: true,
      showFilteredCards: false
    })
  }

  getFacts() {
    FetchData.getFacts().then(response => {
      let category = [];
      response.data.forEach(element => {
        category.push(element.Category)
      })
      this.setState({ facts: response.data, uniqueCategory: [...new Set(category)] });
    });
  }

  renderFilteredFacts(item) {
    let selectedFacts = [];
    for (var i = 0; i < this.state.facts.length; i++) {
      if (this.state.facts[i].Category === item) {
        selectedFacts.push(this.state.facts[i]);
      };
    };
    this.setState({
      selectedFacts: selectedFacts,
      showAllCards: false,
      showFilteredCards: true
    })
  }

  renderCard = ({ id, Category, Question, Answer }) => {
    return (
      <div key={id}>
        <Columns.Column className="is-narrow">
          <TFCard Category={Category} Question={Question} Answer={Answer} />
        </Columns.Column>
      </div>
    )
  }

  renderFacts(facts) {
    return (
      < Columns className="is-mobile is-multiline is-centered" >
        {facts.map(this.renderCard)}
      </Columns >
    )
  }

  render() {
    return (
      <div>
        <TFNavbar uniqueCategory={this.state.uniqueCategory} showAllCards={this.showAllCards} renderFilteredFacts={this.renderFilteredFacts} />
        <Section className="hero is-fullheight-with-navbar">
          {this.state.showAllCards ? this.renderFacts(this.state.facts) : null}
          {this.state.showFilteredCards ? this.renderFacts(this.state.selectedFacts) : null}
        </Section>
      </div>
    )
  }
}

export default App;