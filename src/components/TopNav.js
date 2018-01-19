import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const TopNav = (props) => {
  if(props.authenticated) {
    return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
              <a>barebones</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {/*
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              */}
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title={props.authenticatedUser.username} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} onClick={() => { props.history.push('/profile') }}>Profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4} onClick={() => { props.history.push('/logout') }}>Logout</MenuItem>
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