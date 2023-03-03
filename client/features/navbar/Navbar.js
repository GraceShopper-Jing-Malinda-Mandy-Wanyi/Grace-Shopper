import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { authenticate } from "../../app/store";
import SearchBar from "../search/SearchBar";
import NavLinks from "./NavLinks";
// import { SearchProducts } from "../search/SearchProducts";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  const mouseEnter = (event) => {
    event.target.nextElementSibling.classList.toggle("active")
  }


  const mouseLeave = (event) => {
    event.target.classList.remove("active");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = "login";
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };

  return (
    <div>
      <nav>
        <div id="nav-container">
          <div id="company-name">
            <h1>Drinky Drinks</h1>
          </div>

          <div id="search-bar-login-signup">
            <div className="search-bar">
            <SearchBar/>
            </div>

            <div id="login-signup-cart">
              {isLoggedIn ? (
                <div className="login-logout">
                  <Link to="/home">Home</Link>
                  <button type="button" onClick={logoutAndRedirectHome}>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="login-logout">
                  <div id="login-dropdown" onMouseEnter={mouseEnter}>
                    Login
                  </div>
                  <div id="login-dropdown-form" onMouseLeave={mouseLeave}>
                    <form id="login-form" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="username">
                          <small>Username</small>
                        </label>
                        <input name="username" type="text" />
                      </div>
                      <div>
                        <label htmlFor="password">
                          <small>Password</small>
                        </label>
                        <input name="password" type="password" />
                      </div>
                      <div>
                        <button type="submit">Log In</button>
                      </div>

                    </form>
                  </div>
                  <Link to="/signup">Sign Up</Link>
                </div>
              )}

              <div className="cart-container">
                <Link to="/cart">
                  <button className="cart-btn">
                    <span className="cart-icon">&#128722;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <NavLinks />
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
