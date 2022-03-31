import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/database";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const cartFromStorage = [];

    for (const id in storedCart) {
      const loadingProductDetail = products.find(
        (product) => product.id === id
      );

      if (loadingProductDetail) {
        loadingProductDetail.quantity = storedCart[id];
        cartFromStorage.push(loadingProductDetail);
      }
    }
    setCart(cartFromStorage);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
