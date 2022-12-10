import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import bgV from "./img/home-video2.mp4";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <section
          className="section main-banner"
          id="top"
          data-section="section1"
        >
          <video autoPlay loop muted id="bg-video">
            <source src={bgV} type="video/mp4" />
          </video>

          <div className="video-overlay header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="caption">
                    <h6>Hello</h6>
                    <h2>Welcome to RMG Solution</h2>
                    <p>
                      This is an edu meeting HTML CSS template provided by{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/page/1"
                        target="_blank"
                      >
                        TemplateMo website
                      </a>
                      . This is a Bootstrap v5.1.3 layout. The video background
                      is taken from Pexels website, a group of young people by{" "}
                      <a
                        rel="nofollow"
                        href="https://www.pexels.com/@pressmaster"
                        target="_blank"
                      >
                        Pressmaster
                      </a>
                      .
                    </p>
                    <div className="main-button-red">
                      <div className="scroll-to-section">
                        <Link to="/buyer/registration">Hire Garments</Link>
                      </div>
                    </div>
                    <div className="main-button-blur">
                      <div className="scroll-to-section">
                        <Link to="/seller">
                          Register as a Garments owner
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
