import React, { useState } from "react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [creditcard, setCreditcard] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>  
            Address:
            <input value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <label>  
            Credit Card Info:
            <input value={creditcard} onChange={(e) => setCreditcard(e.target.value)} />
          </label>
          <button type="submit">Checkout</button>
        </form>
      ) : (
        <div>
          <p>Thank you for your purchase, {name}!</p>
          <p>We have sent a confirmation email to {email}.</p>
          <p>Your order will be shipped to:</p>
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;

