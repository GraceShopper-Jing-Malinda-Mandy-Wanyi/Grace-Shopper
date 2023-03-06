import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavBarButton = (props) => {
  // using props info to name buttons
  let pathname;

  if (props.type.includes(" ")) {
    const index = props.type.indexOf(" ");
    pathname = props.type.slice(0, index) + props.type.slice(index + 1);
    console.log(pathname)
    pathname = pathname.toLowerCase();
    console.log(pathname)
  } else {
    pathname = props.type.toLowerCase();
  }

  return (
    <>
      <li className="dropdown">
        <Link to={`/admin/${pathname}`}>
          <button className="dropbtn" value={props.type}>
            {props.type}
          </button>
        </Link>
      </li>
    </>
  );
};

export default AdminNavBarButton;
