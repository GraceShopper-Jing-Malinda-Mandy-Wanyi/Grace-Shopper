import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleOrder, fetchSingleOrderAsync } from "./singleUserSlice";

const SingleOrder = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const singleOrder = useSelector(selectSingleOrder);
  const { name, quantity } = singleOrder;

  useEffect(() => {
    dispatch(fetchSingleOrderAsync(userId));
  }, [dispatch]);

  return (
    <div id="single-order" className="column">
      <div id="single-order-detail" className="row">
        <div className="column mr1">
          <p>{name}</p>
          <p>{quantity}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleOrder;