import React from 'react';
import TFCard from './components/TFCard';
import TFNavbar from './components/TFNavbar';
import FetchData from './FetchData';
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
    })
  }

  renderFilteredFacts(item) {
    const category = item;
    let selectedFacts = [];
    for (var i = 0; i < this.state.facts.length; i++) {
      if (this.state.facts[i].Category === category) {
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
        <TFNavbar uniqueCategory={this.state.uniqueCategory} showAllCards={this.showAllCards} renderFilteredFacts={this.renderFilteredFacts}/>

        {this.state.showAllCards ? this.renderFacts(this.state.facts) : null}
        {this.state.showFilteredCards ? this.renderFacts(this.state.selectedFacts) : null}
      </div>
    )
  }
}

export default App;