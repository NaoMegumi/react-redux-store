import React, { useState } from 'react';
import adidasChris from './../../images/adidas_x_chris.png'; 
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Shoe = () =>{
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("");

  const handleInput = event => {
    let intValue = parseInt(event.target.value);
    if(!isNaN(intValue) && intValue > 0) {
      setQuantity(intValue);  
    }
  };
  const handleChange = event => {
    setSize(event.target.value);
  };
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const { addCart } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="mb-3 text-center">
              <Card.Img variant="top"   src={adidasChris} />
              <Card.Body>
                <Card.Title>
                  Adidas X Chris Official shoes
                </Card.Title>
                <Card.Text>
                  The offical Chris X Adidas shoe collab. 1 of 1. Super Rare.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
        <Col className="mb-3 text-center">
            <Form.Label className="mb-3">Price: $19999.99</Form.Label>
            <FormControl onChange={handleChange} className="mb-3" as="select" aria-label="Default select example">
                <option>Select Size</option>
                <option value="5">5</option>
                <option value="5.5">5.5</option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">8</option>
                <option value="10.5">10.5</option>
                <option value="11">11</option>
                <option value="11.5">11.5</option>
                <option value="12">12</option>
                <option value="12.5">12.5</option>
                <option value="13">13</option>
              </FormControl>
            <InputGroup className="mb-3">
                <InputGroup.Text>Quantity: </InputGroup.Text>
                <FormControl onChange={handleInput} type="number" min="1"/>
            </InputGroup>    
            <Button variant='success' onClick={() => addCart({itemName: "Chris Shoe(" + size + ")", quantity: quantity, price: 99999.99})}>ADD TO CART</Button>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Shoe;