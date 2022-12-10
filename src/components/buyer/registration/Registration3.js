import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/Header";
import "./Registration.css";
import { Link } from "react-router-dom";
import bgI from "../img/reg.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 character").max(50),
  confirmPassword: yup.string().required("Password is required").min(8, "Password must be at least 8 character").max(50).oneOf([yup.ref("password")], "Password not match"),
  //phone:yup.string().required("Address is required").min(5,"Address must be at least 3 character").max(20),
});


const Registration3 = () => {
  let navigate = useNavigate([]);


  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  if (localStorage.getItem("reg2") == null) {
    console.log("back");
  }

  const formSubmit = (data) => {
    console.log(data);
    localStorage.setItem("reg3", JSON.stringify(data));
    let r1 = JSON.parse(localStorage.getItem("reg1"));
    let r2 = JSON.parse(localStorage.getItem("reg2"));

    let buyer = {
      ...r1,
      ...r2,
      ...data
    };

    console.log(buyer);

    axios
      .post("http://127.0.0.1:8000/api/buyer/registration3", buyer)
      .then((resp) => {
        if (resp.status == 200) {
          console.log(resp.data);
          //localStorage.setItem("emailCode", resp.data);
          //alert("Verify your email to continue");
          // <Link to="https://mail.google.com/mail/"></Link>
          localStorage.clear();
          navigate('/login');

        }
        else if (resp.status == 203) {
          console.log(resp.data);
        }
        else {
          console.log(resp.data);
        }

      })
      .catch((err) => {
        console.log(err);
      });
  };


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
              <form onSubmit={handleSubmit(formSubmit)}>
                <label>
                  Password <span>*</span>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  //value="{{old('password')}}"
                  {...register("password")}

                />
                <span> <p>{errors.password?.message}</p> </span>

                <label>
                  Confirm Password <span>*</span>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Re-enter password"
                  id="confirmPassword"
                  {...register("confirmPassword")}

                //value="{{old('password_confirmation')}}"
                />
                <span> <p>{errors.confirmPassword?.message}</p> </span>

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

export default Registration3;
