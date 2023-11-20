import React from "react";
import { Link } from "react-router-dom";
import Fire from "./Firecrackers";

const PaymentSuccess = () => {
  return (
    <div className="payment-container">
      <div className="content">
        <i className="fa fa-check-circle icon" aria-hidden="true"></i>
        <h3 className="heading">Payment Successful!</h3>
        <p className="text">
          Thank you for your order. Order will deliver shortly.
        </p>
        <div className="button">
          <Link to="/" className="btn">
            Back To Home
          </Link>
        </div>
      </div>
      <Fire />
    </div>
  );
};

export default PaymentSuccess;
