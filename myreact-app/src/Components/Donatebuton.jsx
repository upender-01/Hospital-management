import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY'); // Replace with your Stripe publishable key

const PayButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    // Call your backend to create a Checkout Session
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-[2rem] py-[1rem] bg-blue-500 font-bold outline-none shadow-lg shadow-blue-500/50 text-white font-bold hover:bg-blue-700 block lg:px-[2rem]  lg:px-[2rem] sm:px-[0.5rem] lg:py-[1rem]  sm:py-[0.2rem] sm:px-[0.5rem] lg:block md:block sm:hidden rounded-lg duration-500 hover:-translate-z-4"
    >
      Donate
    </button>
  );
};

export default PayButton;
