import React from "react";

const Items = (props) => {
  const { label, image, ingredients } = props;
  return (
    <div className="card">
      <img src={image} alt="" className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{label}</div>
        <div className="card-content">
          <a href="" className="btn btn-dark">
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Items;
