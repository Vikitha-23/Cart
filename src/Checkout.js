import React, { useState } from 'react';
import axios from 'axios';
import './Checkout.css';

const Checkout = ({ cartItems, goBackToCart }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    MobileNumber: '',
    pin: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    // Validate inputs (basic validation)
    if (
      !shippingInfo.name ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.pin ||
      !shippingInfo.MobileNumber ||
      !paymentInfo.cardNumber ||
      !paymentInfo.expiryDate ||
      !paymentInfo.cvv
    ) {
      alert('Please fill out all fields.');
      return;
    }

    // Prepare order data
    const orderData = {
      items: cartItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    // Send order data to backend
    try {
      const response = await axios.post('http://localhost:5000/placeorder', orderData);
      if (response.data.success) {
        setOrderSuccess(true);
        console.log('Order placed successfully:', response.data.orderId);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h3>Order Summary</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total.toFixed(2)}</h3>

      <h3>Shipping Information</h3>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={shippingInfo.name}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="MobileNumber"
          placeholder="Mobile Number"
          value={shippingInfo.MobileNumber}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="pin"
          placeholder="Pin Code"
          value={shippingInfo.pin}
          onChange={handleShippingChange}
        />
      </div>

      <h3>Payment Information</h3>
      <div className="form-group">
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentChange}
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          value={paymentInfo.expiryDate}
          onChange={handlePaymentChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={handlePaymentChange}
        />
      </div>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
      
      <button className="back-to-cart-btn" onClick={goBackToCart}>
        Back to Cart
      </button>

      {orderSuccess && <p>Your order has been placed successfully!</p>}
    </div>
  );
};

export default Checkout;