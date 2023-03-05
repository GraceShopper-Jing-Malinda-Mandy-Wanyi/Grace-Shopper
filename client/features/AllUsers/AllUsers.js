import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectUsers, fetchAllUsersAsync } from "./allUsersSlice";

const AllUsers = () => {
  const allUsers = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(allUsers);

  useEffect(() => {
    dispatch(fetchAllUsersAsync());
  }, []);

  const changeUserType = (id, userType) => {
    console.log(id, userType);
  };

  return (
    <div id="allUsers">
      <table>
        <tr>
          <th>User Id</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>User Type</th>
        </tr>
        {allUsers.map((user) => (
          <>
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <select
                  onChange={(event) => {
                    changeUserType(user.id, event.target.value);
                  }}
                >
                  <option>{user.userType}</option>
                  <option>{user.userType === "USER" ? "ADMIN" : "USER"}</option>
                </select>
              </td>
              <td>
              <button>Delete</button>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default AllUsers;
