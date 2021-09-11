import React from 'react';
import logo from './../images/chris.jpg'; 
import { useSelector } from "react-redux"
import {  Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Image, Form, Row, Col } from 'react-bootstrap';

const Cart = () =>{
  const state = useSelector((state) => state);
  const listItems = state.cart.items.map(string => <li key={string.item}>{string.item} x {string.quantity}</li>);
  let body;
  if (state.cart.itemCount > 0) {
    body = (
    <div>
    <Container>
      <Row className="text-center">
        <Col>
          <Image className="mb-3" style={{"width":"175px", "height":"175px"}} src={logo} roundedCircle />
        </Col>
        <Col>
        </Col>
      </Row>
      <Row className="mb-4 text-center">
        <Col>
          <h2 className="mb-4 text-center">Your cart contains {state.cart.itemCount} item(s)</h2>
          <ul>{listItems}</ul>
          <h3 className="mb-4 text-center" >Item Total: ${Math.round(state.cart.cartTotal * 100) / 100}</h3>
          <LinkContainer to="/checkout">
            <Button>Checkout as Guest</Button>
          </LinkContainer>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
    </div>
    );
  } else {
    body = (
    <div>
    <Container>
    <h3>Cart</h3>
    <div>
    <p>Your cart is empty.</p>
    </div>
    </Container>
    </div>
    );
  }
  return (
    body
  );
}
export default Cart;