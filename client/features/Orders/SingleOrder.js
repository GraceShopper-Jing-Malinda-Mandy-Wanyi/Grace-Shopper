import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleOrderAsync, selectSingleOrder } from "./singleOrderSlice";
import { useParams } from "react-router-dom";

const SingleOrder = () => {
  const dispatch = useDispatch();
  const { userId, orderId } = useParams();
  const singleOrder = useSelector(selectSingleOrder);
  // const { name, qty } = singleOrder;
  console.log(singleOrder);
  console.log(userId);
  console.log(orderId);
  
  useEffect(() => {
    dispatch(fetchSingleOrderAsync(userId, orderId));
  }, [dispatch]);
  return (
    <div id="single-order" className="column">
      <div id="single-order-detail" className="row">
        <div className="column mr1">
          {/* <p>{name}</p> */}
          {/* <p>{qty}</p> */}
        </div>
      </div>
      <hr />
    </div>
  );
};
export default SingleOrder;
