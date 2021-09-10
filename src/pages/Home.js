import React from 'react';
import logo from './../chris.jpg'; 

const Home = () =>{
  return (
    <div>
      <h3>Chris Shop</h3>
      <div>
        <img style={{"borderRadius": "50%"}}src={logo}></img>
        <p>Your one stop shop for everything Chris</p>
        <p>"The must luxurious shop on the internet" -Chris</p>
      </div>
    </div>
  );
}
export default Home;