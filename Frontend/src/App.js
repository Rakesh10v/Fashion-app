import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Men from "./Components/Male";
import Women from "./Components/Female";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Successful from "./Components/Successful";
const url = "https://62625159d5bd12ff1e7b451c.mockapi.io/clothing";

export const DressContext = React.createContext();

function App() {
  let [data, setdata] = useState([]);
  let [cart, setcart] = useState([]);
  let [cartvalue, setcartvalue] = useState(cart.length);

  useEffect(() => {
    getdata();
  }, []);

  let getdata = async () => {
    let res = await axios.get(url);
    console.log(res.data);
    setdata(res.data);
  };

  return (
    <>
      <BrowserRouter>
        <DressContext.Provider
          value={{ data, cart, setcart, cartvalue, setcartvalue }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sucessfull" element={<Successful />} />
          </Routes>
        </DressContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
