import React, { useState } from "react";

const OrderItems = ({ item }) => {
  console.log({ item });

  return (
    <tr>
      <th scope="row">{item.orders}</th>
      <td>
        {" "}
        <button className="btn btn-dark" id={item.id}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default OrderItems;
