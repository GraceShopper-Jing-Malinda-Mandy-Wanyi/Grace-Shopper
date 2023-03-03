import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCartItemsAsync } from "./cartSlice";

const Cart = () => {
  const user = useSelector((state) => state.auth);
  const userCartItems = useSelector((state) => state.cartItems);
  const guestCart = JSON.parse(window.localStorage.getItem("cart"));

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user.me).length !== 0) {
      dispatch(fetchAllCartItemsAsync(user.me.id));
    }
  }, [user]);
  //   window.localStorage.removeItem("cart")
  console.log(userCartItems);

  if (user.me.id) {
    return (
      <div>
        {userCartItems.length === 0
          ? ""
          : userCartItems.map((cartItem) => (
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
  } else {
    return (
      <div>
        {guestCart.length === 0
          ? ""
          : guestCart.map((cartItem) => (
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
  }
};

export default Cart;
