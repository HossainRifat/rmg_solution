import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import Home from "./components/buyer/Home";
import Login from "./components/buyer/Login";
import Registration from "./components/buyer/registration/Registration";
import Registration2 from "./components/buyer/registration/Registration2";
import Registration3 from "./components/buyer/registration/Registration3";
import Dashboard from "./components/buyer/dashboard/Dashboard";
import Profile from "./components/buyer/dashboard/Profile";
import Security from "./components/buyer/dashboard/Security";

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
        <Route path="/buyer/registration" element={<Registration />}></Route>
        <Route path="/buyer/registration2" element={<Registration2 />}></Route>
        <Route path="/buyer/registration3" element={<Registration3 />}></Route>
        <Route path="/buyer/dashboard" element={<Dashboard />}></Route>
        <Route path="/buyer/profile/get" element={<Profile />}></Route>
        <Route path="/buyer/security/get" element={<Security />}></Route>

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
