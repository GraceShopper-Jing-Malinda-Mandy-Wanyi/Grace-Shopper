import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
    return (
        <>
        <h1> YOU MUST MAKE A CHOICE</h1>
        <Link to="/admin/dashboard" >
            <h2>CLICK HERE FOR ADMIN DASHBOARD</h2>
        </Link>
        <Link to="/landing">
            <h2>CLICK HERE FOR USER DASHBOARD</h2>
        </Link>
       
        <h3>MUAHAHAHA</h3>
        </>
    )
}

export default AdminLogin