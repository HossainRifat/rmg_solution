import React, { useState, useEffect } from "react";

import adminaxiosConfig from './adminaxiosConfig';
import { Link } from "react-router-dom";
import { Form, Row, Col, Button, FormControl } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import AdminHead from "./AdminHead";

const AdminLogin = () => {
    let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Login';
    }, []);

    const loginSubmit = (event) => {
        event.preventDefault();
        var data = { email: email, password: password };
        console.log(data);
        adminaxiosConfig.post("http://127.0.0.1:8000/api/adminlogin", data)
            .then(resp => {
                alert(resp.data);

                var token = resp.data;

                console.log(token);
                var admin = { userId: token.id, access_token: token.token_ad };
                localStorage.setItem('admin', JSON.stringify(admin));
                console.log(localStorage.getItem('admin'));
                if (token == "no user found") {
                    navigate('/adminlogin');
                    // window.location.href = "/login";
                } else {
                    navigate('/adminprofile');
                    // window.location.href = "./profile";

                }
            }).catch(err => {
                console.log(err);
            });


    }
    return (
        <div>
            <AdminHead></AdminHead>
            <Row className="justify-content-md-center"><Col xs lg="3">
                <Form>

                    <h3>Admin Login</h3>
                    <Row className="justify-content-md-center">

                        <Form.Group className="mb-4" >
                            <Col xs lg="20">
                                <Form.Label>Email address</Form.Label>
                            </Col>
                            <Col xs lg="20">
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group className="mb-4" controlId="formGroupPassword">
                            <Col xs lg="20">
                                <Form.Label>Password</Form.Label>
                            </Col>

                            <Col xs lg="20">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Col>
                        </Form.Group>
                    </Row>

                    <div class="form-group form-button">
                        <Col xs lg="20">
                            <Button className="form-submit" onClick={loginSubmit}>Login</Button>
                        </Col>

                    </div>
                    <div>
                        <br />
                        <Button className="btn-secondary text-black" ><Link to="/adminregistration" >Create Account</Link></Button>
                    </div>

                </Form></Col></Row>
        </div>
    )
}
export default AdminLogin; 