import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/Header";
import "./Registration.css";
import { Link } from "react-router-dom";
import bgI from "../img/reg.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  let [first_name, set_first_name] = useState("");
  let [last_name, set_last_name] = useState("");
  let [dob, set_dob] = useState("");
  let [gender, set_gender] = useState("");
  let [email, set_email] = useState("");
  let [address, set_address] = useState("");
  let [photo, set_photo] = useState("");
  let navigate = useNavigate([]);
  
  const regSubmit = () => {

    let obj = {
      first_name: first_name,
      last_name: last_name,
      dob: dob,
      email: email,
      gender: gender,
      address: address,
    };

    console.log(obj);

    axios
        .post("http://127.0.0.1:8000/api/buyer/registration1",obj)
        .then((resp) => {
          if (resp.status == 200) {
            console.log(resp.data);
            navigate('/buyer/registration2');
          }
          else if(resp.status == 203){
            console.log(resp.data);
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
                  value={first_name}
                  onChange={(e) => set_first_name(e.target.value)}
                />
                <label>Last Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => set_last_name(e.target.value)}
                />
                <label>Email</label>
                <input
                  type="Email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => set_email(e.target.value)}
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
                    // value={first_name}
                    onChange={(e) => set_gender(e.target.value)}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-check-input"
                    //value={first_name}
                    onChange={(e) => set_gender(e.target.value)}
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="form-check-input"
                    //value={first_name}
                    onChange={(e) => set_gender(e.target.value)}
                  />
                  <label>Other</label>
                </div>
                <label>Date of birth</label>
                <input
                  type="date"
                  placeholder="Enter your date of bitrh"
                  name="dob"
                  value={dob}
                  onChange={(e) => set_dob(e.target.value)}
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
                  value={address}
                  onChange={(e) => set_address(e.target.value)}
                ></textarea>
              </form>

              <button onClick={regSubmit}>
                {/* <Link to="/buyer/registration2">Next</Link> */}
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
