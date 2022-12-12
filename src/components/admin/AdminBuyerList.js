import React, { useState, useEffect } from "react";
import adminaxiosConfig from './adminaxiosConfig';
import { useNavigate } from "react-router-dom";
import AdminHead from "./AdminHead";
const AdminBuyerList = () => {
    const navigate = useNavigate();

    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        adminaxiosConfig.get("buyers/list")
            .then(resp => {
                console.log(resp.data);
                setBuyers(resp.data);
            }).catch(err => {
                console.log(err);
                navigate("/adminlogin");
            });
    }, []);

    return (
        <div>
            <AdminHead></AdminHead>
            <table>
                <tr>
                    <td>ID</td>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>address</td>
                    <td>passport</td>

                    <td>nid</td>
                    <td>gender</td>
                    <td>dob</td>
                    <td>status</td>
                    <td>photo</td>


                    <td>documents</td>
                    <td>account</td>
                    <td>password</td>


                </tr>

                {buyers.map(buyer => (
                    <tr key={buyer.id}>
                        <td >{buyer.first_name}</td>
                        <td >{buyer.last_name}</td>
                        <td >{buyer.email}</td>
                        <td >{buyer.phone}</td>
                        <td >{buyer.address}</td>


                        <td >{buyer.passport}</td>
                        <td >{buyer.nid}</td>
                        <td >{buyer.gender}</td>
                        <td >{buyer.dob}</td>
                        <td>{buyer.status}</td>
                        <td >{buyer.photo}</td>
                        <td >{buyer.documents}</td>
                        <td >{buyer.account}</td>
                        <td >{buyer.password}</td>
                    </tr>
                ))}
            </table>
        </div>

    )

}
export default AdminBuyerList;  