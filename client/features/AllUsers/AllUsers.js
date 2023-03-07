import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectUsers,
  fetchAllUsersAsync,
  updateSingleUserAsync,
  deleteUserAsync,
} from "./allUsersSlice";

const AllUsers = () => {
  const allUsers = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersAsync());
  }, []);

  const changeUserType = (id, userType) => {
    console.log(id, userType);
    dispatch(updateSingleUserAsync({ id, userType }));
  };

  const deleteUser = (id) => {
    dispatch(deleteUserAsync(id));
  };

  return (
    <div id="allUsers">
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
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
                    value={user.userType}
                  >
                    <option>{user.userType}</option>
                    <option>
                      {user.userType === "USER" ? "ADMIN" : "USER"}
                    </option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
