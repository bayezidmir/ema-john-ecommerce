import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div>
      <div className="shop-container">
        <div className="review-products-container">
          {cart.map((product) => (
            <ReviewItem key={product.id} productInfo={product}></ReviewItem>
          ))}
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
