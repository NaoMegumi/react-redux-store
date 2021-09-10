import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../redux/index"
import {  Link } from "react-router-dom";


const Checkout = () =>{
  const [quantity, setQuantity] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const { addCart } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h3>Checkout</h3>
      <div>
        <p>Email Address</p>
        <div>
            <input placeholder="example@email.com"></input>
        </div>
        <p>Shipping/Billing Information</p>
        <div>
            <input placeholder="John"></input>
            <br></br>
            <input placeholder="Smith"></input>
            <br></br>
            <input placeholder="(123)-123-1234"></input>
            <br></br>
            <input placeholder="Address"></input>
            <br></br>
            <input placeholder="Apt/Unit/Suite"></input>
            <br></br>
            <input placeholder="State/Province"></input>
            <br></br>
            <input placeholder="Zip/Postal"></input>
            <br></br>
            <input placeholder="Country"></input>
            <br></br>
        </div>
        <p>Payment Information</p>
        <div>
            <input placeholder="Card Number"></input>
            <br></br>
            <input placeholder="MM/DD/YYYY"></input>
            <br></br>
            <input placeholder="CCV"></input>
            <br></br>
        </div>
        <br></br>

        <h4>Total</h4>
        <div>
            <p>Subtotal: ${state.cart.cartTotal}</p>
            <p>Shipping: $10</p>
            <p>Taxes: ${state.cart.cartTotal * .0625}</p>
            <p>Total: ${state.cart.cartTotal + (state.cart.cartTotal * .0625) + 10}</p>
        </div>
        <br></br>
        <Link to="/confirmation">Confirm Purchase</Link>
        <br></br>
      </div>
    </div>
  );
}
export default Checkout;