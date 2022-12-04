import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/Header";
import "./Registration.css";
import { Link } from "react-router-dom";
import bgI from "../img/reg.png";

const Registration3 = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="reg">
        <div className="reg-content">
          <div className="left-content">
            <h2>3 OF 3</h2>
            <div className="reg-img">
              <img src={bgI} alt="" />
            </div>
          </div>
          <div className="right-content">
            <h2>Buyer Registration</h2>
            <h4>Just a Step way to become our Member!</h4>
            <div className="reg-border">
              <form>
                <label>
                  Password <span>*</span>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  //value="{{old('password')}}"
                />

                <label>
                  Confirm Password <span>*</span>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Re-enter password"
                  name="password_confirmation"
                  //value="{{old('password_confirmation')}}"
                />

                <input type="submit" name="submit" value="Signup" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration3;
