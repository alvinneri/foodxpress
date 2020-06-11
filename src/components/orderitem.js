import React, { useState } from "react";

const OrderItems = ({ item }) => {
  console.log({ item });

  return (
    <div className="btn btn-dark">
      <div className="">{item.orders}</div>
      <div className="">{item.username}</div>
      {/* <img src={image} alt="" className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{label}</div>
        <div className="card-content">
          <button className="btn btn-dark" id={label} onClick={handleOrder}>
            Order
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default OrderItems;
