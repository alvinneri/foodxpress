import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import OrderItems from "./orderitem";

const Order = () => {
  const [username, setUsername] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const username1 = localStorage.getItem("session");
    setUsername(username);

    let db = openDatabase("foodxpress", "1.0", "database", 2 * 1024 * 1024);
    db.transaction(function (tx) {
      tx.executeSql(
        `SELECT * FROM orders WHERE username =?`,
        [username1],
        function (t, data) {
          for (let i = 0; i < data.rows.length; i++) {
            setOrders((orders) => orders.concat(data.rows[i]));
          }
        }
      );
    });
  }, []);

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <OrderItems key={item.id} item={item} />
          ))}
        </tbody>
        <Link to="/menu" className="btn btn-success my-2 float-left">
          Go Back
        </Link>
      </table>
    </div>
  );
};

export default Order;
