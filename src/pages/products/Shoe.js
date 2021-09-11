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
import { ToastContainer, toast } from 'react-toastify';


const Shoe = () =>{
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("5");

  const handleInput = event => {
    let intValue = parseInt(event.target.value);
    if(!isNaN(intValue)) {
      setQuantity(intValue);  
    }
  };
  const notify = (message) => { 
    for (let i = 0; i < state.cart.items.length; i++) {
      if (state.cart.items[i].item === "Chris Shoe(Size: "+ size +")") {
        toast.error("Error: Out of stock.");
        return;
      }
    }
    if (message > 1) {
      toast.info("Only 1 in stock.");
    }
    else if (message === 1) {
      addCart({itemName: "Chris Shoe(Size: " + size + ")", quantity: quantity, price: 19999.99})
      toast.success("Added 1 Chris Shoe (Size: " + size + ") to the cart", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
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
                <option value="5">Size: 5</option>
                <option value="5.5">Size: 5.5</option>
                <option value="6">Size: 6</option>
                <option value="6.5">Size: 6.5</option>
                <option value="7">Size: 7</option>
                <option value="7.5">Size: 7.5</option>
                <option value="8">Size: 8</option>
                <option value="8.5">Size: 8.5</option>
                <option value="9">Size: 9</option>
                <option value="9.5">Size: 9.5</option>
                <option value="10">Size: 8</option>
                <option value="10.5">Size: 10.5</option>
                <option value="11">Size: 11</option>
                <option value="11.5">Size: 11.5</option>
                <option value="12">Size: 12</option>
                <option value="12.5">Size: 12.5</option>
                <option value="13">Size: 13</option>
              </FormControl>
            <InputGroup className="mb-3">
                <InputGroup.Text>Quantity: </InputGroup.Text>
                <FormControl onChange={handleInput} type="number" min="1"/>
            </InputGroup>    
            <Button variant='success' onClick={() => { notify(quantity);}}>ADD TO CART</Button>
          </Col>
          <Col>
          <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />      
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Shoe;