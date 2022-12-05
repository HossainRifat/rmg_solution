import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header2 from "../header/Header2";
import buyerAxiosConfig from "./buyerAxiosConfig";
import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const Profile = () => {
  const [buyer, setBuyer] = useState([]);

  useEffect(() => {
    buyerAxiosConfig
      .get("/buyer/dashboard")
      .then((resp) => {
        console.log(resp.data);
        setBuyer(resp.data);
      })
      .catch((err) => {
        console.log(err);
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
            <Link
              className="navbar-brand m-0"
              to=""
              target="_blank"
            >
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
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                  </div>
                  <span className="nav-link-text ms-1">Notifications</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold active"
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
        <div className="main-content position-relative max-height-vh-100 h-100">
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            data-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <h4 className="font-weight-bolder mb-0">Profile</h4>
              </nav>
            </div>
          </nav>
          <div className="container-fluid px-2 px-md-4">
            <div
              className="page-header min-height-100 border-radius-xl mt-4"
              //   style="background-color:rgb(126, 114, 216); opacity:.8;"
            >
              <span className="mask  opacity-6"></span>
            </div>
            <div className="card card-body mx-3 mx-md-4 mt-n6">
              <button
                className="btn btn-danger  position-absolute top-4 end-4 col-md-1 text-light"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Delete
              </button>
              <div className="row gx-4 mb-2">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      // src="/storage/uploads/{{$user->photo}}"
                      alt="profile_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">
                      {buyer.first_name} {buyer.last_name}
                    </h5>
                    <p className="mb-0 font-weight-normal text-sm">
                      CEO / Co-Founder
                    </p>
                  </div>
                </div>
              </div>
              {/* @if ($data == "get") */}
              <div className="row">
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <div className="card profile-card-plain shadow-none border-0 h-100">
                      <div className="profile-header pb-0 p-3">
                        <div className="row">
                          <div className="col-md-8 d-flex align-items-center">
                            <h6 className="mb-0">Profile Information</h6>
                          </div>
                        </div>
                      </div>
                      <div className="profile-card p-3">
                        <p className="text-sm">
                          Hi, I’m Alec Thompson, Decisions: If you can’t decide,
                          the answer is no. If two equally difficult paths,
                          choose the one more painful in the short term (pain
                          avoidance is creating an illusion of equality).
                        </p>
                        <hr className="horizontal gray-light my-4" />
                        <ul className="list-group">
                          <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                            <strong className="text-dark" readOnly>
                              First Name <span>*</span>
                            </strong>
                            &nbsp;
                            <input
                              type="text"
                              name="first_name"
                              value={buyer.first_name}
                              readOnly
                            />
                          </li>
                          <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                            <strong className="text-dark">
                              Last Name <span>*</span>
                            </strong>
                            &nbsp;
                            <input
                              type="text"
                              name="last_name"
                              value={buyer.last_name}
                              readOnly
                            />
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">
                              Mobile <span>*</span>
                            </strong>
                            &nbsp;
                            <input
                              type="text"
                              name="phone"
                              readOnly
                              value={buyer.phone}
                            />
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">
                              Email <span>*</span>
                            </strong>
                            &nbsp;
                            <input
                              type="text"
                              name="phone"
                              value={buyer.email}
                              readOnly
                            />
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">
                              Date of birth <span>*</span>
                            </strong>
                            &nbsp;
                            <input
                              type="date"
                              name="dob"
                              value={buyer.dob}
                              //   style="border: solid; border-color: rgb(231, 232, 230);"
                              readOnly
                            />
                          </li>

                          <li className="list-group-item border-0 ps-0 pb-0">
                            <strong className="text-dark text-sm">
                              Social:
                            </strong>
                            &nbsp;
                            <Link
                              className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                              to=""
                            >
                              <i className="fab fa-facebook fa-lg"></i>
                            </Link>
                            <Link
                              className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                              to=""
                            >
                              <i className="fa-lg"> <FontAwesomeIcon></FontAwesomeIcon></i>
                            </Link>
                            <Link
                              className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                              to=""
                            >
                              <i className="fab fa-instagram fa-lg"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="card card-plain shadow-none border-0 h-100">
                      <div className="profile-header pb-0 p-3">
                        <div className="row">
                          <div className="col-md-8 d-flex align-items-center">
                            {/* <!-- <h6 className="mb-0">Profile Information</h6> --> */}
                          </div>
                          <div className="col-md-4 text-end">
                            <Link to="/buyer/profile/edit">
                              <i
                                className="fas fa-user-edit text-secondary text-sm"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit Profile"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="profile-card p-1">
                        <ul className="list-group">
                          <li className="list-group-item border-0 ps-0 pt-7 text-sm">
                            <strong className="text-dark">
                              National identity number <span>*</span>
                            </strong>
                            &nbsp;
                            <input
                              type="text"
                              name="nid"
                              value={buyer.nid}
                              readOnly
                            />
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">
                              Passport number
                            </strong>
                            &nbsp;
                            <input
                              type="text"
                              name="passport"
                              value={buyer.passport}
                              readOnly
                            />
                          </li>

                          <li className="list-group-item border-0 ps-0 text-sm">
                            <strong className="text-dark">
                              Address <span>*</span>
                            </strong>
                            &nbsp;
                            <textarea
                              name="address"
                              rows="6"
                              //   style="width: 100%;"
                              value={buyer.address}
                              readOnly
                            ></textarea>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
