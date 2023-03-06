import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import SingleProduct from "../features/products/SingleProduct";
import Products from "../features/products/Products";
import SingleUser from "../features/User/SingleUser";
import SingleOrder from "../features/Orders/SingleOrder";
import Cart from "../features/cart/Cart";
import Account from "../features/User/Account";
import EditAccount from "../features/User/EditAccount";
import Orders from "../features/User/orders/Orders";
/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const url = useLocation();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.me.id);

  useEffect(() => {
    if (url.pathname === "/") {
      navigate("/landing");
    }
  }, []);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(me());
  // }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/landing" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/account/:id" element={<Account name="login" />} />
          <Route
            path="/account/:id/information"
            element={<EditAccount name="login" />}
          />
          <Route
            path="/account/:id/myorders"
            element={<Orders userId={userId} name="login" />}
          />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/landing" element={<Home />} />

          {/* <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          /> */}
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/products/" element={<Products />} />

          <Route
            path="/users/:userId/orders/:orderid"
            element={<SingleOrder />}
          />

          <Route path="/users/:userId" element={<SingleUser />} />

          <Route path="/cart/" element={<Cart />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
