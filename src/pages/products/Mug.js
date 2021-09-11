import React, { useState } from 'react';
import chrisCoffee from './../../images/chris-coffee.png'; 
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Mug = () =>{
  const [quantity, setQuantity] = useState(0);
  const handleInput = event => {
    let intValue = parseInt(event.target.value);
    if(!isNaN(intValue) && intValue > 0) {
      setQuantity(intValue);  
    }
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
              <Card.Img variant="top"   src={chrisCoffee} />
              <Card.Body>
                <Card.Title>
                  Chris Mug
                </Card.Title>
                <Card.Text>
                  Need a quality mug? This is the mug for you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
        <Col className="mb-3 text-center">
            <Form.Label className="mb-3">Price: $999.99</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>Quantity: </InputGroup.Text>
                <FormControl onChange={handleInput} type="number" min="1"/>
            </InputGroup>    
            <Button variant='success' onClick={() => addCart({itemName: "Chris Mug", quantity: quantity, price: 999.99})}>ADD TO CART</Button>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Mug;