import React, { useState } from 'react';
import maskChris from './../../chris_mask.png';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"

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
      <h3>Chris Mask</h3>
      <div>
        <div>
          <img style={{"width":"175px", "height":"175px"}} src={maskChris}></img>
          <h4>Chris Mask</h4>
          <h5>$99.99</h5>
          <h5>Need to wear a mask but also want a hot fashion statement? Order a Chris mask now. </h5>
          <div>
              <label>Quantity: </label>
              <input onChange={handleInput} type="number"></input>
          </div>
          <button onClick={() => addCart({itemName: "Chris Mask", quantity: quantity, price: 99.99})}>ADD TO CART</button>
        </div>
        
      </div>
    </div>
  );
}
export default Mask;