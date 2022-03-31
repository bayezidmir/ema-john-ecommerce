import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ addToCartHandler, product }) => {
  // const { addToCartHandler, product } = props;
  // const { name, seller, img, price, ratings } = props.product;
  const { name, seller, img, price, ratings } = product;
  // console.log(props);

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="price">Price: &pound; {price} </p>
        <p className="manufacturer">Manufacturer: {seller} </p>
        <p className="rating">Rating: {ratings} Stars </p>
      </div>
      <button className="btn-cart" onClick={() => addToCartHandler(product)}>
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart-icon" />
      </button>
    </div>
  );
};

export default Product;
