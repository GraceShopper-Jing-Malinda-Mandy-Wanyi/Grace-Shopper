import React from "react";

const NavLinks = () => {
  return (
    <div className="navlinks-container">
      <li className="dropdown">
        <button className="dropbtn">All Products</button>
      </li>
      <li className="dropdown">
        <button className="dropbtn">Wine</button>
        {/* <div className="dropdown-content">
          <a href="#">Cabernet</a>
          <a href="#">Pinot Noir</a>
          <a href="#">Pinot Grigio</a>
          <a href="#">Moscato</a>
          <a href="#">Malbec</a>
        </div> */}
      </li>
      <li className="dropdown">
        <button className="dropbtn">Beer</button>
        {/* <div className="dropdown-content">
          <a href="#">IPA</a>
          <a href="#">Lager</a>
          <a href="#">Cider</a>
          <a href="#">Stout</a>
          <a href="#">Ale</a>
        </div> */}
      </li>
      <li className="dropdown">
        <button className="dropbtn">Spirit</button>
        {/* <div className="dropdown-content">
          <a href="#">Vodka</a>
          <a href="#">Tequila</a>
          <a href="#">Gin</a>
          <a href="#">Whiskey</a>
          <a href="#">Mixers</a>
        </div> */}
      </li>
    </div>
  );
};

export default NavLinks;
