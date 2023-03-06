import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AdminNavBar from "./AdminNavbar";
import AllUsers from "../AllUsers/AllUsers"
import AllOrders from "../Orders/AllOrders"

const AdminRoutes = () => {
  const pathname = useLocation().pathname;

  if (pathname.includes("login")) {
    return <AdminLogin />;
  } else {
    console.log("hello")
    return (
      <div>
        <AdminNavBar />
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/allusers" element={<AllUsers />} />
          <Route path="/admin/allorders" element={<AllOrders />} />
          <Route path="/admin/inventory" element={<AdminDashboard />} />
          <Route path="*" element={<AdminDashboard />} />
        </Routes>
      </div>
    );
  }
};

export default AdminRoutes;
