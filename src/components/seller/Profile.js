import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from "./axiosConfig";


const SProfile = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/seller/login');
        }

        axiosConfig.get("/sellerprofile/{seller.id}")
            .then(resp => {
                console.log(resp.data);
                setPosts(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <p>
                Welcome to Profile
                <Link></Link>
            </p>

        </div>
    );
}

export default SProfile;