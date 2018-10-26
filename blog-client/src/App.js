import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Auth } from 'aws-amplify';
import Routes from './Routes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user')
        alert(e.message);
    }

    this.setState({ isAuthenticating: false });
  }
  //takes whatever is returned by authenticated and sets it to isAuthenticated
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated })
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
  }

  render() {
    // user this together with <Routes/> in order to raise the state of authentication
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
    }

    return (
      !this.isAuthenticating &&
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Ernest.</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem href="/blog">Blog</NavItem>
              <NavItem href="/projects">Projects</NavItem>
            </Nav>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : ""
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
