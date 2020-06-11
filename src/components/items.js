import React, { useState } from "react";

const Items = (props) => {
  const { label, image, ingredients, username } = props;

  const handleOrder = (e) => {
    e.preventDefault();

    let order = e.target.id;
    console.log(order);

    let db = openDatabase("foodxpress", "1.0", "database", 2 * 1024 * 1024);
    db.transaction(function (tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS 'orders' ('id' INTEGER PRIMARY KEY, 'username', 'orders')"
      );

      tx.executeSql("INSERT INTO orders (username, orders) VALUES  (?,?)", [
        username,
        order,
      ]);
    });
  };
  return (
    <div className="card">
      <img src={image} alt="" className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{label}</div>
        <div className="card-content">
          <button className="btn btn-dark" id={label} onClick={handleOrder}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
