import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faDashboard,
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
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import buyerAxiosConfig from "./buyerAxiosConfig";



const Dashboard = () => {
  const [buyer, setBuyer] = useState([]);
  const [order, setOrder] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [money, setMoney] = useState([]);
  const [post, setPost] = useState([]);
  const [myPost, setMyPost] = useState([]);

  const [orders, setOrders] = useState([]);




  let navigate = useNavigate([]);

  useEffect(() => {
    buyerAxiosConfig
      .get("/buyer/dashboard")
      .then((resp) => {
        if (resp.status == 200) {
          setBuyer(resp.data.buyer);
          setOrder(resp.data.order);
          setCheckout(resp.data.checkout);
          setMoney(resp.data.money);
          setPost(resp.data.post);
          setBuyer(resp.data.buyer);
          setOrders(resp.data.user.my_order);
          setMyPost(resp.data.myPost);
          console.log(resp.data.myPost);

        }
        else {
          console.log(resp.data);
          navigate("/login");
        }

      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <div>
        <Header2 />
      </div>
      <div>
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl fixed-start ms-3   bg-white shadow">
          <div className="sidenav-header text-center">
            <i
              className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            ></i>
            <a
              className="navbar-brand m-0"
              href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
              target="_blank"
            >
              {/* {{-- <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo"> --}} */}
              <span className="ms-1 font-weight-bold">My Dashboard</span>
            </a>
          </div>
          <hr className="horizontal dark mt-0 mb-2" />
          <div
            className="collapse navbar-collapse  w-auto "
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold active"
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

              <Link className="nav-item">
                <a className="nav-link text-dark font-weight-bold " to="">
                  <div className="text-dark font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    {/* <i className="material-icons opacity-10">notifications</i> */}
                    <FontAwesomeIcon
                      className=""
                      icon={faBell}
                    ></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Notifications</span>
                </a>
              </Link>
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
                  className="nav-link text-dark font-weight-bold"
                  to="/buyer/security/get"
                >
                  <div className="text-dark font-weight-bold text-center me-2 d-flex align-items-center justify-content-center">
                    {/* <i className="material-icons opacity-10">security</i> */}
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Security</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark font-weight-bold "
                  href="/buyer/logout"
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
                </a>
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
                <h2 className="font-weight-bolder mb-0">Dashboard</h2>
              </nav>
              <div
                className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                id="navbar"
              >
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <label className="form-label"></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here.."
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa-solid opacity-10">
                        <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                      </i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">My Posts</p>
                      <h4 className="mb-0">{post}</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +55%{" "}
                      </span>
                      than last week
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa-solid opacity-10">
                        <FontAwesomeIcon
                          icon={faCartShopping}
                        ></FontAwesomeIcon>{" "}
                      </i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">My Orders</p>
                      <h4 className="mb-0">{order}</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +3%{" "}
                      </span>
                      than last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa-solid opacity-10">
                        <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                      </i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        My Checkouts
                      </p>
                      <h4 className="mb-0">{checkout}</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-danger text-sm font-weight-bolder">
                        -2%
                      </span>{" "}
                      than yesterday
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa-solid opacity-10">
                        {" "}
                        <FontAwesomeIcon
                          icon={faMoneyBill1Wave}
                        ></FontAwesomeIcon>
                      </i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">My Spends</p>
                      <h4 className="mb-0">{money}</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +5%{" "}
                      </span>
                      than yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="row mb-4">
                <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                  <div className="card">
                    <div className="card-header pb-0">
                      <div className="row">
                        <div className="col-lg-6 col-7">
                          <h6>My Orders</h6>
                          <p className="text-sm mb-0">
                            <i
                              className="fa fa-check text-info"
                              aria-hidden="true"
                            ></i>
                            Currently active
                            <span className="font-weight-bold ms-1">
                              {order + " "}
                            </span>
                            orders
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                      <div className="table-responsive dashboard-table">
                        <table className="table align-items-center mb-0 text-dark">
                          <thead className="sticky-top">
                            <tr>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Products
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Deadline
                              </th>
                              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Budget
                              </th>
                              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Completion
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map(order => (

                              <tr key={order.id}>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div></div>
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm" >{order.title}</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <span className="text-xs font-weight-bold text-secondary">
                                    {order.delivery_date}
                                  </span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                  <span className="text-xs font-weight-bold text-secondary">
                                    {order.price}
                                  </span>
                                </td>
                                <td className="align-middle">
                                  <div className="progress-wrapper w-75 mx-auto">
                                    <div className="progress-info">
                                      <div className="progress-percentage">
                                        <span className="text-xs font-weight-bold text-secondary">
                                          {order.status + "%"}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="progress">
                                      <div
                                        className={"progress-bar bg-gradient-info w-" + order.status}
                                        role="progressbar"
                                        aria-valuenow={order.status}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 ">
                    <div className="card-header pb-0">
                      <h6>New Bids</h6>
                      <p className="text-sm">
                        <i className="text-success" aria-hidden="true"></i>
                        <span className="font-weight-bold">24%</span> this month
                      </p>
                    </div>
                    <div className="card-body p-3">
                      <div className="timeline timeline-one-side order-history-body">

                        {myPost.map(post => (
                          <div className="timeline-block mb-3">
                            <span className="timeline-step">
                              <i className="text-success text-gradient">
                                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                              </i>
                            </span>
                            <div className="timeline-content">
                              <h6 className="text-dark text-sm font-weight-bold mb-0">
                                <Link
                                  to={"/buyer/post/details/" + post.postId}
                                // className="text-secondary"
                                >
                                  {post.seller}
                                </Link>
                              </h6>
                              <p className="text-secondary font-weight-bold text-xxs mt-0 mb-0">
                                {post.date}
                              </p>
                              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                                {post.postTitle}
                              </p>
                              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                                {"Offered price: $" + post.amount}
                              </p>

                            </div>
                          </div>
                        ))}

                      </div>
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

export default Dashboard;
