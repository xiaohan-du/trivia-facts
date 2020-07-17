import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Button, Dropdown } from 'react-bulma-components';
import './TFNavbar.scss';
import '../../styles/button.scss';

class TFNavbar extends React.Component {
    constructor(props) {
        super(props);
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
            <Navbar className={this.props.isFixedTop ? "is-fixed-top" : ""}>
                <Navbar.Brand>
                    {this.props.logo}
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
                <Navbar.Menu>
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
                        <Navbar.Item className="TFBtn__is-primary">
                            <Button className="is-light" onClick={this.props.mixCards}>Shuffle</Button>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default TFNavbar