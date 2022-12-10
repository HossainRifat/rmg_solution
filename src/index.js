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
import Posts from "./components/buyer/Posts";
import Details from "./components/buyer/Details";

import SHome from './components/seller/Home';
import SHead from './components/seller/Head';
import SFoot from './components/seller/Foot';
import SProfile from './components/seller/Profile';
import SPosts from './components/seller/Posts';
import SLogin from './components/seller/Login';
import SLogout from './components/seller/Logout';
import SContact from './components/seller/Contact';
import SPostDetails from './components/seller/PostDetails';
import SRegister from './components/seller/Register';
import Bid from "./components/seller/Bid";

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
        <Route path="/buyer/registration2/:id" element={<Registration2 />}></Route>
        <Route path="/buyer/registration3" element={<Registration3 />}></Route>
        <Route path="/buyer/dashboard" element={<Dashboard />}></Route>
        <Route path="/buyer/profile/get" element={<Profile />}></Route>
        <Route path="/buyer/security/get" element={<Security />}></Route>
        <Route path="/buyer/post/:id" element={<Posts />}></Route>
        <Route path="/buyer/post/details/:id" element={<Details />}></Route>



        {/* #########################  FOR SELLER  ######################### */}
        <Route path='/seller' element={<SHome />} />
        <Route path='/seller/profile' element={<SProfile />} />
        <Route path='/seller/contact' element={<SContact />} />
        <Route path='/seller/posts' element={<SPosts />} />
        <Route path='/seller/postdetails/:id' element={<SPostDetails />} />
        <Route path='/seller/login' element={<SLogin />} />
        <Route path='/seller/logout' element={<SLogout />} />
        <Route path='/seller/sellerregister' element={<SRegister />} />
        <Route path='/seller/bids' element={<Bid />} />


        {/* seller routes here */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
