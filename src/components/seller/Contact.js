import React, { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from './Head';

const SContact = () => {
    const navigate = useNavigate();

    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/login');
        }
    }, []);

    return (
        <div className="App">
            <Head></Head>
            <p>
                Welcome to Contact
            </p>


        </div>
    );
}

export default SContact;