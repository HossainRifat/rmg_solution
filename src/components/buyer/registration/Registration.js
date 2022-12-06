import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/Header";
import "./Registration.css";
import { Link } from "react-router-dom";
import bgI from "../img/reg.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  first_name:yup.string().required("Name is required").min(3,"Name must be at least 3 character").max(50).matches(/^[a-zA-Z ,.'-]+$/,"Invalid name"),
  last_name:yup.string().required("Name is required").min(3,"Name must be at least 3 character").max(50).matches(/^[a-zA-Z ,.'-]+$/,"Invalid name"),
  address:yup.string().required("Address is required").min(3,"Address must be at least 3 character").max(1000).matches(/^[#.0-9a-zA-Z\s,-]+$/i,"Invalid address"),
  dob:yup.string().required("Date-of-birth is required"),
  gender:yup.string("Gender is required").required("Gender is Required").nullable(),
  email:yup.string().required("Email is required").email("Invalid email"),


});

const Registration = () => {
  let [first_name, set_first_name] = useState("");
  let [last_name, set_last_name] = useState("");
  let [dob, set_dob] = useState("");
  let [gender, set_gender] = useState("");
  let [email, set_email] = useState("");
  let [address, set_address] = useState("");
  let [photo, set_photo] = useState("");
  let navigate = useNavigate([]);

  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
  }
  
  // const regSubmit = () => {

  //   let obj = {
  //     first_name: first_name,
  //     last_name: last_name,
  //     dob: dob,
  //     email: email,
  //     gender: gender,
  //     address: address,
  //   };

  //   console.log(obj);

  //   axios
  //       .post("http://127.0.0.1:8000/api/buyer/registration1",obj)
  //       .then((resp) => {
  //         if (resp.status == 200) {
  //           console.log(resp.data);
  //           navigate('/buyer/registration2');
  //         }
  //         else if(resp.status == 203){
  //           console.log(resp.data);
  //         }
  //         else{
  //           console.log(resp.data);
  //         }

  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // }




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
              <form onSubmit={handleSubmit(formSubmit)}>
                <label>First Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your first name"
                  id="first_name"
                  //value={first_name}
                  // onChange={(e) => set_first_name(e.target.value)}
                  {...register("first_name")}
                 
                />
                <span> <p>{errors.first_name?.message}</p> </span>
                <label>Last Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  id="last_name"
                  // value={last_name}
                  // onChange={(e) => set_last_name(e.target.value)}
                  {...register("last_name")}

                />
                <span> <p>{errors.last_name?.message}</p> </span>

                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  id="email"
                  // value={email}
                  // onChange={(e) => set_email(e.target.value)}
                  {...register("email")}

                />
                <span> <p>{errors.email?.message}</p> </span>

                <label>Gender</label>
                <br />
                <div className="gender">
                  <input
                    type="radio"
                    id="gender"
                    value="male"
                    className="form-check-input"
                    //value="{{old('gender')}}"
                    // value={first_name}
                    // onChange={(e) => set_gender(e.target.value)}
                  {...register("gender")}
                  
                  />

                  <label>Male</label>
                  <input
                    type="radio"
                    id="gender"
                    value="female"
                    className="form-check-input"
                    //value={first_name}
                    // onChange={(e) => set_gender(e.target.value)}
                  {...register("gender")}

                  />

                  <label>Female</label>
                  <input
                    type="radio"
                    id="gender"
                    value="other"
                    className="form-check-input"
                    //value={first_name}
                    // onChange={(e) => set_gender(e.target.value)}
                  {...register("gender")}

                  />
                  <label>Other</label>
                </div>
                <span> <p>{errors.gender?.message}</p> </span>

                <label>Date of birth</label>
                <input
                  type="date"
                  placeholder="Enter your date of bitrh"
                  id="dob"
                  // value={dob}
                  // onChange={(e) => set_dob(e.target.value)}
                  {...register("dob")}

                />
                <span className="dp"> <p>{errors.dob?.message}</p> </span>

                <label>Profile Picture</label>
                <input
                  type="file"
                  placeholder="Enter your profile picture"
                  className="form-control"
                  id="formFile"
                  //id="photo"
                  //value="{{old('photo')}}"
                />
                <label>Address</label>
                <textarea
                  id="address"
                  rows="3"
                  placeholder="Enter address"
                  // value={address}
                  // onChange={(e) => set_address(e.target.value)}
                  {...register("address")}

                ></textarea>
                <span> <p>{errors.address?.message}</p> </span>

                <button>
                {/* <Link to="/buyer/registration2">Next</Link> */}
                Next
              </button>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
