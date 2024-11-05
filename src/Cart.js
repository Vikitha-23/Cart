import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart, onProceedToCheckout }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
               <span>{item.name}</span>
                <span>₹{item.price} x {item.quantity}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total.toFixed(2)}</h3>
      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={onProceedToCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;