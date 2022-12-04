import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/Header";
import "./Registration.css";
import { Link } from "react-router-dom";
import bgI from "../img/reg.png";

const Registration2 = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="reg">
        <div className="reg-content">
          <div className="left-content">
            <h2>2 OF 3</h2>
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
                  National Identification Number <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your NId"
                  name="nid"
                  //value="{{old('nid')}}"
                />
                <label>Passport Number</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your passport number"
                  name="passport"
                  //value="{{old('passport')}}"
                />
                <label>
                  Phone Number <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  id="phone"
                  //value="{{old('phone')}}"
                />
                <label>
                  Income Certificate <span>*</span>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="formFile"
                  name="account"
                />
                <label>Documents Of Previous (at least Five)</label>
                <input
                  type="file"
                  className="form-control"
                  id="formFile"
                  name="documents"
                />
              </form>
              <button>
                <Link to="/buyer/registration3">Next</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration2;
