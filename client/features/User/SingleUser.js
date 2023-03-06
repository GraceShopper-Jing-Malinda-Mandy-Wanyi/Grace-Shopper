import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleUser, fetchSingleUserAsync, fetchSingleUserOrders } from "./singleUserSlice";
import { Link, useParams } from "react-router-dom";


const SingleUser = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const singleUser = useSelector(selectSingleUser);
    // const { firstName, lastName, username, email, img } =
    //   singleUser;
      console.log(singleUser);

    useEffect(() => {
      // dispatch(fetchSingleUserAsync(userId));
      console.log(dispatch(fetchSingleUserOrders(userId)))
    }, [dispatch, userId]);

    //Need to add in order history after email JSX
    
    return (
    <div id="single-user" className="column">
      <div id="single-user-detail" className="row">
        <div className="column mr1">
        {/* <img src={img} />
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{username}</p>
          <p>{email}</p>
          <Link to={`/orders/${order.id}`}>
          <p>Order History</p>
          </Link> */}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleUser;