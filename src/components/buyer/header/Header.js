import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="nav-bar">
        <Link to="/" className="logo">
          RMG Solution
        </Link>

        <div className="navigation">
          <div className="nav-items">
            <Link to="/works">How It Works</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login</Link>
            <Link to="/buyerSignup">
              <span className="btn btn-success">Post a Job</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
