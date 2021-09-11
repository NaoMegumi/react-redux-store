import React, { useState } from 'react';
import maskChris from './../../images/chris_mask.png';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Mask = () =>{
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
              <Card.Img variant="top"   src={maskChris} />
              <Card.Body>
                <Card.Title>
                  Chris Mask
                </Card.Title>
                <Card.Text>
                  Need to wear a mask but also want a hot fashion statement? Order a Chris mask now.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
        <Col className="mb-3 text-center">
            <Form.Label className="mb-3">Price: $99.99</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>Quantity: </InputGroup.Text>
                <FormControl onChange={handleInput} type="number" min="1"/>
            </InputGroup>    
            <Button variant='success' onClick={() => addCart({itemName: "Chris Mask", quantity: quantity, price: 99.99})}>ADD TO CART</Button>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Mask;