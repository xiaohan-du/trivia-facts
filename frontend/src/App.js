import React from 'react';
import TFCard from './components/trivia-facts/TFCard';
import FetchFacts from './FetchFacts';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Section, Tile, Box, Heading, Navbar } from 'react-bulma-components';

import './App.scss';
import TFTile from './components/TFTile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      uniqueCategory: [],
      selectedFacts: [],
      isShowAllCards: true,
      isShowFilteredCards: false,
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
  }

  showAllCards() {
    this.setState({
      facts: this.state.facts,
      isShowAllCards: true,
      isShowFilteredCards: false
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

  renderFilteredFacts(item) {
    let selectedFacts = [];
    for (var i = 0; i < this.state.facts.length; i++) {
      if (this.state.facts[i].Category === item) {
        selectedFacts.push(this.state.facts[i]);
      };
    };
    this.setState({
      selectedFacts: selectedFacts,
      isShowAllCards: false,
      isShowFilteredCards: true
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
    this.state.isShowAllCards ?
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
          <Navbar className="is-fixed-top">
            <Navbar.Brand>
              <Navbar.Item renderAs="a" href="#">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu >
              <Navbar.Container>
                <Navbar.Item>
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
          <Section>
            <Box>
              <Tile kind="ancestor">
                <Tile size={12} vertical>
                  <Tile kind="parent" vertical>
                    <Tile kind="parent">
                      <TFTile showAllCards={this.showAllCards}
                        isShowAllCards={this.state.isShowAllCards}
                        isShowFilteredCards={this.state.isShowFilteredCards}
                        renderFacts={this.renderFacts}
                        facts={this.state.facts}
                        selectedFacts={this.state.selectedFacts}
                        uniqueCategory={this.state.uniqueCategory}
                        renderFilteredFacts={this.renderFilteredFacts}
                        mixCards={this.mixCards}
                      />
                    </Tile>
                    <Tile renderAs="article" kind="child" notification color="warning">
                      <Heading>Tiles...</Heading>
                      <Heading subtitle>Bottom Tile...</Heading>
                    </Tile>
                  </Tile>
                </Tile>
              </Tile>
            </Box>
          </Section>
        </Section>
      </div>
    )
  }
}

export default App;