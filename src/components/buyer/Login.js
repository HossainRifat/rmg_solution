import React, { Component, useState } from "react";
import axios from "axios";
import Head from "./header/Header";
import "./Login.css";
import bgI from "./img/login.jpg";
import { browserName, osName } from "react-device-detect";
import { Route, useNavigate, useHis } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Alert } from "react-bootstrap";


const Login = () => {
  let [status, setStatus] = useState("");
  let [token, setToken] = useState("");
  let [email, setName] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate([]);

  const loginSubmit = () => {

    axios.get("https://api.ipify.org/?format=json").then((resp_ip) => {
      let obj = {
        email: email,
        password: password,
        ip: resp_ip.data.ip,
        device: browserName + " on " + osName,
      };
      console.log(obj);
      console.log(JSON.stringify(obj));

      axios
        .post("http://127.0.0.1:8000/api/login", obj)
        .then((resp) => {
          if (resp.status == 200) {
            let user = {
              userId: resp.data.all_users_id,
              access_token: resp.data.token,
            };
            localStorage.setItem("buyer", JSON.stringify(user));
            setStatus("Correct");
            navigate('/buyer/profile/get');

          }
          else if (resp.status == 203) {
            setStatus(resp.data);
          }
          else {
            console.log(resp.data);
          }

          //console.log(localStorage.getItem("user"));

        })
        .catch((err) => {

        });
    });


  };

  const forgetSubmit = () => {
    console.log(email);
    let obj = {
      email: email,
    };
    axios
      .post("http://127.0.0.1:8000/api/buyer/forget", obj)
      .then((resp) => {
        if (resp.status == 200) {
          alert("Password reset email sent.");
          console.log(resp.data);
        }
        else if (resp.status == 203) {
          setStatus(resp.data);
        }
        else {
          console.log(resp.data);
        }

        //console.log(localStorage.getItem("user"));

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-div">
      <Head />

      <img src={bgI} id="bg-img" className="img-overlay" />
      <div className="reg">
        <div className="reg-content">
          <div className="left-content">
            <div className="reg-img-login"></div>
          </div>
          <div className="right-content">
            <h2>Login</h2>
            <h4>Welcome back to xyz website!</h4>

            <div className="reg-border">
              <form>
                <label>Email</label>
                <input
                  type="Email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>
                  <p id="output">{status}</p>
                </span>

                {/* <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  name="logedin"
                /> */}
                <label className="form-check-label text-warning" onClick={forgetSubmit}>Forgot Password?
                </label>
                <br />
              </form>
              <button onClick={loginSubmit}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
