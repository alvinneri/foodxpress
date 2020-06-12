import React, { useState, useEffect } from "react";

const OrderItems = ({ item }) => {
  const [id, setId] = useState("");
  const [hide, setHide] = useState("");

  const handleRemove = (e) => {
    e.preventDefault(e);
    const id = e.target.id;
    setId(id);

    let db = openDatabase("foodxpress", "1.0", "database", 2 * 1024 * 1024);
    db.transaction(function (tx) {
      tx.executeSql(`DELETE FROM orders WHERE id =?`, [id]);
    });

    setHide("hide");
  };

  useEffect(() => {
    // window.location.reload();
  }, [id]);

  return (
    <tr className={`table-data ${hide}`}>
      <th scope="row">{item.orders}</th>
      <td>
        {" "}
        <button
          className="btn btn-dark btn-sm"
          id={item.id}
          onClick={handleRemove}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default OrderItems;
