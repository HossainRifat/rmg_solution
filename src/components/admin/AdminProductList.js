import React, { useState, useEffect } from "react";
import adminaxiosConfig from './adminaxiosConfig';
import { useNavigate } from "react-router-dom";
import AdminHead from "./AdminHead";
const AdminProductList = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        adminaxiosConfig.get("products/list")
            .then(resp => {
                console.log(resp.data);
                setProducts(resp.data);
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
                    <td> Id</td>

                    <td>ProductName</td>

                    <td>Description</td>
                    <td>CompanyId</td>
                    <td>Price(per unit)</td>

                </tr>

                {products.map(product => (

                    <tr key={product.id}>

                        <td>{product.id}</td>
                        <td >{product.product_name}</td>

                        <td >{product.description}</td>

                        <td >{product.company_id}</td>
                        <td >{product.price_per_unit}</td>
                    </tr>
                ))}


            </table>

        </div>

    )

}
export default AdminProductList;  