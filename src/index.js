import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/buyer/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/buyer/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* #########################  FOR ADMIN  ######################### */}
        {/* admin routes here */}

        {/* #########################  FOR BUYER  ######################### */}
        {/* buyer routes here */}
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>

        {/* #########################  FOR SELLER  ######################### */}
        {/* seller routes here */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
