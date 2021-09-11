import React from 'react';
import {  Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const NavBar= () =>{
  return (
  <div>
  <Navbar className="mb-5" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Chris Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <LinkContainer to="/home">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/shop">
        <Nav.Link>Shop</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/cart">
        <Nav.Link>Cart</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
  </div>
  );
}
export default NavBar;