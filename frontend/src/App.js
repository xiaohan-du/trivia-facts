import React from 'react';
import TFCard from './components/TFCard';
import TFNavbar from './components/TFNavbar';
import TFTile from './components/TFTile';
import FetchFacts from './FetchFacts';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Section, Tile, Box, Heading, Image } from 'react-bulma-components';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      uniqueCategory: [],
      selectedFacts: [],
      showAllCards: true,
      showFilteredCards: false,
      isLoaded: false,
      items: []
    };
    this.showAllCards = this.showAllCards.bind(this);
    this.renderFacts = this.renderFacts.bind(this);
    this.renderFilteredFacts = this.renderFilteredFacts.bind(this);
    this.mixCards = this.mixCards.bind(this);
  }

  componentDidMount() {
    this.getFacts();
    /* this.getWeather(); */
  }

  showAllCards() {
    this.setState({
      showAllCards: true,
      showFilteredCards: false
    })
  }

  getFacts() {
    FetchFacts.getFacts().then(response => {
      let category = [];
      response.data.forEach(element => {
        category.push(element.Category)
      })
      this.setState({ facts: response.data, uniqueCategory: [...new Set(category)] });
    });
  }

  fetchCOVID19() {
    fetch("https://api.covid19api.com/live/country/united-kingdom")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          })
        }
      )
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

  shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  mixCards() {
    this.state.showAllCards ?
      this.setState({ facts: this.shuffle(this.state.facts) }) :
      this.setState({ selectedFacts: this.shuffle(this.state.selectedFacts) });
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
        <Section className="hero is-full-height-with-navbar">
          <TFNavbar
            uniqueCategory={this.state.uniqueCategory}
            showAllCards={this.showAllCards}
            mixCards={this.mixCards}
            renderFilteredFacts={this.renderFilteredFacts} />
        </Section>
        <Section>
          <Box>
            <Tile kind="ancestor">
              <Tile kind="parent" vertical>
                <TFTile showAllCards={this.showAllCards}
                  renderFacts={this.renderFacts}
                  facts={this.state.facts}
                  selectedFacts={this.state.selectedFacts} />
                <Tile renderAs="article" kind="child" notification color="warning">
                  <Heading>Tiles...</Heading>
                  <Heading subtitle>Bottom Tile...</Heading>
                </Tile>
              </Tile>
            </Tile>
          </Box>
        </Section>
      </div>
    )
  }
}

export default App;