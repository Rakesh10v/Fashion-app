import React, { useContext, useEffect, useState } from "react";
import { DressContext } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Male.css";
function Men() {
  let context = useContext(DressContext);
  console.log("here", context);
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();
  let getData = () => {
    if (context.data.length > 0) setProducts(context.data[0].subItems);
    else navigate("/Order");
  };

  useEffect(() => {
    getData();
  }, [context.data]);
  return (
    <div className="male-od">
      <div className="product-wrapper">
        <Header />
        <h2>Men's Collection</h2>
        {products.map((e, i) => {
          return (
            <div className="product-item-wrapper" key={i}>
              <div className="product-details">
                <h4>{e.name}</h4>
                <div className="product-price"> &#x20B9; {e.price} </div>
                <button
                  className="product-btn"
                  onClick={() => {
                    context.cart.push(e);
                    context.setcartvalue(context.cart.length);
                  }}
                >
                  Order Now
                </button>
              </div>
              <div className="product-image">
                <img src={e.image} alt={e.name}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Men;
