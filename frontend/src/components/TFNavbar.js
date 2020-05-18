import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Image, Button, Dropdown } from 'react-bulma-components';
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
            <Dropdown.Item value="item" key={id} >
                <div onClick={() => this.props.renderFilteredFacts(item)}>
                    {item}
                </div>
            </Dropdown.Item>
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
                        <Navbar.Item>
                            <Dropdown hoverable>
                                <Dropdown.Item value="item">
                                    <div onClick={this.props.showAllCards}>All Categories</div>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                {this.props.uniqueCategory.map(this.renderItem)}
                            </Dropdown>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button className="is-danger" onClick={this.props.mixCards}>Shuffle</Button>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default TFNavbar