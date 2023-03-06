import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import AdminNavBarButton from "./AdminNavBarButton";


const AdminNavBar = () => {
    const navigate = useNavigate();
    const logoutAndRedirectHome = () => {
        dispatch(logout());
        navigate("/login");
      };

    const buttons = ["All Users", "Inventory", "All Orders"]

    return (<div>
        <nav>
          <div id="nav-container">
            <div id="company-name">
              <Link to={"/landing"}>
                <h1>Drinky Drinks</h1>
              </Link>
            </div>
  
            <div id="login-signup-cart">
                  <div className="login-logout">
                    <Link to="/home">Home</Link>
                    <button type="button" onClick={logoutAndRedirectHome}>
                      Logout
                    </button>
                  </div>
            </div>
{/* 
            <div id="search-bar-login-signup">
              <div className="search-bar">
                <SearchBar />
              </div>
  
              
            </div> */}
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
      </div>)
}

export default AdminNavBar