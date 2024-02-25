// Cart.js
import React, { useState } from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, addToCart, removeFromCart, placeOrder, orderPlaced, orderDetails } = useCart();
  const [orderPlacedMessage, setOrderPlacedMessage] = useState('');

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handlePlaceOrder = () => {
    placeOrder();
    setOrderPlacedMessage('Order placed successfully!');
  };

  return (
    <div className='p-5'>
      <h1 className='text-danger text-center'>Your Cart</h1>
      {cart.length === 0 ? (
        <p className='h2 p-5 text-center'>Your cart is empty.</p>
      ) : (
        <div className='cart-items bg-light p-5'>
          {cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <p className='h3'>{item.name}</p>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100px', height: '100px' }}
              />
              <p className='h5'>Variant: {item.variant}</p>
              <p className='h5'>Quantity: {item.quantity}</p>
              <p className='h5'>Price: {item.price * item.quantity} Rs /-</p>
              <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => handleAddToCart(item)}
              >
                Add One More
              </button>
              <button
                className='btn btn-danger btn-sm'
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove Item
              </button>
            </div>
          ))}
          <button className='btn btn-success btn-lg' onClick={handlePlaceOrder}>
            Place Order
          </button>
          {orderPlaced && (
            <div>
              <p className='text-success mt-3'>{orderPlacedMessage}</p>
              <h2>Order Details:</h2>
              <h3>Order ID: {orderDetails.orderId}</h3>
              <h3>Total Amount: {orderDetails.totalAmount} Rs /-</h3>
              <h3>Items:</h3>
              <ul>
                {orderDetails.items.map((item) => (
                  <li key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>Variant: {item.variant}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {item.price} Rs /-</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
