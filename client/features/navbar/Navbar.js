import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { authenticate } from "../../app/store";
import SearchBar from "../search/SearchBar";
import NavButton from "./NavButton";
// import { SearchProducts } from "../search/SearchProducts";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());

    if (window.localStorage.getItem("userPath")) {
      window.localStorage.removeItem("userPath");
    }
    navigate("/landing");
  };

  const mouseEnter = (event) => {
    event.target.nextElementSibling.classList.toggle("active");
  };

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

  useEffect(() => {
    if (
      user.me.userType === "ADMIN" &&
      !window.localStorage.getItem("userPath")
    ) {
      navigate("/admin/login");
    }
  }, [user]);

  // types of button names
  const buttons = ["allproducts", "wine", "beer", "spirit"];

  return (
    <>
      <header>
        <nav>
          <div id="nav-container">
            <div id="logo" className="wrapper">
              <Link to={"/landing"}>
                <img src="../wine-logo.png" alt="logo"></img>
                <h1>Drinky Drinks</h1>
              </Link>
            </div>

            <section className="search-login-cart">
              <div className="search-bar wrapper">
                <SearchBar />
              </div>
              <div id="login-signup-cart">
              {isLoggedIn ? (
                <div className="login-logout">
                  <Link to="/landing">Home</Link>
                  <Link to={`/account`}>Account</Link>
                  <button className="btn secondary-btn" type="button" onClick={logoutAndRedirectHome}>
                    Logout
                  </button>
                </div>
              ) : (
                  <div className="login-logout">
                    <div id="login-dropdown" onMouseEnter={mouseEnter}>
                      Login
                    </div>
                    <div id="login-dropdown-form" onMouseLeave={mouseLeave}>
                      <form className="gap-1" id="login-form" onSubmit={handleSubmit}>
                          <label htmlFor="username">
                            <small>Username</small>
                          </label>
                          <input name="username" type="text" />
                          <label htmlFor="password">
                            <small>Password</small>
                          </label>
                          <input name="password" type="password" />
                          <button className="btn primary-btn" type="submit">Log In</button>
                      </form>
                    </div>
                    <Link to="/signup">Sign Up</Link>
                  </div>
                )}

                <div className="cart-container">
                  <Link to="/cart">
                    <button className="btn primary-btn">
                      <span className="cart-icon">&#128722;</span>
                    </button>
                  </Link>
                </div>
              </div>
            </section>

            {/* mapping each button onto nav bar
              passing props (type={button}) into NavButton commponent */}
            <div className="navlinks-container">
              {buttons.map((button, index) => (
                <NavButton key={index} type={button} />
              ))}
            </div>
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
