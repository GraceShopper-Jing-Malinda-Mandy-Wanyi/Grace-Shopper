import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (displayName === "Sign Up") {
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      dispatch(
        authenticate({
          username,
          password,
          email,
          firstName,
          lastName,
          method: formName,
        })
      );

      navigate("/landing");
    }
  };

  if (displayName === "Sign Up") {
    return (
      <main id="signup" className="container flex-column">
        <form className="flex-column gap-1" onSubmit={handleSubmit} name={name}>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
            <label htmlFor="username">
              <small>Username</small>
            </label>
            <input name="username" type="text" />
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
            <button className="btn primary-btn" type="submit">{displayName}</button>
          {error && <div> {error} </div>}
        </form>
      </main>
    );
  }
};

export default AuthForm;
