import React, { Components, useState, useEffect } from "react";
import PostDetails from "./PostDetails";
import axiosConfig from "./axiosConfig";
import axios from "axios";
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import SHead from "./Head";

const SellerBids = () => {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/login');
        }

        axiosConfig.get("/sellerorders/1")
            .then(resp => {
                console.log(resp.data);
                setOrders(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <SHead></SHead>
            <table className="table table-responsive{md-5}">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Order_date</th>
                    <th>Delivery_date</th>
                    <th>Seller_id</th>
                    <th>Product_id</th>
                    <th>Buyer_id</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                {orders.map(order => (

                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.title}</td>
                        <td>{order.description}</td>
                        <td>{order.quantity}</td>
                        <td>{order.price}</td>
                        <td>{order.order_date}</td>
                        <td>{order.delivery_date}</td>
                        <td>{order.seller_id}</td>
                        <td>{order.product_id}</td>
                        <td>{order.buyer_id}</td>
                        <td>{order.status}</td>
                        <td><Button variant="primary"><Link to={"/orderdetails/" + order.id} >Details</Link></Button></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default SellerBids;