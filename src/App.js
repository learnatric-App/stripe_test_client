import React from 'react';
// Components
import HomePage from './HomePage';
// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// Styles
// import './index.scss';

const stripePromise = loadStripe("pk_test_51J2zzME260ZusP4JwfTcUB8mmbeIu09aAv1bixaOocy8VRK6zbagC0kTS94xnJsFRucW8r1ATpq5drjIp1l0vwfr00jUEGf07H");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
}

export default App;
