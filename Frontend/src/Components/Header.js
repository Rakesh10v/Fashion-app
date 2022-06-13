import React, { useContext } from "react";
import { DressContext } from "../App";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  let context = useContext(DressContext);
  return (
    <>
      <div className="head-wrapper">
        <div className="head-title">Fashion Collections</div>
        <div className="head-cart">
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          <span className="count">{context.cartvalue}</span>
        </div>
      </div>
    </>
  );
}

export default Header;
