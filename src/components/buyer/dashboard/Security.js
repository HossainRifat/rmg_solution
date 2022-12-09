import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faDashboard,
  faKey,
  faLock,
  faMoneyBill,
  faMoneyBill1Wave,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faNewspaper,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import Header2 from "../header/Header2";
import { Link } from "react-router-dom";
import buyerAxiosConfig from "./buyerAxiosConfig";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  oldPassword:yup.string().required("Password is required").min(8,"Password must be at least 8 character").max(50),
  newPassword:yup.string().required("Password is required").min(8,"Password must be at least 8 character").max(50),
  confirmPassword:yup.string().required("Password is required").min(8,"Password must be at least 8 character").max(50).oneOf([yup.ref("newPassword")], "Password not match"),
  //phone:yup.string().required("Address is required").min(5,"Address must be at least 3 character").max(20),
});

const Security = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  let navigate = useNavigate([]);
  const [buyer, setBuyer] = useState([]);
  const [login, setLogin] = useState([]);
  const [loginCount, setLoginCount] = useState([]);
  const [msg, setMsg] = useState([]);


  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    buyerAxiosConfig
      .get("/buyer/security/get")
      .then((resp) => {
        if(resp.status == 200){
          console.log(resp.data.login.length);
          setBuyer(resp.data.user);
          setLogin(resp.data.login);
          setLoginCount(resp.data.login.length);
        }
        else{
          console.log(resp.data);
          navigate("/login");
        }
        
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);

  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
    buyerAxiosConfig
        .post("http://127.0.0.1:8000/api/buyer/security/update",data)
        .then((resp) => {
          if (resp.status == 200) {
            console.log(resp.data);
            setMsg(resp.data);
            //localStorage.setItem("emailCode", resp.data);
            //alert("Verify your email to continue");
            // <Link to="https://mail.google.com/mail/"></Link>
            //navigate('/buyer/registration3');
            //localStorage.clear();
          }
          else if(resp.status == 203){
            console.log(resp.data);
            setMsg(resp.data);
          }
          else{
            console.log(resp.data);
          }

        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <div>
      <div>
        <Header2></Header2>
      </div>
      <div>
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl fixed-start ms-3   bg-white shadow">
          <div className="sidenav-header text-center">
            <i
              className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            ></i>
            <Link className="navbar-brand m-0" to="" target="_blank">
              {/* {{-- <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo"> --}} */}
              <span className="ms-1 font-weight-bold">My Dashboard</span>
            </Link>
          </div>
          <hr className="horizontal dark mt-0 mb-2" />
          <div
            className="collapse navbar-collapse  w-auto "
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/buyer/dashboard"
                >
                  <div className="text-dark font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    {/* <i className="material-icons opacity-10">dashboard</i> */}
                    <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark  font-weight-bold" to="">
                  <div className="text-dark  font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    {/* <i className="material-icons opacity-10">receipt_long</i> */}
                    <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Payments</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold " to="">
                  <div className="text-dark font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    {/* <i className="material-icons opacity-10">notifications</i> */}
                    <FontAwesomeIcon
                      className=""
                      icon={faBell}
                    ></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Notifications</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/buyer/profile/get"
                >
                  <div className="text-dark font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    {/* <i className="material-icons opacity-10">person</i> */}
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold active"
                  to="/buyer/security"
                >
                  <div className="text-dark font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    {/* <i className="material-icons opacity-10">security</i> */}
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Security</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold "
                  to="/buyer/logout"
                >
                  <div className="text-dark font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faRightFromBracket}
                    ></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1 text-danger">
                    Sign Out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          {/* <!-- Navbar --> */}
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            data-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <h2 className="font-weight-bolder mb-0">Security</h2>
              </nav>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
          <div className="container-fluid py-4">
            <div className="row mb-4">
              <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                <div className="card">
                  <div className="card-header pb-0">
                    <div className="row">
                      <div className="col-lg-6 col-7">
                        <h6>My Password</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="my-security">
                      <form onSubmit={handleSubmit(formSubmit)}>
                        <label>
                          Old Password <span>*</span>
                        </label>
                        <br />
                        <input
                          type={passwordShown ? "text" : "password"}
                          placeholder="Enter password"
                          name="old_password"
                          {...register("oldPassword")}
                        />
                        {/* @if ($errors->has('old_password'))
                                <span>
                                    <p>{{$errors->first("old_password")}}</p>
                                </span>
                            @endif */}
                        <label>
                        <span> <p>{errors.oldPassword?.message}</p> </span>
                        <span> <p>{msg}</p> </span>
                          New Password <span>*</span>
                        </label>
                        <br />
                        <input
                          type={passwordShown ? "text" : "password"}
                          placeholder="Enter password"
                          name="password"
                          {...register("newPassword")}

                        />
                        <span> <p>{errors.newPassword?.message}</p> </span>

                        {/* @if ($errors->has('password'))
                                <span>
                                    <p>{{$errors->first("password")}}</p>
                                </span>
                            @endif */}
                        <label>
                          Confirm Password <span>*</span>
                        </label>
                        <br />
                        <input
                          type={passwordShown ? "text" : "password"}
                          placeholder="Re-enter password"
                          name="password_confirmation"
                          {...register("confirmPassword")}
                        />
                        <span> <p>{errors.confirmPassword?.message}</p> </span>

                        {/* @if ($errors->has('password_confirmation'))
                                <span>
                                    <p>{{$errors->first("password_confirmation")}}</p>
                                </span>
                            @endif */}

                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={togglePassword}
                        />
                        <label
                          className="text-sm"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Show Password
                        </label>
                        <br />
                        <button className="btn btn-warning text-xm">Save</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 ">
                  <div className="card-header pb-0">
                    <h6>Login Sessions</h6>
                    <p className="text-sm">
                      <i
                        className="fa fa-arrow-up text-success"
                        aria-hidden="true"
                      ></i>
                      {/* <?php
                    $i = 0;
                    // dd($all_user->logged_session);
                     foreach ($all_user->logged_session as $item){
                        if ($item->logout_time == "NULL"){
                            $i += 1;
                        }
                    } */}
                      <span className="font-weight-bold">{loginCount+" active logins "}</span>

                      <span>
                        <a href="" className="text-danger text-bold">
                          Logout from all session
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="card-body p-3">
                    <div className="timeline timeline-one-side order-history-body">
                      {login.map(log => (


                      <div className="timeline-block mb-3" key={log.id}>
                        <span className="timeline-step">
                          <i className="material-icons text-danger text-gradient">
                            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                          </i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">
                            {log.device}
                          </h6>
                          {/* @if ($item->token == Cookie::get('token')) */}
                          {/* <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">This PC</p> */}
                          {/* @else */}
                          <p className="text-primary font-weight-bold text-xs mt-1 mb-0">
                              {""+log.location}
                          </p>
                          <p className="text-primary font-weight-bold text-xs mt-1 mb-0">
                            <a href="/buyer/logout/session/{{$item->token}}">
                              {"IP "+log.ip}
                            </a>
                          </p>
                          {/* @endif */}
                        </div>
                      </div>

                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Security;
