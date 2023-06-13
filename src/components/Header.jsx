import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  

  return (
    <>
      <header className="header sticky">
        <div className="container">
          <nav className="navbar">
            <div>
              <NavLink to="/" className="nav-logo">
                <img src={logo} alt="" />
              </NavLink>
            </div>

            <ul className={toggle? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/"  className={({isActive})=> isActive? "nav-link active" : "nav-link" }  >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about"  className={({isActive})=> isActive? "nav-link active" : "nav-link" } >about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services"  className={({isActive})=> isActive? "nav-link active" : "nav-link" }>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/works"  className={({isActive})=> isActive? "nav-link active" : "nav-link" }>works</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/journey"  className={({isActive})=> isActive? "nav-link active" : "nav-link" }>journey</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog"  className={({isActive})=> isActive? "nav-link active" : "nav-link" }>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({isActive})=> isActive? "nav-link active" : "nav-link" }>Contact</NavLink>
              </li>
            </ul>
            <div onClick={() => setToggle(!toggle)} className={toggle? "hamburger active" : "hamburger"} >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
