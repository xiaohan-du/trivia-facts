import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';
import '../main.scss';
import './MainNavbar.scss';
import mainLogo from '../image/astronaut-helmet-logo.png';

class MainNavbar extends React.Component {

    render() {
        return (
            <Navbar className="is-fixed-top MainNavbar">
                <Navbar.Brand>
                    <Navbar.Item className="MainNavbar__logo" renderAs="a" href="#">
                        <img src={mainLogo} alt="main logo" />
                    </Navbar.Item>
                    <label role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        htmlFor="main-nav-toggle-state">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </label>
                </Navbar.Brand>
                <input type="checkbox" id="main-nav-toggle-state" />
                <Navbar.Menu >
                    <Navbar.Container>
                        <Navbar.Item>
                            <input placeholder="Search here..." />
                        </Navbar.Item>
                        <Navbar.Item renderAs="a" href="#">
                            Placeholder 1
                        </Navbar.Item>
                        <Navbar.Item renderAs="a" href="#">
                            Placeholder 2
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Item renderAs="p" className="Site-under-construction ">
                        <span role="img" aria-label="plane">🛬 Site under construction 🛫</span>
                    </Navbar.Item>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default MainNavbar