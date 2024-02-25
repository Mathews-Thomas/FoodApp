// CartContext.js
import React, { createContext, useContext, useReducer, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      const updatedCart = state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updatedCart.filter((item) => item.quantity > 0);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const placeOrder = () => {
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Generate a unique order ID (you may use a library for this in a real-world scenario)
    const orderId = generateOrderId();

    // Set order details
    const newOrderDetails = {
      orderId,
      items: [...cart], // Create a copy of the cart items
      totalAmount,
      // Add any additional details you want to include in the order
    };

    setOrderDetails(newOrderDetails);
    setOrderPlaced(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  const generateOrderId = () => {
    // This is a placeholder function; you may use a library to generate a unique order ID
    return Math.random().toString(36).substring(7);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getTotalQuantity, removeFromCart, placeOrder, orderPlaced, orderDetails }}
    >
      {children}
    </CartContext.Provider>
  );
};
