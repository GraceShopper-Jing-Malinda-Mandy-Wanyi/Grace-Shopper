import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllOrders, fetchAllOrdersAsync } from "./allOrdersSlice";

const AllOrders = () => {
  const user = useSelector(state => state.auth)
  const allOrders = useSelector(selectAllOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrdersAsync());
  }, []);

 return (
    <div id="allOrders">
      {allOrders && allOrders.length
        ? allOrders.map((order) => (
            <Link to={`/users/${user.id}`} key={`All Users: ${user.id}`}>
              <div className="user-row">
                <p>{order.id}</p>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
}; 

export default AllOrders;