import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";

import Signup from "./Signup";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route >
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
