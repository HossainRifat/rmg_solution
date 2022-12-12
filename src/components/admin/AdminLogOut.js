import React, { useState, userEffect } from "react";
import adminaxiosConfig from "./adminaxiosConfig";
import { useNavigate } from "react-router-dom";

const AdminLogOut = () => {

    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user'));



    adminaxiosConfig.post("http://127.0.0.1:8000/api/admin/logout")
        .then(resp => {
            var token = resp.data;
            console.log(token);
            navigate('/adminlogin');
        }).catch(err => {
            console.log(err);
        });

    return (
        <div>

        </div>

    )
}
export default AdminLogOut;  