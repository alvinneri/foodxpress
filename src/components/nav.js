import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {
  const [links, setLinks] = useState("");
  const history = useHistory();
  const [status, setStatus] = useState("");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("session");
    localStorage.removeItem("refresh");

    setStatus("logout");
    history.push("/");
  };

  useEffect(() => {
    if (localStorage.getItem("session")) {
      setStatus("login");
      setLinks(
        <div>
          <li>
            <Link to="/" className="btn btn-light">
              Welcome {localStorage.getItem("session")}
            </Link>
            <button className="btn btn-dark mx-1" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </div>
      );
    } else {
      setStatus("logout");
      setLinks(
        <div>
          <li>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>

            <Link to="/signup" className="btn btn-light mx-1 signup">
              Signup
            </Link>
          </li>
        </div>
      );
    }
  }, [status]);

  return (
    <div className="container-nav">
      <div className="margin d-sm-flex justify-content-sm-between align-items-center">
        <Link to="/" className="logo">
          foodxpress
        </Link>
        <ul className="d-sm-flex text-center">{links}</ul>
      </div>
    </div>
  );
};

export default Nav;
