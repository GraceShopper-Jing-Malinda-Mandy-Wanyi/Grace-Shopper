import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllCartItemsAsync,
  deleteCartItemAsync,
  updateQtyAsync,
} from "./cartSlice";

const Cart = () => {
  const user = useSelector((state) => state.auth);
  const userCartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  const [guestCart, setGuestCart] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  // useEffect(() => {
  //   console.log("HIT")
  //   if (Object.keys(user.me).length !== 0 && userCartItems.length > 0) {
  //     dispatch(fetchAllCartItemsAsync(user.me.id));
  //   }
  // }, [user]);

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
    if (user.me.id) {
      dispatch(updateQtyAsync({ cartItemId: id, qty: event.target.value }));
    } else {
      let updatedGuestCart = JSON.parse(window.localStorage.getItem("cart"));
      // map to swap out the product and replace w/ updated qty
      updatedGuestCart = updatedGuestCart.map((product) => {
        if (product.id !== event.productId) {
          return product;
        } else {
          product.qty = event.qty;
          return product;
        }
      });
      window.localStorage.setItem("cart", JSON.stringify(updatedGuestCart));
      setGuestCart(updatedGuestCart);
    }
  };

  // console.log(userCartItems);
  if (user.me.id) {
    return (
      <div>
        {userCartItems.length === 0
          ? ""
          : userCartItems.map((cartItem) => (
              <div className="cartItem" key={cartItem.id}>
                <Link to={`/products/${cartItem.id}`}>
                  <img src={cartItem.img} />
                  <p>{cartItem.name}</p>
                </Link>
                <p>Size: {cartItem.size}</p>
                <p>Type: {cartItem.productType}</p>
                <p>Price: {cartItem.price}</p>
                <div>
                  <label>Quantity:</label>
                  <select
                    name="qty"
                    onChange={(event) => {
                      updateQty(event, cartItem.cartItemId);
                    }}
                  >
                    <option value={cartItem.qty}>{cartItem.qty}</option>
                    {new Array(100).fill(1).map((number, index) => {
                      if (index + 1 === cartItem.qty) {
                        return "";
                      } else {
                        return (
                          <option value={index + 1} key={index + 1}>
                            {index + 1}
                          </option>
                        );
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
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
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
                <Link to={`/products/${cartItem.id}`}>
                  <img src={cartItem.img} />
                  <p>{cartItem.name}</p>
                </Link>
                <p>Size: {cartItem.size}</p>
                <p>Type: {cartItem.productType}</p>
                <p>Price: {cartItem.price}</p>
                <div>
                  <label>Quantity:</label>
                  <select
                    name="qty"
                    onChange={(event) => {
                      updateQty({
                        qty: event.target.value,
                        productId: cartItem.id,
                      });
                    }}
                  >
                    <option value={cartItem.qty}>{cartItem.qty}</option>
                    {new Array(100).fill(1).map((number, index) => {
                      if (index + 1 === Number(cartItem.qty)) {
                        return "";
                      } else {
                        return (
                          <option value={index + 1} key={index + 1}>
                            {index + 1}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>
                <button
                  onClick={() => {
                    deleteCartItem(cartItem.id);
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            ))}
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
