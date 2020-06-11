import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
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
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS 'users' (id AUTO_INCREMENT, username, password , PRIMARY KEY(id))"
      );
      tx.executeSql(
        `SELECT * FROM users WHERE username =?`,
        [username],
        function (t, data) {
          if (data.rows.length > 0) {
            if (password == data.rows[0].password) {
              localStorage.setItem("session", username);
              localStorage.setItem("refresh", 1);
              history.push("/menu");
            } else {
              setError("Invalid Password");
            }
          } else {
            setError("Invalid Username");
          }
        }
      );
    });
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
        <button className="btn btn-light">Login</button>
      </form>
    </div>
  );
};

export default Login;
