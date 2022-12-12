import React, { Components } from "react";
import { Link } from "react-router-dom";

const AdminHead = () => {
    return (
        <div>
            <Link to="/adminhome">Home</Link>
            <Link to="/adminregistration">Registration</Link>
            <Link to="/adminlogin">Login</Link>
            <Link to="/adminprofile">Profile</Link>
            <Link to="/adminbuyer">BuyerList</Link>
            <Link to="/adminproduct">ProductList</Link>
            <Link to="/adminlogout">LogOut</Link>
        </div>
    )
}
export default AdminHead;