import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const deleteItem = (id) => {
    const remainingItem = cart.filter((product) => product.id !== id);
    setCart(remainingItem);
    removeFromDb(id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="review-products-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              productInfo={product}
              deleteItem={deleteItem}
            ></ReviewItem>
          ))}
        </div>
        <div>
          <Cart cart={cart}>
            <Link to="/shipping" className="p-checkout">
              Proceed Checkout
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
