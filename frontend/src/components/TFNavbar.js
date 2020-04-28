import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';
import FetchData from '../FetchData';
import './TFNavbar.scss';

class TFNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { uniqueCategory: [], test: [] };
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.sortCategory();
    }

    sortCategory() {
        FetchData.getFacts().then(response => {
            let category = [];
            response.data.forEach(element => {
                category.push(element.Category);
            });
            this.setState({ uniqueCategory: [...new Set(category)] })
        })
    }

    renderItem(item, id) {
        return (
            <div key={id} data-category={item}>
                <Navbar.Item onClick={() => this.findCategory(item)}>
                    {item}
                </Navbar.Item>
            </div>
        )
    }

    findCategory (item) {
        this.setState({test: item})
        debugger;
    }

    render() {
        const { uniqueCategory } = this.state;
        
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
                        {uniqueCategory.map(this.renderItem)}
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default TFNavbar