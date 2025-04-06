import SectionTitle from "../../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_STRIP_PAYMENT_KEY);

const Payment = () => {
  return (
    <>
      <SectionTitle
        heading={"Payment"}
        subHeading={"payment is secure no worries about it..."}
      />

      <div>
        <Elements stripe={stripePromise}>
          <CheckOut />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
