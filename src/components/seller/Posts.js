import React, { Components, useState, useEffect } from "react";
import SPostDetails from "./PostDetails";
import axiosConfig from "./axiosConfig";
import axios from "axios";
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBIcon,
    MDBBtn,
} from "mdb-react-ui-kit";
import SHead from "./Head";

const SPosts = () => {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        var seller = localStorage.getItem('seller');
        if (!seller) {
            navigate('/seller/login');
        }

        axiosConfig.get("http://127.0.0.1:8000/api/postlist")
            .then(resp => {
                console.log(resp.data);
                setPosts(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);
    // function getPhoto(post) {
    //     axiosConfig.get('../assets/uploads/post_' + post.id + '_' + post.photo)
    //         .then(resp => {
    //             console.log(resp.data);
    //             var pic = setPhoto(resp.data);
    //             return pic;
    //         }).catch(err => {
    //             console.log(err);
    //         });
    // }
    return (
        <div>
            <SHead></SHead>
            <MDBContainer fluid className="my-6">
                <MDBRow>

                    {posts.map(post => (
                        /*
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>{post.quantity}</td>
                            <td>{post.price}</td>
                            <td>{post.post_date}</td>
                            <td>{post.expire_date}</td>
                            <td>{post.photo}</td>
                            <td>{post.buyer_id}</td>
                            <td>{post.status}</td>
                            <td><Button variant="primary"><Link  to={"/postdetails/"+post.id} >Details</Link></Button></td>
                            <td><Button variant="warning">Bid</Button></td>
                        </tr>
*/
                        <MDBCol md="4" className="mb-5 mb-lg-0">
                            <MDBCard className="text-black">
                                {/* {getPhoto(post)} */}
                                <MDBCardImage
                                    src={photo}
                                    position="top"
                                    alt={post.title}
                                />
                                <MDBCardBody>
                                    <div className="text-center mt-1">
                                        <MDBCardTitle className="h4">{post.title}</MDBCardTitle>
                                        <h6 className="text-primary mb-1 pb-3">Quantity: {post.quantity}</h6>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="p-3 mx-n3 mb-4"
                                            style={{ backgroundColor: "#eff1f2" }}
                                        >
                                            <h5 className="mb-0">Price: {post.price}</h5>
                                        </div>

                                        <div className="d-flex flex-column mb-4">
                                            <span className="h1 mt-4 mb-0"></span>
                                            <span>Post Date: {post.post_date}</span>
                                            <span>Expire Date: {post.expire_date}</span>
                                        </div>

                                        <div className="d-flex flex-column mb-4">
                                            <span className="h1 mb-0">
                                                <MDBIcon fas icon="camera-retro" />
                                            </span>Description: <br />{post.description}
                                        </div>

                                        <div className="d-flex flex-column mb-4">
                                            <span className="h1 mb-0">{post.status}</span>

                                        </div>



                                    </div>

                                    <div className="d-flex flex-row">
                                        <MDBBtn
                                            color="primary"
                                            rippleColor="dark"
                                            className="flex-fill ms-1">
                                            <Link to={"/postdetails/" + post.id} >
                                                Details
                                            </Link>
                                        </MDBBtn>
                                        <Link to={"/postdetails/" + post.id} >
                                            <MDBBtn color="danger" className="flex-fill ms-2">
                                                Bid
                                            </MDBBtn>
                                        </Link>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    ))}


                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default SPosts;