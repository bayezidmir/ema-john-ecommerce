import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { addToDatabase, getStoredCart } from "../../utilities/database";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const url = `http://localhost:5000/product?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const addToCartHandler = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product._id === selectedProduct._id);
    console.log(exist);

    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      ); //newly added product/s
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDatabase(selectedProduct._id);
  };

  // Exercise

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addToCartHandler={addToCartHandler}
          ></Product>
        ))}
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              className={number === page ? "selected" : ""}
            >
              {number}
            </button>
          ))}
        </div>

        <div>
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>

      <div>
        <Cart cart={cart}>
          <p>Review Order</p>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
