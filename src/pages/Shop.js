import React from 'react';
import chrisTee from './../chris-tee.png'; 
import chrisCoffee from './../chris-coffee.png'; 
import chrisMouse from './../chris-mouse.png';
import adidasChris from './../adidas_x_chris.png'; 
import maskChris from './../chris_mask.png'; 
import { Link } from "react-router-dom";

const Shop = () =>{
  return (
    <div>
      <h3>Shop</h3>
      <div>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={chrisTee}></img>
        </div>
        <Link to="/shirt">Chris T-Shirt - LIMITED EDITION</Link>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={chrisCoffee}></img>
        </div>
        <Link to="/mug">Chris Mug - Great for warm drinks</Link>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={chrisMouse}></img>
        </div>
        <Link to="/mouse">Chris Mouse - All the pro gamers have one</Link>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={adidasChris}></img>
        </div>
        <Link to="/shoe">Adidas X Chris shoe collab | 1 of 1 Super RARE 🔥🔥🔥</Link>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={maskChris}></img>
        </div>
        <Link to="/mask">Chris Mask - Pack of 3</Link>
      </div>
    </div>
  );
}
export default Shop;