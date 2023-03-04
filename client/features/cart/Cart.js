import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCartItemsAsync, deleteCartItemAsync, updateQtyAsync } from "./cartSlice";

const Cart = () => {
  const user = useSelector((state) => state.auth);
  const userCartItems = useSelector((state) => state.cartItems);

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

  const updateQty = (event, id) => {
    console.log(id)
    dispatch(updateQtyAsync({cartItemId: id, qty: event.target.value }))

  }

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
                <div>
                  <label>Quantity:</label>
                  <select name="qty" onChange={event => {updateQty(event, cartItem.cartItemId)}}>
                    <option value={cartItem.qty}>{cartItem.qty}</option>
                    {new Array(100).fill(1).map((number, index) => {
                      if(index + 1 === cartItem.qty){
                        return ""
                      } else {
                        return (<option value={index + 1}>{index + 1}</option>)
                      }
                    })}
                  </select>
                </div>
                <button
                  onClick={() => {
                    deleteCartItem(cartItem.cartItemId);
                  }}
                >
                  Remove From Cart
                </button>
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
