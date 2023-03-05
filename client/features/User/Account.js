import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleUser, selectSingleUser } from "./singleUserSlice";

const Account = () => {
  const dispatch = useDispatch();
  const userId = useParams().id;
  console.log("USER ID", userId);
  const user = useSelector(selectSingleUser);

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch, userId]);

  return (
    <>
      <section>
        <ul>
          <li>
            <Link to={`/account/${userId}/information`}>Information</Link>
          </li>
          <li>
            <Link to={`/account/${userId}/myorders`}>Orders</Link>
          </li>
          <li>
            <Link to={`/account/${userId}/delete`}>Delete Account</Link>
          </li>
        </ul>
        <div>
          <h1>Hi, {user.firstName} {user.lastName}</h1>
          <h1>
            From your account dashboard you can view your recent orders, manage
            your shipping and billing adresses, and edit your password and
            account details.
          </h1>
          <h1>Thank you for choosing to shop with us!</h1>
        </div>
      </section>
    </>
  );
};

export default Account;
