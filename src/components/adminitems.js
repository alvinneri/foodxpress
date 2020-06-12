import React, { useState, useEffect } from "react";

const AdminItems = ({ item }) => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setStatus(item.status);
  }, []);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSave = (e) => {
    let db = openDatabase("foodxpress", "1.0", "database", 2 * 1024 * 1024);
    const id = e.target.id;

    db.transaction(function (tx) {
      tx.executeSql(
        `UPDATE purchased SET status=? WHERE id=?`,
        [status, id],
        function (t, data) {}
      );
    });

    setMessage("Successfully Updated");
  };

  return (
    <tr className={`table-data`}>
      <th scope="row">{item.orders}</th>
      <th scope="row">{item.username}</th>
      <th scope="row">
        {" "}
        <select
          class="form-control"
          id="exampleFormControlSelect2"
          value={status}
          onChange={handleChange}
        >
          <option>{item.status}</option>
          <option>Complete</option>
        </select>
      </th>
      <th scope="row">
        <button className="btn btn-pur" id={item.id} onClick={handleSave}>
          Save
        </button>
      </th>
      <th scrop="row">{message}</th>
    </tr>
  );
};

export default AdminItems;
