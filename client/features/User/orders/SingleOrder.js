import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUserOrdersCartItems, selectUserOrders } from "./userOrdersSlice";

const SingleOrder = () => {
  const dispatch = useDispatch();
  const userId = useParams().id;
  const orderId = useParams().orderId;
  const cartItems = useSelector(selectUserOrders);
  console.log(userId, orderId)

  useEffect(() => {
    dispatch(fetchUserOrdersCartItems({userId: userId, id: orderId}));
  }, [dispatch]);

  return (
    <main className="container flex-column-start">
      <h1>First Name</h1>
      <h1>Last Name</h1>
      <h1>Shipping Address</h1>
      <h1>Cart Goes Here</h1>
    </main>

  );
};

export default SingleOrder;
