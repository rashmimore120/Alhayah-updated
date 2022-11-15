import React from 'react';
import ReactDOM from 'react-dom/client';

import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PayPalScriptProvider} from "@paypal/react-paypal-js"

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Checkout from './components/Payment/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
  <React.StrictMode>
  <Router>
  <App path='/' element={<><Checkout/></>} />
  </Router>
    
  </React.StrictMode>
  </PayPalScriptProvider>
);

