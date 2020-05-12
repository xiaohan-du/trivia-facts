import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Image } from 'react-bulma-components';
import './TFNavbar.scss';

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
            <div key={id}>
                <Navbar.Item onClick={() => this.props.renderFilteredFacts(item)}>
                    {item}
                </Navbar.Item>
            </div>
        )
    }

    render() {
        return (
            <Navbar className="is-fixed-top">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#" style={{ width: 150, height: 40 }}>
                        <Image src={require('../image/logo.png')} alt="Trivia-logo" />
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
                        <div>
                            <Navbar.Item onClick={this.props.showAllCards}>Show All Cards</Navbar.Item>
                        </div>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default TFNavbar