import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let db = openDatabase("foodxpress", "1.0", "database", 2 * 1024 * 1024);
    db.transaction(function (tx) {
      tx.executeSql(`INSERT INTO users  (username,password) VALUES (?,?)`, [
        username,
        password,
      ]);
    });

    history.push("/menu");
  };

  return (
    <div className="container-login d-flex justify-content-center align-items-center">
      <form action="" onSubmit={onSubmit}>
        <h3>Enter details</h3>
        <p className="alert">{error}</p>
        <label htmlFor="username">Username</label>
        <div className="form-group">
          <input
            type="name"
            name="username"
            id="username"
            className="form-control"
            required
            onChange={handleChange}
            value={username}
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required
            onChange={handleChange}
            value={password}
          />
        </div>
        <button className="btn btn-light">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
