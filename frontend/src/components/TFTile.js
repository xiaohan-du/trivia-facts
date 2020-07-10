import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Tile, Heading } from 'react-bulma-components';
import './TFTile.scss';

class TFTile extends React.Component {

    render() {
        return (
            <Tile className="TFTile" renderAs="article" kind="child" notification color="success">
                <div className="content">
                    <Heading>Trivia facts</Heading>
                    {this.props.showAllCards ? this.props.renderFacts(this.props.facts) : null}
                    {this.props.showFilteredCards ? this.props.renderFacts(this.props.selectedFacts) : null}
                </div>
            </Tile>
        )
    }
}

export default TFTile;