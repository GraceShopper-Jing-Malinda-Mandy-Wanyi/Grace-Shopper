import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavBarButton = (props) => {
  // using props info to name buttons
  return (
    <>
      <li className="dropdown">
        <Link to={`/products?type=${props.type}`}>
          <button className="dropbtn" value={props.type}>
            {props.type}
          </button>
        </Link>
      </li>
    </>
  );
};

export default AdminNavBarButton;
