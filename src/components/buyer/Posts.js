import React, { Component, useState } from "react";
import axios from "axios";
import Head from "./header/Header";
import { browserName, osName } from "react-device-detect";
import { Route, useNavigate, useHis, useParams } from "react-router-dom";
import Header2 from "./header/Header2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Posts.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import buyerAxiosConfig from "./dashboard/buyerAxiosConfig";

const Posts = () => {
    let navigate = useNavigate([]);
    const [posts, setPosts] = useState([]);
    let [searchd, setSearchd] = useState([]);
    const [sortVal, setsortVal] = useState([]);
    const id = useParams().id;
    console.log(id);

    useEffect(() => {

        buyerAxiosConfig
            .get("/buyer/posts/" + id)
            .then((resp) => {
                if (resp.status == 200) {
                    console.log(resp.data);
                    setPosts(resp.data);
                }
                else {
                    console.log(resp.data);
                    navigate("/login");
                }

            })
            .catch((err) => {
                console.log(err);
                //navigate("/login");
            });
    }, [id]);

    const search = () => {

        buyerAxiosConfig
            .get("/buyer/posts/search/" + searchd)
            .then((resp) => {
                if (resp.status == 200) {
                    console.log(resp.data);
                    setPosts(resp.data);
                }
                else {
                    console.log(resp.data);
                    // navigate("/login");
                }

            })
            .catch((err) => {
                console.log(err);
                //navigate("/login");
            });
    }

    // const sort = () => {
    //     buyerAxiosConfig
    //         .get("/buyer/posts/" + id)
    //         .then((resp) => {
    //             if (resp.status == 200) {
    //                 console.log(resp.data);
    //                 setPosts(resp.data);
    //             }
    //             else {
    //                 console.log(resp.data);
    //                 // navigate("/login");
    //             }

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             //navigate("/login");
    //         });
    // }

    return (
        <div className="posts-body">
            <div>
                <Header2></Header2>
            </div>

            <div className="container mt-5 mb-5 my-cart">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                        {posts.map(post => (
                            <div className="row p-2 bg-white border rounded posts-shad">
                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg" /></div>
                                <div className="col-md-6 mt-1">
                                    <h5>{post.title}</h5>
                                    <span className="text-xs">{post.post_date}</span>
                                    <div className="d-flex flex-row">
                                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>{post.quantity}</span>
                                    </div>
                                    <div className="mt-1 mb-1 spec-1"><span>{post.category}</span><span className="dot"></span></div>

                                    <p className="text-justify para mb-0">{post.description}<br /><br /></p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div className="d-flex flex-row align-items-center">
                                        <h4 className="mr-1">${post.price}</h4><span className="strike-text">{" per unit"}</span>
                                    </div>
                                    <h6 className="text-success">Delivery</h6>
                                    <h6 className="text-success">{post.expire_date}</h6><br /><br /><br />
                                    <div className="d-flex flex-column mt-4"><Link className="btn btn-primary btn-sm" to={"/buyer/post/details/" + post.id}>Details</Link> </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-container">

                <div className="search">
                    <input type="search" name="search" onChange={(e) => setSearchd(e.target.value)} onKeyUp={search} placeholder="Search here.." />
                </div>
                <div className="posts-hed">
                    <h5 className="text-light">Short By</h5>
                </div>
                <div className="posts-short">
                    <ul>
                        <li> <input className="form-check-input" type="checkbox" /><Link to="/buyer/post/atoz" className="text-dark">Title A to Z</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="/buyer/post/ztoa" className="text-dark">Title Z to A</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="/buyer/posts/cat/AtoZ" className="text-dark">Category A to Z</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="/buyer/posts/cat/ZtoA" className="text-dark">Category Z to A</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="/buyer/posts/date/1to9" className="text-dark">Delivary date 1 to 9</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="/buyer/posts/date/9to1" className="text-dark">Delivary date 9 to 1</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="/buyer/posts/quantity/1to9" className="text-dark">Quantity 1 to 9</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="/buyer/posts/quantity/9to1" className="text-dark">Quantity 9 to 1</Link></li>
                    </ul>
                </div>
                <div className="posts-hed">
                    <h5 className="text-light">Filter By</h5>
                </div>
                <div className="posts-short">
                    <ul>
                        <li><input className="form-check-input" type="checkbox" /><Link to="" className="text-dark">Price 1000 - 10,000</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="" className="text-dark">Price 10,000 - 100,000</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="" className="text-dark">Price 100,000+</Link></li>
                        <li><input className="form-check-input" type="checkbox" /><Link to="" className="text-dark">Quantity 100 - 500</Link></li>


                        <li><input className="form-check-input" type="checkbox" /><Link to="" className="text-dark">Quantity 2000+</Link></li>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Posts;