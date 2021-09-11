import React from 'react';
import logo from './../images/chris.jpg'; 
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Home = () =>{
  return (
    <div>
      <Container className="mb-3 text-center">
        <Image className="mb-3" style={{"width":"175px", "height":"175px"}} src={logo} roundedCircle />
        <Card className="mb-3 text-center">
        <Card.Body>
              <Card.Title>
                Welcome to Chris Shop!
              </Card.Title>
              <Card.Text>
                Your one stop shop for everything Chris
              </Card.Text>
              <Card.Text>
                "The must luxurious shop on the internet" -Chris
              </Card.Text>
        </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Home;