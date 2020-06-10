import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Menu from "./menu";

const Search = () => {
  const history = useHistory();
  const [q, setQ] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setQ(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue(q);
  };

  return (
    <div className="container-menu">
      <div className="margin row">
        <div className="container-aside col-md-4">
          <p>Find your order here!</p>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                placeholder="Search"
                autoComplete="off"
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                value={q}
              />
            </div>
          </form>
        </div>
        <div className="container-content col-md-8 d-flex flex-wrap">
          <Menu q={value} />
        </div>
      </div>
    </div>
  );
};

export default Search;
