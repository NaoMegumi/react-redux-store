import React, { useState } from 'react';
import chrisCoffee from './../../chris-coffee.png'; 
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"

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
      <h3>Mug</h3>
      <div>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={chrisCoffee}></img>
          <h4>Chris Mug</h4>
          <h5 style={{"textDecoration":"line-through"}}>$3999.99</h5>
          <h5>SALE! $999.99</h5>
          <h5>Need a quality mug? This is the mug for you. </h5>
          <div>
              <label>Quantity: </label>
              <input onChange={handleInput} type="number"></input>
          </div>
          <button onClick={() => addCart({itemName: "Chris Mug", quantity: quantity, price: 999.99})}>ADD TO CART</button>
        </div>
        
      </div>
    </div>
  );
}
export default Mug;