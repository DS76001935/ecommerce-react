import React from "react";
import { foodItems } from "../Store/PRODUCTS";

export const CartContext = React.createContext();

export const CartContextProvider = (props) => {
  const defaultCartValue = () => {
    let cart = {};
    for (let i = 1; i <= foodItems.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = React.useState(defaultCartValue());

  const addToCart = (id) => {
    setCartItems({ ...cartItems, [id]: cartItems[id] + 1 });
  };

  const removeFromCart = (id) => {
    setCartItems({ ...cartItems, [id]: cartItems[id] - 1 });
  };

  const updateCartItemValue = (newValue, id) => {
    setCartItems({ ...cartItems, [id]: newValue });
  };

  const removeEntirely = (id) => {
    setCartItems({ ...cartItems, [id]: 0 });
  };

  const getTotalCartValue = () => {
    let totalVal = 0;
    for (let item in cartItems) {
      const product = foodItems.find((product) => product.id === Number(item));
      totalVal += cartItems[item] * product.price;
    }
    return totalVal;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemValue,
    getTotalCartValue,
    removeEntirely,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
