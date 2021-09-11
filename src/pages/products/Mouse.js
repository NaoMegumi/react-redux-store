import React, { useState } from 'react';
import chrisMouse from './../../images/chris-mouse.png';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';


const Mouse = () =>{
  const [quantity, setQuantity] = useState(0);
  const handleInput = event => {
    let intValue = parseInt(event.target.value);
    if(!isNaN(intValue)) {
      setQuantity(intValue);  
    }
  };
  const notify = (message) => { 
    let cartCount = 0;
    for (let i = 0; i < state.cart.items.length; i++) {
      if (state.cart.items[i].item === "Chris Mouse") {
        cartCount = state.cart.items[i].quantity;
        if (cartCount >= 100) {
          toast.error("Error: Out of stock.");
          return;
        }
      }
    }
    if (message > 100) {
      toast.info("Only " + (100-cartCount) + " in stock.");
    }
    else if (message > 1) {
      if ((message + cartCount) > 100) {
        toast.info("Only " + (100-cartCount) + " in stock.");
        return;
      }
      addCart({itemName: "Chris Mouse", quantity: message, price: 3999.99})
      toast.success("Added " + quantity + " Chris Mouse to the cart", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else if (message === 1) {
      addCart({itemName: "Chris Mouse", quantity: message, price: 3999.99})
      toast.success("Added 1 Chris Mouse to the cart", {
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
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const { addCart } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>

      <Container>
        <Row>
          <Col>
            <Card className="mb-3 text-center">
              <Card.Img variant="top"   src={chrisMouse} />
              <Card.Body>
                <Card.Title>
                  Chris Mouse
                </Card.Title>
                <Card.Text>
                  Are you a hardcore gamer? Looking to go MLG pro? Buy this mouse. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
        <Col className="mb-3 text-center">
            <Form.Label className="mb-3">Price: $3999.99</Form.Label>
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
export default Mouse;