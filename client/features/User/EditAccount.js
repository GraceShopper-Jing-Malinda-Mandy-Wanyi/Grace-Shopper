import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleUser,
  updateUser,
  selectSingleUser,
} from "./singleUserSlice";

const EditAccount = () => {
  const dispatch = useDispatch();
  const userId = useParams().id;
  const user = useSelector(selectSingleUser);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch]);

  useEffect(() => {
    setUserName(user.username);
    setUserPassword(user.password);
    setFirstName(user.userName);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  }, [user]);

  const handleEditUser = async (e) => {
    e.preventDefault();
    await dispatch(
      updateUser({
        id: user.id,
        username: userName,
        password: userPassword,
        firstName,
        lastName,
        email,
      })
    );
    await dispatch(fetchSingleUser(userId));
  };

  return (
    <>
      <div className="wrapper">
        <section className="container">
          <span>
            <p>Username:</p>
            <h1>{user.username}</h1>
          </span>
          <span>
            <p>First Name:</p>
            <h1>{user.firstName}</h1>
          </span>
          <span>
            <p>Last Name:</p>
            <h1>{user.lastName}</h1>
          </span>
          <span>
            <p>E-mail:</p>
            <h1>{user.email}</h1>
          </span>
        </section>
        <hr />
        <section className="container">
          <h1>Edit Information</h1>
          <form className="flex-column gap-1" onSubmit={handleEditUser}>
            <label htmlFor="user name">
              <small>Username:</small>
            </label>
            <input
              type="text"
              name="user name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="password">
              <small>Password:</small>
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <label htmlFor="first name">
              <small>First Name:</small>
            </label>
            <input
              type="text"
              name="first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="last name" name="last name">
              <small>Last Name:</small>
            </label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor="email" name="email">
              <small>E-mail:</small>
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn primary-btn" type="submit">Save</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default EditAccount;
