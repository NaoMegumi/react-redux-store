import React from 'react';
import { useSelector } from "react-redux"
import {  Link } from "react-router-dom";

const Cart = () =>{
  const state = useSelector((state) => state);
  const listItems = state.cart.items.map(string => <li key={string.item}>{string.item} x {string.quantity}</li>);
  let body;
  if (state.cart.itemCount > 0) {
    body = (
    <div>
    <h3>Cart</h3>
    <div>
    <p>Your Cart contains {state.cart.itemCount} item(s)</p>
    <ul>{listItems}</ul>
    <p>Item Total: ${state.cart.cartTotal}</p>
    <Link to="/checkout">Checkout as Guest</Link>
    </div>
    </div>
    );
  } else {
    body = (
    <div>
    <h3>Cart</h3>
    <div>
    <p>Your cart is empty.</p>
    </div>
    </div>
    );
  }
  return (
    body
  );
}
export default Cart;