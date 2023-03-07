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
    <div>hello</div>
    /* <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Drink</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.length && quantity && quantity.length ? (
            cart.map((product, index) => (
              <tr key={index + 1}>
                <td>{product.name}</td>
                <td>{product.productType}</td>
                <td>${product.price}</td>
                <td>{quantity[index].qty}</td>
                <td>
                  $
                  {Number.parseFloat(
                    product.price * quantity[index].qty * (1 + 0.008)
                  ).toFixed(2)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>It seems you haven't made any purchases yet</td>
            </tr>
          )}
        </tbody>
      </table> */
  );
};

export default SingleOrder;
