import AdminHead from "./AdminHead";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import adminaxiosConfig from './adminaxiosConfig';
import { useNavigate } from "react-router-dom";
const AdminProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfiles] = useState([]);

    useEffect(() => {

        adminaxiosConfig.get("admin/profile")
            .then((resp) => {
                console.log(resp.data);
                setProfiles(resp.data);
            })
            .catch((err) => {
                console.log(err);
                navigate("/adminlogin");

            });

    }, []);
    return (
        <div>
            <AdminHead></AdminHead>
            <table>




                <tr key={profile.id}>
                    <tr>ID ={profile.id}</tr>

                    <tr>FirstName:{profile.first_name}</tr>


                    <tr>LastName{profile.last_name}</tr>

                    <tr>Email:{profile.email}</tr>
                    <tr>Address:{profile.address}</tr>
                    <tr>Phone:{profile.phone}</tr>
                    <tr>Nid:{profile.nid}</tr>

                    <tr>Passport:{profile.passport}</tr>

                </tr>


            </table>
        </div>
    )
}
export default AdminProfile;