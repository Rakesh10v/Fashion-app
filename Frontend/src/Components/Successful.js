import React from "react";
import "./Sucessful.css";
import { Link } from "react-router-dom";

function Successful() {
  return (
    <div className="success">
      <div className="ord">Order Placed Successful</div>
      <Link to="/">
        <button className="bt-home">Home</button>
      </Link>
      <Link to="/order">
        <button className="bt-out">Order</button>
      </Link>
    </div>
  );
}

export default Successful;
