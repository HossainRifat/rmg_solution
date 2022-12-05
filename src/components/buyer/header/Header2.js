import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header2 = () => {
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
            <Link to="/buyer/logout">
              <span className="text-danger">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
