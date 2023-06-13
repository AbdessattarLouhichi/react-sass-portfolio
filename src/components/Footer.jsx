import React from 'react'
import logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="content grid">
                <div className="box">
                <h4>Solutions</h4>
                <ul>
                    <li>Control</li>
                    <li>Scalability & Effciency</li>
                    <li>Supported by Experts</li>
                    <li>Performance & Security</li>
                </ul>
                </div>

                <div className="box">
                <h4>Links</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Work</li>
                    <li>Journey</li>
                </ul>
                </div>

                <div className="box">
                <h4>Resources</h4>
                <ul>
                    <li>Case Studies</li>
                    <li>Blog</li>
                    <li>I'm a Clients</li>
                </ul>
                </div>

                <div className="box">
                <h4>Company</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Contact Us</li>
                </ul>
                </div>

                <div className="box">
                <div className="text">
                    <span>123-456-7896</span><br />
                    <label>Support@email.com</label><br />
                    <p>Nepal, Kathmandu Baniyatar</p>
                </div>

                <div className="icon flex1">
                    <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></i>
                    <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i>
                    <i className="fab fa-youtube"><FontAwesomeIcon icon={faYoutube} /></i>
                    <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
                    <i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin} /></i>
                </div>
                </div>
            </div>

            <div className="legal flex1">
                <div className="box">
                <p>Copyright (c) 2021 Copyright Holder All Rights Reserved.</p>
                </div>
                <div className="box flex">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer