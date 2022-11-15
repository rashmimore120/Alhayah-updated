import React from 'react'
import './checkout.css'
import ProductImage from '../../images/sprite.png'
import PaypalCheckoutButton from "./PaypalCheckoutButton";

function Checkout() {
    const product = {
        description: "Rainbow Evaporated Milk Original 170g",
        price: 1,
    };
  return (
    <div className="checkout">
        <h1>PayPal Checkout</h1>
        <p className="checkout-title">
            AL HAYAH PayPal Checkout Procedure
        </p>
        <p className="checkout-description">
        Rainbow Evaporated Milk Original 170g</p>
        <h1 className="checkout-price">AED 1</h1>
        <img className="product-image" src={ProductImage} alt="Product Image" />
        <div className="separator"></div>
        <div className="paypal">
            <p className="checkout-title">PAY WITH PAYPAL</p>
            <div className="paypal-button-container">
                <PaypalCheckoutButton product={product} />
            </div>
        </div>
    </div>
  )
}

export default Checkout