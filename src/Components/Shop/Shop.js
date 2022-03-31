import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { addToDatabase, getStoredCart } from "../../utilities/database";
import useProducts from "../../hooks/useProducts";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useProducts();

  const [cart, setCart] = useState([]);

  /* useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); */

  // Second
  // Keeping data in the cart using Local Storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const orderSummary = []; //This is for order summary on reload
    for (const id in storedCart) {
      const addedProductDetail = products.find((product) => product.id === id);
      if (addedProductDetail) {
        const quantity = storedCart[id];
        addedProductDetail.quantity = quantity; //the first quantity is quantity of new built array
        orderSummary.push(addedProductDetail);
      }
    }
    setCart(orderSummary);
  }, [products]);

  // First
  const addToCartHandler = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedProduct.id);
    console.log(exist);

    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id); //newly added product/s
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDatabase(selectedProduct.id);
  };

  // Exercise

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
          ></Product>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
