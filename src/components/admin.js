import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import AdminItems from "./adminitems";

const PurchasedOrders = () => {
  const [username, setUsername] = useState("");
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const username1 = localStorage.getItem("session");
    setUsername(username);
    console.log(username1);

    if (username1 != "Admin") {
      history.push("/menu");
    } else {
      let db = openDatabase("foodxpress", "1.0", "database", 2 * 1024 * 1024);
      db.transaction(function (tx) {
        tx.executeSql(`SELECT * FROM purchased`, [], function (t, data) {
          for (let i = 0; i < data.rows.length; i++) {
            setOrders((orders) => orders.concat(data.rows[i]));
          }
        });
      });
    }
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
            <th scope="col">Customer</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <AdminItems key={item.id} item={item} />
          ))}
        </tbody>
        <Link to="/menu" className="btn btn-light my-2 float-left btn-sm ">
          Go Back
        </Link>
      </table>
    </div>
  );
};

export default PurchasedOrders;
