import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/Header";
import "./Registration.css";
import { Link } from "react-router-dom";
import bgI from "../img/reg.png";

const Registration = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="reg">
        <div className="reg-content">
          <div className="left-content">
            <h2>1 OF 3</h2>
            <div className="reg-img">
              <img src={bgI} alt="" />
            </div>
          </div>
          <div className="right-content">
            <h2>Buyer Registration</h2>
            <h4>Just a Step way to become our Member!</h4>
            <div className="reg-border">
              <form>
                <label>First Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="first_name"
                  //value="{{old('first_name')}}"
                />
                <label>Last Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="last_name"
                  //value="{{old('last_name')}}"
                />
                <label>Email</label>
                <input
                  type="Email"
                  placeholder="Enter your email"
                  name="email"
                  //value="{{old('email')}}"
                />
                <label>Gender</label>
                <br />
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-check-input"
                    //value="{{old('gender')}}"
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-check-input"
                    //value="{{old('gender')}}"
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="form-check-input"
                    //value="{{old('gender')}}"
                  />
                  <label>Other</label>
                </div>
                <label>Date of birth</label>
                <input
                  type="date"
                  placeholder="Enter your date of bitrh"
                  name="dob"
                  //value="{{old('dob')}}"
                />
                <label>Profile Picture</label>
                <input
                  type="file"
                  placeholder="Enter your profile picture"
                  className="form-control"
                  id="formFile"
                  name="photo"
                  //value="{{old('photo')}}"
                />
                <label>Address</label>
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter address"
                ></textarea>
              </form>

              <button>
                <Link to="/buyer/registration2">Next</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
