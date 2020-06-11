import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container-nav">
      <div className="margin d-md-flex justify-content-md-between">
        <div className="logo">foodxpress</div>
        <ul className="d-flex">
          <li>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
