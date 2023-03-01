import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleUser, fetchSingleUserAsync } from "./singleUserSlice";

const SingleUser = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const singleUser = useSelector(selectSingleUser);
    const { firstName, lastName, username, email, img } =
      singleUser;

    useEffect(() => {
      dispatch(fetchSingleUserAsync(userId));
    }, [dispatch]);

    //Need to add in order history after email
    
    return (
    <div id="single-user" className="column">
      <div id="single-user-detail" className="row">
        <div className="column mr1">
        <img src={img} />
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleUser;