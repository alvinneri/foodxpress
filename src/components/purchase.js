import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Purchase = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("session")) {
      history.push("/login");
    }
  }, []);
  return (
    <div
      className="purchase container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h3>Thank you for Purchasing.</h3>
      <Link to="/menu" className="btn btn-dark my-3">
        Purchase Again
      </Link>
    </div>
  );
};

export default Purchase;
