import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const handleClick = () => {
    const userPath = "userPath";
    window.localStorage.setItem("userPath", userPath);
  };

  return (
    <>
      {/* <h1> YOU MUST MAKE A CHOICE</h1> */}
      <section id="login-admin" className="wrapper">
        <div className="portal-links wrapper">
          <ul className="admin-portal-links">
            <li>
              <Link to="/admin/dashboard">
                <h2>Admin Dashboard</h2>
              </Link>
            </li>
            <li>
              <Link to="/landing" onClick={handleClick}>
                <h2>User Dashboard</h2>
              </Link>
            </li>
          </ul>
        </div>

        {/* <h3>MUAHAHAHA</h3> */}
      </section>
    </>
  );
};

export default AdminLogin;
