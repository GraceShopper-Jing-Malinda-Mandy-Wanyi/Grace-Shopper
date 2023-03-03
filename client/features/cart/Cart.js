import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCartItemsAsync } from "./cartSlice";

const Cart = () => {
  const user = useSelector((state) => state.auth);
  const cartItems = user.me.id
    ? useSelector((state) => state.cartItems)
    : JSON.parse(window.localStorage.getItem("cart"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user.me).length !== 0) {
      dispatch(fetchAllCartItemsAsync(user.me.id));
    }
  }, [user]);

  return (
    <div>
      {cartItems.length === 0
        ? ""
        : cartItems.map((cartItem) => (
            <div className="cartItem" key={cartItem.id}>
              <img src={cartItem.img} />
              <p>{cartItem.name}</p>
              <p>{cartItem.size}</p>
              <p>{cartItem.type}</p>
              <p>{cartItem.price}</p>
              <p>{cartItem.qty}</p>
            </div>
          ))}
    </div>
  );
};

export default Cart;
