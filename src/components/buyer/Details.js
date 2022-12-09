import buyerAxiosConfig from "./dashboard/buyerAxiosConfig";
import "./Posts.css";
import Header2 from "./header/Header2";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./Details.css";
import { useEffect } from "react";
import { Route, useNavigate, useHis, useParams } from "react-router-dom";
import React, { Component, useState } from "react";


const Details = () => {
    const id = useParams().id;
    let navigate = useNavigate([]);
    const [post, setPost] = useState([]);
    const [bid, setBid] = useState([]);
    const [price, setPrice] = useState([]);
    const [quantity, setQuantity] = useState([]);



    useEffect(() => {

        buyerAxiosConfig
            .get("/buyer/post/details/" + id)
            .then((resp) => {
                if (resp.status == 200) {
                    console.log(resp.data);
                    setPost(resp.data.post);
                    setBid(resp.data.post.bid);
                    setQuantity(resp.data.quantity);
                    setPrice(resp.data.price);

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
    }, []);

    return (
        <div>
            <div><Header2></Header2></div>
            <div>
                <section className="banner-main py-7" id="banner">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-7 col-md-8">
                                <div className="main-banner">
                                    <span className="text-color font-weight-bold">{post.category}</span>
                                    <h1 className="mb-3 mt-2">
                                        {post.title}
                                    </h1>

                                    <div className="mb-4">
                                        <h4>Price per unit:- <span className="text-color"> ${post.price}</span></h4>
                                    </div>


                                    <div className="mb-4"><h4>Quantity:- <span className="text-color">{quantity} PC</span></h4>     </div>
                                    <div className="mb-4"><h4>Total Price:- <span className="text-color">${price}</span></h4></div>

                                    <div className="mb-4">
                                        <h4>Delivery:- <span className="text-color">{post.expire_date}</span></h4>
                                    </div>
                                    <h5 className="mb-4"> Description:</h5>
                                    <p className="mb-4">{post.description}</p>
                                    <p className="mb-4">{post.quantity}</p>

                                    <Link className="mb-4 link-primary" to="">Download design</Link>
                                </div>
                            </div>

                            <div className="col-lg-5 d-none d-lg-block">
                                <div className="banner-img pt-5">
                                    <img src="https://i.imgur.com/QpjAiHq.jpg" alt="" className="img-fluid w-100 sticky-top" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="col-auto">
                    <div className="d-flex justify-content-center row">
                        <h1>{bid.length} Bids in total</h1>
                        <hr />
                        <div className="col-md-10">
                            {bid.map(post => (
                                <div className="row p-2 bg-white border rounded bid-shad shadow">
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
                                        <h6 className="text-success">{post.bid_date}</h6><br /><br /><br />
                                        <div className="d-flex flex-column mt-4"><Link className="btn btn-primary btn-sm" to={"/buyer/post/details/" + post.id}>Confirm</Link> </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

};

export default Details;