import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';
import './TFNavbar.scss';
import {Button} from 'react-bulma-components';

class TFNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: null
        }
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(item, id) {
        return (
            <div key={id} data-category={item}>
                <Navbar.Item onClick={() => this.props.renderFilteredFacts(item)}>
                    {item}
                </Navbar.Item>
            </div>
        )
    }

    render() {
        return (
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src={require('../image/logo.png')} alt="Trivia-logo" width="112" height="28" />
                    </Navbar.Item>
                    <label role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        htmlFor="nav-toggle-state">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </label>
                </Navbar.Brand>
                <input type="checkbox" id="nav-toggle-state" />
                <Navbar.Menu >
                    <Navbar.Container>
                        {this.props.uniqueCategory.map(this.renderItem)}
                        <Button onClick={this.props.showAllCards}>Show All Cards</Button>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default TFNavbar