import React, { Component, useState } from "react";
import axios from "axios";
import Head from "./header/Header";
import "./Login.css";
import bgI from "./img/login.jpg";
import { browserName, osName } from "react-device-detect";
import { Route, useNavigate, useHis } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlane } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const BuyerContact = () => {
    let [status, setStatus] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    const form = useRef();
    let navigate = useNavigate([]);

    const sendEmail = (e) => {
        e.preventDefault();
        let obj = {
            name: name,
            email: email,
            message: message,
        };
        //console.log(obj);
        emailjs.sendForm('service_yb9acim', 'template_bv2pu64', form.current, 'ycX6W0QSHNmEtuWfi')
            .then((result) => {
                console.log(result.text);
                alert("Mail Sent. Thank you for your feedback.")
            }, (error) => {
                console.log(error.text);
            });



        // console.log(form.current)
        // emailjs.sendForm('service_yb9acim', 'template_bv2pu64', form.current, 'ycX6W0QSHNmEtuWfi')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    }

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
                        <h2>Contact Us</h2>
                        <h4>Tell us your thoughts on us</h4>

                        <div className="reg-border">
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Email</label>
                                <input
                                    type="Email"
                                    placeholder="Enter your email"
                                    name="user_email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="from_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label>Message</label>
                                <textarea
                                    type="text"
                                    placeholder="Enter your message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="4"
                                ></textarea>
                                <span>
                                    <p id="output">{status}</p>
                                </span>
                                <br />
                                <button onClick={sendEmail}>Send <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BuyerContact;
