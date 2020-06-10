import React from "react";

const Items = (props) => {
  const { label, image, ingredients } = props;
  return (
    <div className="card">
      <img src={image} alt="" className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{label}</div>
        <a href="" className="button2">
          Order
        </a>
      </div>
    </div>
  );
};

export default Items;
