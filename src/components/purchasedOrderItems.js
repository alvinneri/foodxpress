import React, { useState, useEffect } from "react";

const PurchasedOrderItems = ({ item }) => {
  return (
    <tr className={`table-data`}>
      <th scope="row">{item.orders}</th>
      <th scope="row">{item.status}</th>
    </tr>
  );
};

export default PurchasedOrderItems;
