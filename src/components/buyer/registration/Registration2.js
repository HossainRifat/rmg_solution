import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/Header";
import "./Registration.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import bgI from "../img/reg.png";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";


const schema = yup.object({
  nid:yup.string().required("Name is required").min(3,"Name must be at least 3 character").max(50),
  passport:yup.string().required("Name is required").min(3,"Name must be at least 3 character").max(50),
  phone:yup.string().required("Address is required").min(5,"Address must be at least 3 character").max(20),
});

const Registration2 = () => {

  const navigate = useNavigate();
  const id = useParams().id;
  const emailCode = localStorage.getItem("emailCode");
  // console.log(useParams().id);
  // console.log(localStorage.getItem("emailCode"))
  // console.log(localStorage.getItem("emailCode") != useParams().id);

  useEffect(() => {
  if(id != emailCode){
    navigate('/buyer/registration');
  }
  },[]);

  // if(localStorage.getItem("emailCode") != useParams().id){
  //   navigate('/buyer/registration');
  // }

  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
    axios
        .post("http://127.0.0.1:8000/api/buyer/registration2",data)
        .then((resp) => {
          if (resp.status == 200) {
            console.log(resp.data);
            //localStorage.setItem("emailCode", resp.data);
            //alert("Verify your email to continue");
            // <Link to="https://mail.google.com/mail/"></Link>
            localStorage.setItem("reg2", JSON.stringify(data));

            navigate('/buyer/registration3');
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
            <h2>2 OF 3</h2>
            <div className="reg-img">
              <img src={bgI} alt="" />
            </div>
          </div>
          <div className="right-content">
            <h2>Buyer Registration</h2>
            <h4>Just a Step way to become our Member!</h4>
            <div className="reg-border" onSubmit={handleSubmit(formSubmit)}>
              <form>
                <label>
                  National Identification Number <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your NId"
                  id="nid"
                  //value="{{old('nid')}}"
                  {...register("nid")}
                />
                <span> <p>{errors.nid?.message}</p> </span>

                <label>Passport Number</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your passport number"
                  id="passport"
                  //value="{{old('passport')}}"
                  {...register("passport")}

                />
                <span> <p>{errors.passport?.message}</p> </span>

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
                  {...register("phone")}

                />
                <span> <p>{errors.phone?.message}</p> </span>

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
                <button>
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

export default Registration2;
