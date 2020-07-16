import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Tile, Heading } from 'react-bulma-components';
import './TFTile.scss';
import TFNavbar from './TFNavbar';

class TFTile extends React.Component {

    renderLogo() {
        return (
            <Navbar.Item className="TFNavbar__logo">
                Trivia Facts
            </Navbar.Item>
        )
    }

    render() {
        return (
            <Tile className="TFTile" renderAs="article" kind="child" notification color="success">
                <div className="content">
                    <Heading>
                        <TFNavbar
                            logo={this.renderLogo()}
                            uniqueCategory={this.props.uniqueCategory}
                            showAllCards={this.props.showAllCards}
                            mixCards={this.props.mixCards}
                            renderFilteredFacts={this.props.renderFilteredFacts}
                            isFixedTop={false} />
                    </Heading>
                    {this.props.isShowAllCards ? this.props.renderFacts(this.props.facts) : null}
                    {this.props.isShowFilteredCards ? this.props.renderFacts(this.props.selectedFacts) : null}
                </div>
            </Tile>
        )
    }
}

export default TFTile;