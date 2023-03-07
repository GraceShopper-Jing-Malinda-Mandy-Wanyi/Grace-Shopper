import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../auth/authSlice";

const EditAccount = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.auth);
  const handleEditUser = (e) => {
    e.preventDefault();
    if (
      e.target.username.value &&
      e.target.password.value &&
      e.target.firstName.value &&
      e.target.lastName.value &&
      e.target.email.value
    ) {
      dispatch(
        updateUser({
          id: me.id,
          username: e.target.username.value,
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
        })
      );
    } else {
      alert("PLEASE FILL IN ALL BLANKS, THANK YOU :)");
    }
  };

  return (
    <>
       <div className="wrapper">
        <section className="container">
          <span>
            <p>Username:</p>
            <h1>{me.username}</h1>
          </span>
          <span>
            <p>First Name:</p>
            <h1>{me.firstName}</h1>
          </span>
          <span>
            <p>Last Name:</p>
            <h1>{me.lastName}</h1>
          </span>
          <span>
            <p>E-mail:</p>
            <h1>{me.email}</h1>
          </span>
        </section>
        <hr />

       <section className="container">
        <h1>Edit Information</h1>
        <form className="flex-column gap-1" onSubmit={handleEditUser}>
          <label htmlFor="user name">
            <small>Username:</small>
          </label>
          <input type="text" name="username" />
          <label htmlFor="password">
            <small>Password:</small>
          </label>
          <input type="password" name="password" />
          <label htmlFor="first name">
            <small>First Name:</small>
          </label>
          <input type="text" name="firstName" />
          <label htmlFor="last name">
            <small>Last Name:</small>
          </label>
          <input type="text" name="lastName" />
          <label htmlFor="email">
            <small>E-mail:</small>
          </label>
          <input type="email" name="email" />
          <button className="btn primary-btn" type="submit">Save</button>
        </form>
      </section>
      </div>
    </>
  );
};

export default EditAccount;
