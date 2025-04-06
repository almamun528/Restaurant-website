import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error --> ", error);
    } else {
      console.log("payment method ---> ", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="mt-3 btn btn-primary bg-amber-400 hover:bg-amber-700 text-white"
        type="submit"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckOut;
