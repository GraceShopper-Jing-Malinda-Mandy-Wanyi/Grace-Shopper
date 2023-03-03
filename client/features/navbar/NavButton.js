import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavButton = (props) => {
  console.log(props)
  let name;
  if (props.type === "allproducts") {
    name = "All Products";
  } else {
    name = props.type[0].toUpperCase() + props.type.slice(1);
  }
  return (
    <>
      <li className="dropdown">
        <Link to={`/products?type=${props.type}`}>
          <button className="dropbtn">{name}</button>
        </Link>
      </li>
    </>
  );
};

export default NavButton;
