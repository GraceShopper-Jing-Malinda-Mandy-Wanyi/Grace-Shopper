import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { selectProducts, fetchProductType } from "../products/productsSlice";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [products, setProducts] = useState([]);
  const allProducts = useSelector(selectProducts);

  const dispatch = useDispatch();

  // useEffect

  const handleFilterProduct = (event) => {
    console.log(event.target.value)
    if (event.target.value === "wine") {
      const filterByWine = allProducts.filter((product) => product.productType === "wine");
      setProducts(filterByWine);
      dispatch(fetchProductType(event.target.value));

    } else if (event.target.value === "beer") {
      // console.log(allProducts.filter((product) => product.productType === "beer"));

    } else {
      // console.log(allProducts.filter((product) => product.productType === "spirit"));

    }
  };

  return (
    <div className="navlinks-container">
      <li className="dropdown">
        <Link to="/products">
        <button className="dropbtn">All Products</button>
        </Link>
      </li>
      <li className="dropdown">
        <Link to="/products/type/wine">
          <button className="dropbtn" onClick={(event) => handleFilterProduct(event)} value="wine">Wine</button>
        </Link>
      </li>

      <li className="dropdown">
        <button className="dropbtn" onClick={() => handleFilterProduct()} value="beer">Beer</button>
      </li>
      <li className="dropdown">
        <button className="dropbtn" onClick={() => handleFilterProduct()} value="spirit">Spirit</button>
      </li>
    </div>
  );
};

export default NavLinks;
