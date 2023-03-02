import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUsers, fetchAllUsersAsync } from "./AllUsersSlice";

const AllUsers = () => {
  const allUsers = useSelector(selectUsers);

  return (
    <div id="allUsers">
      {allUsers && allUsers.length
        ? allUsers.map((user) => (
            <Link to={`/users/${user.id}`} key={`All Users: ${user.id}`}>
              <div className="user-row">
                <img src={user.imageUrl} />
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default AllUsers;
