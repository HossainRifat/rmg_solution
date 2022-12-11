import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, FormControl } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    first_name: yup.string().required("Name is required").min(3, "Name must be at least 3 character").max(50).matches(/^[a-zA-Z ,.'-]+$/, "Invalid name"),
    last_name: yup.string().required("Name is required").min(3, "Name must be at least 3 character").max(50).matches(/^[a-zA-Z ,.'-]+$/, "Invalid name"),
    address: yup.string().required("Address is required").min(3, "Address must be at least 3 character").max(1000).matches(/^[#.0-9a-zA-Z\s,-]+$/i, "Invalid address"),
    dob: yup.string().required("Date-of-birth is required"),
    gender: yup.string("Gender is required").required("Gender is Required").nullable(),
    email: yup.string().required("Email is required").email("Invalid email"),
    photo: yup.mixed().required('A file is required'),

});


const SRegister = () => {

    let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [first_name, setFname] = useState("");
    let [last_name, setLname] = useState("");
    let [phone, setPhone] = useState("");
    let [gender, setGender] = useState("");
    let [dob, setDob] = useState("");
    let [address, setAddress] = useState("");


    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (seller) {
            navigate('/seller');
        }
    }, []);


    const saveData = () => {
        var obj = { email: email, password: password, first_name: first_name, last_name: last_name, };

        axios.post("http://127.0.0.1:8000/api/sellerregister", obj)
            .then(resp => {

                var token = resp.data;
                console.log(resp.data);

                var seller = { sellerId: token.id, access_token: token.token };
                localStorage.setItem('seller', JSON.stringify(seller));
                console.log(localStorage.getItem('seller'));
                if (token == "No user found") {
                    navigate('/login');
                } else {
                    navigate('/')
                }
            }).catch(err => {
                console.log(err.response.data);
            });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
    }


    return (
        <Form onSubmit={registerSubmit}>

            <MDBContainer fluid>
                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                                <MDBCol md='12' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <span> <p>{errors.email?.message}</p> </span>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput label='Photo' id='form1' type='file' className='w-100' value={last_name} onChange={(last_name) => setLname(last_name.target.value)} />
                                        <span> <p>{errors.last_name?.message}</p> </span>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput label='NID' id='form1' type='file' className='w-100' value={last_name} onChange={(last_name) => setLname(last_name.target.value)} />
                                        <span> <p>{errors.last_name?.message}</p> </span>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput label='Passport' id='form1' type='file' className='w-100' value={last_name} onChange={(last_name) => setLname(last_name.target.value)} />
                                        <span> <p>{errors.last_name?.message}</p> </span>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput label='Account' id='form1' type='file' className='w-100' value={last_name} onChange={(last_name) => setLname(last_name.target.value)} />
                                        <span> <p>{errors.last_name?.message}</p> </span>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput label='Password' id='form3' type='password' onChange={(password) => setPassword(password.target.value)} />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="key me-3" size='lg' />
                                        <MDBInput label='Repeat your password' id='form4' type='password' />
                                    </div>

                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                    </div>

                                    <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

                                </MDBCol>

                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </Form>
    );
}

export default SRegister;