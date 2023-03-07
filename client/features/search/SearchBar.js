import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../products/productsSlice";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAllProducts({ search: e.target.search.value }));
    navigate(`products?search=${e.target.search.value}`);
  };

  return (
    <div>
      <form className="flex-row gap-1" onSubmit={handleSearch}>
        <input type="text" placeholder="Search products" name="search" />
        <button className="btn primary-btn" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
