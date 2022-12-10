import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './style.css';
import axiosConfig from "./axiosConfig";
import SHead from "./Head";

const Bid = (props) => {

    const { id } = useParams();

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id)
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/seller/login');
        }

        axiosConfig.get("/sellerorders")
            .then(resp => {
                console.log(resp.data);
                setPosts(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (

        <div><SHead></SHead>
            <p>This is Bed</p>
        </div>
    );
}
export default Bid;