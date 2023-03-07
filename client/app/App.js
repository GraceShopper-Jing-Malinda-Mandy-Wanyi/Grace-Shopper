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

  //checks to see if you have a token in local storage -> if you do, the implication is that you logged in without logging out -> this will log you back in
  if (
    window.localStorage.getItem("token") &&
    Object.keys(user.me).length === 0
  ) {
    dispatch(me());
  }

  // stores guest cart in local storage
  // only creates cart one time when guest user lands on page
  const guestCart = [];
  if (!window.localStorage.getItem("cart")) {
    window.localStorage.setItem("cart", JSON.stringify(guestCart));
  }

  console.log(useLocation())

  //guest{}
  //user
//   {
//     "id": 28,
//     "username": "alex",
//     "password": "$2b$05$/DNXASGigN8LbqAqoTsbm.4cLhFgie4gxkHCJCMHHi1oDhp6Dx.uG",
//     "firstName": "alex",
//     "lastName": "alex",
//     "email": "alex@alex.com",
//     "userType": "USER",
//     "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fblack-easy%2F512%2F538474-user_512x512.png&f=1&nofb=1&ipt=10beadd4d1be7642377ed35d82672cdf8ea52501ac8750aa1f2ea40843377fe6&ipo=images",
//     "createdAt": "2023-03-03T20:47:58.179Z",
//     "updatedAt": "2023-03-03T20:47:58.179Z"
// }

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
