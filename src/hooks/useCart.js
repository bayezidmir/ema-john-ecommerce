import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/database";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const cartFromStorage = [];
    console.log(storedCart);

    const keys = Object.keys(storedCart);
    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCart) {
          const loadingProductDetail = products.find(
            (product) => product._id === id
          );

          if (loadingProductDetail) {
            loadingProductDetail.quantity = storedCart[id];
            cartFromStorage.push(loadingProductDetail);
          }
        }
      });

    setCart(cartFromStorage);
  }, []);

  return [cart, setCart];
};

export default useCart;
