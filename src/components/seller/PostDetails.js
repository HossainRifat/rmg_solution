import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './style.css';
import axiosConfig from "./axiosConfig";


const SPostDetails = (props) => {

    const { id } = useParams();

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id)
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/seller/login');
        }

        axiosConfig.get("/postdetails/" + id)
            .then(resp => {
                console.log(resp.data);
                setPosts(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <div >
            <div >
                <h1>This is post details</h1>
            </div>
        </div>
    );
}

export default SPostDetails;