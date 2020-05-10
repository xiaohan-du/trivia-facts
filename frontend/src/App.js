import React from 'react';
import TFCard from './components/TFCard';
import TFNavbar from './components/TFNavbar';
import FetchData from './FetchData';
import { Button } from 'react-bulma-components';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      uniqueCategory: [],
      selectedFacts: [],
      showAllCards: false,
      showFilteredCards: false,
      isShowAll: 'Show All',
      isHideAll: 'Hide All'
    };
    this.showAllCards = this.showAllCards.bind(this);
    this.showFilteredCards = this.showFilteredCards.bind(this);
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

  showFilteredCards() {
    
    this.setState({
      showAllCards: false,
      showFilteredCards: true
    });
    this.renderFilteredFacts();
  }

  getFacts() {
    FetchData.getFacts().then(response => {
      let category = [];
      response.data.forEach(element => {
        category.push(element.Category)
      })
      this.setState({ facts: response.data, uniqueCategory: [...new Set(category)] });
    })
  }

  renderFilteredFacts() {
    const category = 'Geography';
    let selectedFacts = [];
    for (var i = 0; i < this.state.facts.length; i++) {
      if (this.state.facts[i].Category === category) {
        selectedFacts.push(this.state.facts[i]);
      };
    };
    this.state.selectedFacts = selectedFacts;
  }

  renderCard = ({ id, Category, Question, Answer }) => {
    return (
      <div key={id}>
        <TFCard Category={Category} Question={Question} Answer={Answer} />
      </div>
    )
  }

  renderFacts(facts) {
    return (
      < div className="columns is-mobile is-multiline is-centered" >
        {facts.map(this.renderCard)}
      </div >
    )
  }

  render() {
    return (
      <div>
        <TFNavbar uniqueCategory={this.state.uniqueCategory} />

        <Button onClick={this.showAllCards}>Show All Cards</Button>
        <Button onClick={this.showFilteredCards}>Show Filtered Cards</Button>

        {this.state.showAllCards ? this.renderFacts(this.state.facts) : null}
        {this.state.showFilteredCards ? this.renderFacts(this.state.selectedFacts) : null}
      </div>
    )
  }
}

export default App;