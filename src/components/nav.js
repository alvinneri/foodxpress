import React from "react";

const Nav = () => {
  return (
    <div className="container-nav">
      <div className="margin d-md-flex justify-content-md-between ">
        <div className="logo">foodxpress</div>
        <ul className="d-flex ">
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
