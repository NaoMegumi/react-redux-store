import React from 'react';
import chrisTee from './../images/chris-tee.png'; 
import chrisCoffee from './../images/chris-coffee.png'; 
import chrisMouse from './../images/chris-mouse.png';
import adidasChris from './../images/adidas_x_chris.png'; 
import maskChris from './../images/chris_mask.png'; 
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const Shop = () =>{
  return (
    <div>
      <div>
        <Container className="mb-3">
        <Row>
          <Col md>
          <Card className="mb-3 text-center">
            <Card.Img variant="top"   src={chrisTee} />
            <Card.Body>
              <Card.Title>
                Chris T-Shirt
              </Card.Title>
              <Card.Text>
                Limited edition. While supplies last. 
              </Card.Text>
              <LinkContainer to="/react-redux-store/shirt">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
          <Col md> 
          <Card className="mb-3 text-center">
            <Card.Img src={chrisCoffee} />
            <Card.Body>
              <Card.Title>
                Chris Mug
              </Card.Title>
              <Card.Text>
                Enjoy your morning coffee in style. Supports chai too!
              </Card.Text>
              <LinkContainer to="/react-redux-store/mug">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md>
          <Card className="mb-3 text-center">
            <Card.Img src={chrisMouse} />
            <Card.Body>
              <Card.Title>
                Chris Mouse
              </Card.Title>
              <Card.Text>
                All of the pro gamers have one. 
              </Card.Text>
              <LinkContainer to="/react-redux-store/mouse">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
          <Col md>
          <Card className="mb-3 text-center">
            <Card.Img src={adidasChris} />
            <Card.Body>
              <Card.Title>
                Adidas X Chris shoe
              </Card.Title>
              <Card.Text>
                1 of 1 super rare 🔥🔥🔥
              </Card.Text>
              <LinkContainer to="/react-redux-store/shoe">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md>
          <Card className="mb-3 text-center">
            <Card.Img src={maskChris} />
            <Card.Body>
              <Card.Title>
                Chris Mask
              </Card.Title>
              <Card.Text>
                Pack of 3 Chris masks. 
              </Card.Text>
              <LinkContainer to="/react-redux-store/mask">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}
export default Shop;