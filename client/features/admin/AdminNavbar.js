import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import AdminNavBarButton from "./AdminNavBarButton";
import SearchBar from "../search/SearchBar";

const AdminNavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/landing");
  };

  const buttons = ["All Users", "Inventory", "All Orders"];

  return (
    <header>
      <nav>
        <div id="nav-container">
          <div id="logo">
            <Link to={"/landing"}>
              <img src="../images/logo.jpg" alt="logo"></img>
              <h1>Happy Hour</h1>
            </Link>
          </div>

          <div id="login-signup-cart">
            <div className="wrapper">
              <Link to="/home">Home</Link>
              <button
                className="btn secondary-btn"
                type="button"
                onClick={logoutAndRedirectHome}
              >
                Logout
              </button>
            </div>
            <div className="wrapper">
              <div className="search-bar">
                <SearchBar />
              </div>
            </div>
          </div>

          {/* mapping each button onto nav bar
                passing props (type={button}) into NavButton commponent */}
          <div className="navlinks-container">
            {buttons.map((button, index) => (
              <AdminNavBarButton key={index} type={button} />
            ))}
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default AdminNavBar;
