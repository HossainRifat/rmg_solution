import React, { Component, useState } from "react";
import axios from "axios";
import Head from "./header/Header";
import "./Login.css";
import bgI from "./img/login.jpg";

const Login = () => {
  let [token, setToken] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  const loginSubmit = () => {
    let obj = { username: name, password: password };
    alert(obj.username);

    axios
      .post("http://127.0.0.1:8000/api/login", obj)
      .then((resp) => {
        alert(resp.data);
        let token = resp.token;
        console.log(token);
        let user = { userId: token.userid, access_token: token.token };
        localStorage.setItem("user", JSON.stringify(user));
        console.log(localStorage.getItem("user"));
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
              <form method="post" action="/login">
                <label>Email</label>
                <input
                  type="Email"
                  placeholder="Enter your email"
                  name="email"
                  value={name}
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
                <span></span>

                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  name="logedin"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Stay logged in.
                </label>
                <br />
                <button onClick={loginSubmit}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
