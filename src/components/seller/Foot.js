import React, { Components } from "react";
import { Link } from "react-router-dom";
import './style.css';

const SFoot = () => {
    return (
        <div class="footer-basic">

            <footer>

                <ul class="list-inline">
                    <li class="list-inline-item"><Link to="/">Home</Link></li>
                    <li class="list-inline-item"><a href="#">Services</a></li>
                    <li class="list-inline-item"><Link to="/contact">Contact</Link></li>
                    <li class="list-inline-item"><a href="#">Terms</a></li>
                    <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p class="copyright">Company Name © 2018</p>
            </footer>
        </div>
    );
}

export default SFoot;