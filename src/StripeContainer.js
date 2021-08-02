import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51J2zzME260ZusP4JwfTcUB8mmbeIu09aAv1bixaOocy8VRK6zbagC0kTS94xnJsFRucW8r1ATpq5drjIp1l0vwfr00jUEGf07H";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;