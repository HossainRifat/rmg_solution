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
import SellerOrders from './components/seller/SellerOrders';
import SellerBids from './components/seller/SellerBids';
import { ContactUs } from "./components/buyer/TestMail";
import BuyerContact from "./components/buyer/Contact";

import AdminHome from "./components/admin/AdminHome";
import AdminBuyerList from "./components/admin/AdminBuyerList";
import AdminHead from "./components/admin/AdminHead";
import AdminLogOut from "./components/admin/AdminLogOut";
import AdminLogin from "./components/admin/AdminLogin";
import AdminProductList from "./components/admin/AdminProductList";
import AdminProfile from "./components/admin/AdminProfile";
import AdminRegistration from "./components/admin/AdminRegistration";

// import AdminHome from './components/AdminHome';
// import AdminRegistration from './components/AdminRegistration';
// import AdminLogin from './components/AdminLogin';
// import AdminProfile from './components/AdminProfile';
// import AdminBuyerList from './components/AdminBuyerList';
// import AdminProductList from './components/AdminProductList';
// import AdminLogOut from './components/AdminLogOut';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* #########################  FOR ADMIN  ######################### */}
        {/* admin routes here */}
        <Route exact path='/admin' element={<AdminHome />} />
        <Route exact path='/adminregistration' element={<AdminRegistration />} />
        <Route exact path='/adminlogin' element={<AdminLogin />} />
        <Route exact path='/adminprofile' element={<AdminProfile />} />
        <Route exact path='/adminproduct' element={<AdminProductList />} />
        <Route exact path='/adminbuyer' element={<AdminBuyerList />} />
        <Route exact path='/adminlogout' element={<AdminLogOut />} />

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
        <Route path="/tm" element={<ContactUs />}></Route>
        <Route path="/buyer/contact" element={<BuyerContact />}></Route>





        {/* #########################  FOR SELLER  ######################### */}
        <Route path='/seller' element={<SHome />} />
        <Route path='/seller/profile' element={<SProfile />} />
        <Route path='/seller/contact' element={<SContact />} />
        <Route path='/seller/posts' element={<SPosts />} />
        <Route path='/seller/postdetails/:id' element={<SPostDetails />} />
        <Route path='/seller/login' element={<SLogin />} />
        <Route path='/seller/logout' element={<SLogout />} />
        <Route path='/seller/sellerregister' element={<SRegister />} />
        <Route path='/sellerorders' element={<SellerOrders />} />
        <Route path='/sellerbids' element={<SellerBids />} />


        {/* seller routes here */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
