import React, { useState } from 'react';
import chrisMouse from './../../chris-mouse.png';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"

const Mouse = () =>{
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
      <h3>Chris Mouse</h3>
      <div>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={chrisMouse}></img>
          <h4>Chris Mouse</h4>
          <h5 style={{"textDecoration":"line-through"}}>$7445.48</h5>
          <h5>SALE! $3999.99</h5>
          <h5>Are you a hardcore gamer? Looking to go MLG pro? YOU NEED THIS MOUSE. </h5>
          <div>
              <label>Quantity: </label>
              <input onChange={handleInput} type="number"></input>
          </div>
          <button onClick={() => addCart({itemName: "Chris Mouse", quantity: quantity, price: 3999.99})}>ADD TO CART</button>
        </div>
        
      </div>
    </div>
  );
}
export default Mouse;