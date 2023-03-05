import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleUser, selectSingleUser } from "../User/singleUserSlice";
import { fetchAllCartItemsAsync, cartItems } from "../cart/cartSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const userId = useParams().id;
  const user = useSelector(selectSingleUser);
  const quantity = user.cartItems;
  const cart = useSelector(cartItems);
  // console.log("useSelector(selectSingleUser)", user.cartItems);
  // console.log("useSelector(cartItems)", cart);
  // console.log("quantity", quantity);

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
    dispatch(fetchAllCartItemsAsync(userId));
  }, [dispatch]);

  return (
    <>
      {/* {userOrders && userOrders.length > 0 ? (userOrders.map((order) => {
          <li key={order.id}>
            <h1>{order.firstName}</h1>
            <h1>{order.lastName}</h1>
          </li>
        })): <h1>It seems you have not made any purchases yet.</h1>} */}
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart && quantity ? (
            cart.map((product, index) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{quantity[index].qty}</td>
                <td>{Number.parseFloat(product.price * quantity[index].qty * (1 + 0.008)).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <td>It seems you haven't made any purchases yet</td>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Orders;
