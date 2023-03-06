import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {

const handleClick = () => {
const userPath = "userPath"
window.localStorage.setItem("userPath", userPath)
}

    return (
        <>
        <h1> YOU MUST MAKE A CHOICE</h1>
        <Link to="/admin/dashboard" >
            <h2>CLICK HERE FOR ADMIN DASHBOARD</h2>
        </Link>
        <Link to="/landing" onClick={handleClick}>
            <h2>CLICK HERE FOR USER DASHBOARD</h2>
        </Link>
       
        <h3>MUAHAHAHA</h3>
        </>
    )
}

export default AdminLogin