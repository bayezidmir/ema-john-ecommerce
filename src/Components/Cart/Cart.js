import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shippingCharge = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping;
  }

  let tax = (totalPrice * 15) / 100;

  const grandTotal = totalPrice + shippingCharge + tax;
  return (
    <div className="cart-container">
      <p className="section-title">Order Summary</p>
      <div>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Total Shipping Charge: {shippingCharge}</p>
        <p>Tax: {tax}</p>
        <p>Grand totals: {grandTotal}</p>
      </div>
      <button className="clear-cart">
        Clear Cart
        <FontAwesomeIcon icon={faTrash} className="trash-icon" />
      </button>{" "}
      <br />
      <button className="review-order">
        Review Order{" "}
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      </button>
    </div>
  );
};

export default Cart;
