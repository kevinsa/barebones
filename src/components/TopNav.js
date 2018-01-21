import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

const TopNav = (props) => {
  if(props.authenticated) {
    return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
              <a eventKey={0} onClick={() => { props.history.push('/') }}>barebones</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={() => { props.history.push('/about') }}>About</NavItem>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={2} title={props.authenticatedUser.username} id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} onClick={() => { props.history.push('/profile') }}>Profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.2} onClick={() => { props.history.push('/logout') }}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
  else {
    return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
              <a>barebones</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
    )
  }
};

export default TopNav;