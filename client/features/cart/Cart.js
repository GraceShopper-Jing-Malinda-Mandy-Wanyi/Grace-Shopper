import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCartItemsAsync } from "./cartSlice";

const Cart = () => {
  const user = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cartItems);
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
              <img src={cartItem.product.img} />
              <p>{cartItem.product.name}</p>
              <p>{cartItem.product.size}</p>
              <p>{cartItem.product.type}</p>
              <p>{cartItem.product.price}</p>
              <p>{cartItem.qty}</p>
            </div>
          ))}
    </div>
  );
};

export default Cart;
