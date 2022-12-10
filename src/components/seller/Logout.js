
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SLogout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/seller/login');
        }
        else {
            let seller = JSON.parse(localStorage.getItem('seller'));
            var obj = { token: seller.access_token };


            localStorage.clear();
            axios.post("http://127.0.0.1:8000/api/sellerlogout", obj)
                .then(resp => {
                    var token = resp.data;
                    console.log(token);
                    localStorage.clear();
                    navigate('/login');
                }).catch(err => {
                    console.log(err);
                });
        }
    }, []);



    return (
        <div>

        </div>
    )
}

export default SLogout;