import React from "react";
import { me } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useLocation} from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import AdminRoutes from "../features/admin/AdminRoutes";

const App = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname

   // stores guest cart in local storage
  // only creates cart one time when guest user lands on page
  const guestCart = [];
  if (!window.localStorage.getItem("cart")) {
    window.localStorage.setItem("cart", JSON.stringify(guestCart));
  }

  //checks to see if you have a token in local storage -> if you do, the implication is that you logged in without logging out -> this will log you back in
  if (
    window.localStorage.getItem("token") &&
    Object.keys(user.me).length === 0
  ) {
    dispatch(me());
  }

  console.log(useLocation())

  return (
    pathname.includes("admin") && user.me.userType === "ADMIN" ?
    <div>
      <AdminRoutes/>
    </div> :
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
