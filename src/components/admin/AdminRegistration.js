import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { Components } from "react";
import { useNavigate } from "react-router-dom";
import AdminHead from './AdminHead';

const AdminRegistration = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passport, setPassport] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [nid, setNid] = useState("");
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Registration';
    }, []);

    // console.log(username);
    const handleform = (event) => {
        event.preventDefault();
        const data = { first_name: first_name, last_name: last_name, email: email, password: password, dob: dob, gender: gender, nid: nid, passport: passport, phone: phone, photo: photo, address: address };

        axios.post("http://127.0.0.1:8000/api/adminregistration", data).
            then((resp) => {



                console.log(resp.data);


                // navigate('/login');
            }, (err) => {

                setErrors(err.response.data);
                console.log(err);


            })

    }


    return (
        <>
            <AdminHead></AdminHead>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <div className="shadow p-5 mb-5 bg-body rounded">

                            <form action="" onSubmit={handleform}>
                                <div className="row align-items-center">
                                    <div className="mb-3 col-md-3 ps-4">
                                        <h3 className="mb-5">Admin Registration</h3>
                                    </div>
                                </div>




                                <div className="row align-items-center ">

                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example1cg">FirstName</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="text" id="form3Example1cg" name="first_name" className="form-control" value={first_name} onChange={(e) => { setFirstName(e.target.value) }} />
                                        <span className="text-danger">{errors.first_name ? errors.first_name[0] : ''}</span>
                                    </div>
                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example1cg">LastName</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="text" id="form3Example1cg" name="last_name" className="form-control" value={last_name} onChange={(e) => { setLastName(e.target.value) }} />
                                        <span className="text-danger">{errors.last_name ? errors.last_name[0] : ''}</span>
                                    </div>



                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example1cg">Email address</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="email" className="form-control" name="email" placeholder="" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        <span className="text-danger">{errors.email ? errors.email[0] : ''}</span>
                                    </div>

                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Examplea8">Nid</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="text" id="form3Examplea8" name="nid" className="form-control " value={nid} onChange={(e) => { setNid(e.target.value) }} />
                                        <span className="text-danger">{errors.nid ? errors.nid[0] : ''}</span>
                                    </div>
                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Examplea8">Passport</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="text" id="form3Examplea8" name="passport" className="form-control " value={passport} onChange={(e) => { setPassport(e.target.value) }} />
                                        <span className="text-danger">{errors.passport ? errors.passport[0] : ''}</span>
                                    </div>

                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example4cg">Password</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="password" id="form3Example4cg" name="password" className="form-control " value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                        <span className="text-danger">{errors.password ? errors.password[0] : ''}</span>
                                    </div>

                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example4cg">Phone</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type=" " id="form3Example4cg" name="phone" className="form-control " value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                        <span className="text-danger">{errors.phone ? errors.phone[0] : ''}</span>
                                    </div>


                                    <div className="mb-3 col-md-3 ps-4">
                                        <label for="gender">Gender </label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" onChange={(e) => { setGender(e.target.value) }} />
                                            <label className="form-check-label" for="inlineRadio1">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female" onChange={(e) => { setGender(e.target.value) }} />
                                            <label className="form-check-label" for="inlineRadio2">Female</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="Others" onChange={(e) => { setGender(e.target.value) }} />
                                            <label className="form-check-label" for="inlineRadio3">Others</label>
                                        </div>
                                        <span className="text-danger">{errors.gender ? errors.gender[0] : ''}</span>
                                    </div>

                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example1cg">Date of Birth</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="date" name="dob" value={dob} onChange={(e) => { setDob(e.target.value) }} className="form-control" />
                                        <span className="text-danger">{errors.dob ? errors.dob[0] : ''}</span>
                                    </div>

                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example4cg">Address </label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <textarea type="text" className="form-control" rows="3" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Address"></textarea>
                                        <span className="text-danger">{errors.address ? errors.address[0] : ''}</span>
                                    </div>


                                    <div className="mb-3 col-md-3 ps-4">
                                        <label className="form-label" for="form3Example4cg">Photo</label>
                                    </div>
                                    <div className="mb-3 col-md-9 pe-4">
                                        <input type="file" id="form3Example4cg" name="photo" className="form-control " value={photo} onChange={(e) => { setPhoto(e.target.value) }} />
                                        <span className="file-danger">{errors.photo ? errors.photo[0] : ''}</span>
                                    </div>

                                </div>

                                <div className="row align-items-center ">
                                    <div className="mb-3 col-md-5 ps-4 ">
                                        <button type="submit" className="btn btn-success" onClick={handleform}>Registration</button>
                                    </div>

                                    <div className="text-center col-md-7 pe-4">
                                        <p>Already have an account? <a href="/adminlogin">Login</a></p>
                                    </div>

                                </div>


                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </>
    )
}

export default AdminRegistration