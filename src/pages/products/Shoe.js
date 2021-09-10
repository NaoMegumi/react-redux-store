import React, { useState } from 'react';
import adidasChris from './../../adidas_x_chris.png'; 
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"

const Shoe = () =>{
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
      <h3>Adidas X Chris Official shoe | (Right foot only)</h3>
      <div>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={adidasChris}></img>
          <h4>Chris Shoe</h4>
          <h5 style={{"textDecoration":"line-through"}}>$19999.99</h5>
          <h5>SALE! $99999.99</h5>
          <h5>Order now. 8473 others have this item in their cart RIGHT NOW.</h5>
          <div>
              <label>Size: </label>
              <select>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>X-Large</option>
              </select>
          </div>
          <div>
              <label>Quantity: </label>
              <input onChange={handleInput} type="number"></input>
          </div>
          <button onClick={() => addCart({itemName: "Chris Shoe", quantity: quantity, price: 99999.99})}>ADD TO CART</button>
        </div>
        
      </div>
    </div>
  );
}
export default Shoe;