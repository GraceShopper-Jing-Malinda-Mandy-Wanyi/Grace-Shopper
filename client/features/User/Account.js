import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleUser, selectSingleUser } from "./singleUserSlice";
import { authenticate } from "../auth/authSlice";

const Account = ({name}) => {
  const {me} = useSelector(state => state.auth);

  return (
    <>
      <section className="container">
        <ul>
          <li>
            <Link to={`/account/information`}>Information</Link>
          </li>
          <li>
            <Link to={`/account/myorders`}>Orders</Link>
          </li>
        </ul>
         <div className="container">
          <h1>Hi, {me.firstName} {me.lastName}</h1>
          <h1>
            From your account dashboard you can view your recent orders, manage
            your shipping and billing address, and edit your password and
            account details.
          </h1>
          <h1>Thank you for choosing to shop with us!</h1>
        </div>
      </section>
    </>
  );
};

export default Account;