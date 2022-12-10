import React, { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SHead from "./Head";

const SHome = () => {

    const navigate = useNavigate();

    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/seller/login');
        }
    }, []);

    return (
        <div className="App">
            <SHead></SHead>
            <p>
                Seller Homepage
            </p>
            Current Available Bids:
            <br />
            Orders to Deliver:
            <br />
            Pending Bids:

        </div>
    );
}

export default SHome;