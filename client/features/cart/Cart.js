import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCartItemsAsync, deleteCartItemAsync } from "./cartSlice";
import  Checkout  from './Checkout'
const Cart = () => {
  const user = useSelector((state) => state.auth);
  const userCartItems = useSelector((state) => state.cartItems);
  // const guestCart = JSON.parse(window.localStorage.getItem("cart"));

  const dispatch = useDispatch();

  const [guestCart, setGuestCart] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  useEffect(() => {
    if (Object.keys(user.me).length !== 0) {
      dispatch(fetchAllCartItemsAsync(user.me.id));
    }
  }, [user]);
  // window.localStorage.removeItem("cart")
  console.log(userCartItems);

  const deleteCartItem = (id) => {
    if (user.me.id) {
      dispatch(deleteCartItemAsync(id));
    } else {
      let updatedGuestCart = JSON.parse(window.localStorage.getItem("cart"));
      updatedGuestCart = updatedGuestCart.filter(
        (product) => product.id !== id
      );
      window.localStorage.setItem("cart", JSON.stringify(updatedGuestCart));
      setGuestCart(updatedGuestCart);
    }
  };
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
                <p>Size: {cartItem.size}</p>
                <p>Type: {cartItem.productType}</p>
                <p>Price: {cartItem.price}</p>
                <p>Quantity: {cartItem.qty}</p>
                <button
                  onClick={() => {
                    deleteCartItem(cartItem.cartItemId);
                  }}
                >
                  Remove From Cart
                </button>
                <Checkout/>
              </div>
            ))}
      </div>
    );
  } else {
    console.log(guestCart);
    return (
      <div>
        {guestCart.length === 0
          ? ""
          : guestCart.map((cartItem) => (
              <div className="cartItem" key={cartItem.id}>
                <img src={cartItem.img} />
                <p>{cartItem.name}</p>
                <p>Size: {cartItem.size}</p>
                <p>Type: {cartItem.productType}</p>
                <p>Price: {cartItem.price}</p>
                <p>Quantity: {cartItem.qty}</p>
                <button
                  onClick={() => {
                    deleteCartItem(cartItem.id);
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            ))}
      </div>
    );
  }
};

export default Cart;
