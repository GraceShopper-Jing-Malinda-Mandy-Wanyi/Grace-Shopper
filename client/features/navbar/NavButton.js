import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../products/productsSlice";
import { Link } from "react-router-dom";

const NavButton = (props) => {
  const dispatch = useDispatch();

  // using props info to name buttons
  let name;
  if (props.type === "allproducts") {
    name = "All Products";
  } else {
    name = props.type[0].toUpperCase() + props.type.slice(1);
  }

  // dispatches fetchAllProducts with type info into productsSlice
  const clickHandler = (event) => {
    dispatch(fetchAllProducts({type: event.target.value}));
  };

  return (
    <>
      <li className="dropdown">
        <Link to={`/products?type=${props.type}`}>
          <button onClick={clickHandler} className="dropbtn" value={props.type}>
            {name}
          </button>
        </Link>
      </li>
    </>
  );
};

export default NavButton;
