import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, FormControl } from 'react-bootstrap';
import SHead from "./Head";

const SLogin = () => {
    let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (seller) {
            navigate('/');
        }
    }, []);

    const loginSubmit = () => {
        var obj = { email: email, password: password };

        axios.post("http://127.0.0.1:8000/api/sellerlogin", obj)
            .then(resp => {

                var token = resp.data;
                console.log(resp.data);

                var seller = { sellerId: token.id, access_token: token.token };
                localStorage.setItem('seller', JSON.stringify(seller));
                console.log(localStorage.getItem('seller'));
                if (token == "No user found") {
                    navigate('/seller/login');
                } else {
                    navigate('/seller')
                }
            }).catch(err => {
                console.log(err.response.data);
            });
    }

    return (
        <div><Row className="justify-content-md-center"><Col xs lg="10">
            <SHead></SHead>
            <Form>
                <Row className="justify-content-md-center">

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Col xs lg="2">
                            <Form.Label>Email address</Form.Label>
                        </Col>
                        <Col xs lg="2">
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(email) => setEmail(email.target.value)} />
                        </Col>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Col xs lg="2">
                            <Form.Label>Password</Form.Label>
                        </Col>

                        <Col xs lg="2">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(password) => setPassword(password.target.value)} />
                        </Col>
                    </Form.Group>
                </Row>

                <div class="form-group form-button">
                    <Button className="form-submit" onClick={loginSubmit}>Login</Button>
                </div>
                <div>
                    OR<br />
                    <Link to="/sellerregister" ><Button className="btn-secondary" >Create Account</Button></Link>
                </div>

            </Form></Col></Row>
        </div>
    )
}
export default SLogin; 