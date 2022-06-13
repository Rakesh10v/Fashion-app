import React, { useContext, useState } from "react";
import { DressContext } from "../App";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import "./Cart.css";
function Cart() {
  let context = useContext(DressContext);
  let [cartPrice] = useState(0);
  let handleRemove = (e) => {
    context.cart.splice(context.cart.indexOf(e), 1);
    context.setcartvalue(context.cart.length);
  };
  return (
    <div className="cart-od">
      <div className="product-wrapper">
        {context.cart.length ? (
          <>
            <h2>You have ordered:</h2>
            {context.cart.map((e, i) => {
              cartPrice += Number(e.price);
              return (
                <div className="product-item-wrapper" key={i}>
                  <div className="product-details">
                    <h4>{e.name}</h4>
                    <div className="product-price"> &#x20B9; {e.price} </div>

                    <button
                      className="product-btn"
                      onClick={() => handleRemove(e)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="product-image">
                    <img src={e.image} alt={e.name}></img>
                  </div>
                </div>
              );
            })}

            <div className="placeholder-wrapper">
              <div className="product-price">Total Price:{cartPrice}</div>
              <Link to="/sucessfull">
                <button
                  className="product-btn-placeholder"
                  onClick={() => {
                    context.setcart([]);
                    context.setcartvalue(0);
                  }}
                >
                  Place Order
                </button>
              </Link>
            </div>
            <center>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AbukETR7wWighP4nOQgzN3KetIyWwTDO8vk_C15NoA_egHmjTG9UqDpNscO2c9318vIdsXhvV1N3Ic8t",
                }}
              >
                <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider>
            </center>
          </>
        ) : (
          <h2>Your Cart is Empty</h2>
        )}
      </div>
    </div>
  );
}

export default Cart;
