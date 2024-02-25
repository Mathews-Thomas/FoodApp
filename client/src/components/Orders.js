// Orders.js
import React from 'react';
import { useCart } from './CartContext';

const Orders = () => {
  const { orderDetails } = useCart();

  return (
    <div>
      <h1>Your Orders</h1>
      {orderDetails ? (
        <div>
          <h2>Order ID: {orderDetails.orderId}</h2>
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
      ) : (
        <p>No orders placed yet.</p>
      )}
    </div>
  );
};

export default Orders;
