import React, { useState } from 'react';
import chrisTee from './../../images/chris-tee.png'; 
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

const Shirt = () =>{
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
              <Card.Img variant="top"   src={chrisTee} />
              <Card.Body>
                <Card.Title>
                  Chris T-Shirt
                </Card.Title>
                <Card.Text>
                  Yes, you can finally have Chris on your T-shirt. Order now while supplies last. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
        <Col className="mb-3 text-center">
            <Form.Label className="mb-3">Price: $8999.99</Form.Label>
            <FormControl onChange={handleChange} className="mb-3" as="select" aria-label="Default select example">
                <option>Select Size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
                <option value="XXL">XX-Large</option>
              </FormControl>
            <InputGroup className="mb-3">
                <InputGroup.Text>Quantity: </InputGroup.Text>
                <FormControl onChange={handleInput} type="number" min="1"/>
            </InputGroup>    
            <Button variant='success' onClick={() => addCart({itemName: "Chris Shirt (" + size + ")", quantity: quantity, price: 8999.99})}>ADD TO CART</Button>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Shirt;