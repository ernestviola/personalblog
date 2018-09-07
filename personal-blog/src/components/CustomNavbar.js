import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Ernest</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem exact eventKey={1} componentClass={NavLink} href="/" to="/">
                            Home
                            </NavItem>
                        <NavItem eventKey={2} componentClass={NavLink} href="/blog" to="/blog">
                            Blog
                            </NavItem>
                        <NavItem eventKey={3} componentClass={NavLink} href="/projects" to="/projects">
                            Projects
                            </NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}
