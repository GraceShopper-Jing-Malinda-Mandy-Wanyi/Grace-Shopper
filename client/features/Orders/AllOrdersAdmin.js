import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrdersAdminAsync, selectAllOrders } from "./allOrdersSlice";

const AllOrdersAdmin = () => {
  const orders = useSelector(selectAllOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrdersAdminAsync());
  }, []);

  return (
    <div id="allOrdersAdminContainer">
      <div id="allOrdersAdmin">
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Shipping Address</th>
              <th>User Id</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.firstName}</td>
                  <td>{order.lastName}</td>
                  <td>{order.address}</td>
                  <td>{order.userId}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrdersAdmin;
