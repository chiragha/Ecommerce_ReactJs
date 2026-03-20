import { createContext, useState , useEffect } from "react";
import React from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Initialize from localStorage
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  // add to cart code with quantity management
 const addToCart = (product) => {
  const exist = cart.find(
    (item) => item.id === product.id && item.type === product.type
  );

  if (exist) {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.type === product.type
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
};


  // remove specific items from cart

const removeFromCart = (id, type) => {
  setCart(cart.filter(item => !(item.id === id && item.type === type)));
};

 const increaseQty = (id, type) => {
  setCart(
    cart.map((item) =>
      item.id === id && item.type === type
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
};

const decreaseQty = (id, type) => {
  setCart(
    cart.map((item) =>
      item.id === id && item.type === type && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )
  );
};

  // removeAllItems from cart

  const removeAllItems = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        removeAllItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};