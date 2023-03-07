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
    <main className="container">
      {!isSubmitted ? (
        <section className="container">
        <form className="flex-column-start gap-1" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Address:</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
          <label>Credit Card Info:</label>
          <input
            value={creditcard}
            onChange={(e) => setCreditcard(e.target.value)}
          />
          <button className="btn secondary-btn" type="submit">
            Checkout
          </button>
        </form>
        </section>
      ) : (
        <section className="container">
          <p>Thank you for your purchase, {name}!</p>
          <p>We have sent a confirmation email to {email}.</p>
          <p>Your order will be shipped to:</p>
          <p>{address}</p>
        </section>
      )}
    </main>
  );
};

export default Checkout;
