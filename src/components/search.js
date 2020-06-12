import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Menu from "./menu";

const Search = () => {
  const history = useHistory();
  const [q, setQ] = useState("");
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const [hide, setHide] = useState("hide");

  const handleChange = (e) => {
    setQ(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue(q);
  };

  useEffect(() => {
    setUsername(localStorage.getItem("session"));
    if (localStorage.getItem("session") == "Admin") {
      setHide("");
    }
  }, []);

  return (
    <div className="container-menu">
      <div className="margin row mt-5 pt-5">
        <div className="container-aside col-md-3">
          <div className="card">
            <div className="card-header">
              <p>Find your order here!</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <form onSubmit={onSubmit}>
                  <input
                    placeholder="Search"
                    autoComplete="off"
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    value={q}
                  />
                </form>
              </li>
              <li className="list-group-item">
                <Link to="/about" className="order-link">
                  About
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="order" className="order-link">
                  Your Orders
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/purchaseorders" className="order-link">
                  Purchased Orders
                </Link>
              </li>
              <li className={`list-group-item ${hide}`}>
                <Link to="/admin" className="order-link">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-content col-md-9">
          <Menu q={value} />
        </div>
      </div>
    </div>
  );
};

export default Search;
