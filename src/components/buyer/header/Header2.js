import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {useNavigate } from "react-router-dom";
import buyerAxiosConfig from "../dashboard/buyerAxiosConfig";

const Header2 = () => {
  let navigate = useNavigate([]);

  const logSubmit = () => {
    buyerAxiosConfig
      .get("/buyer/logout")
      .then((resp) => {
        console.log(resp.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);

      });
  }

  return (
    <header>
      <div className="nav-bar">
        <Link to="/" className="logo">
          RMG Solution
        </Link>

        <div className="navigation">
          <div className="nav-items">
            <Link to="/buyer/dashboard">My Dashboard</Link>
            <Link to="/buyer/job/all">Browse Jobs</Link>
            <Link to="/buyer/post/job">Post Job</Link>
            <Link to="">
              <span className="text-danger" onClick={logSubmit}>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
