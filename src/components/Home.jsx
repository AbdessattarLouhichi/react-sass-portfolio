import React from "react";
import homePhoto from "../image/home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container flex mtop">
          <div className="left">
            <div className="heading">
              <div className="heading_top flex">
                <div className="line"></div>
                <div className="line line2"></div>
                <i><FontAwesomeIcon icon={faCircle} /></i>
                <h3>UI/UX Designer</h3>
              </div>
              <div className="heading_bottom">
                <h1>
                  <span>Smith</span> Johnson
                </h1>
              </div>
            </div>

            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="button">
              <button className="btn1">BIOGRAPHY</button>
              <button className="btn2">Hire Me</button>
            </div>
          </div>

          <div className="right">
            <div className="dots">
              <i>
                <FontAwesomeIcon icon={faCircle} />
              </i>
              <i>
                <FontAwesomeIcon icon={faCircle} />
              </i>
              <i>
                <FontAwesomeIcon icon={faCircle} />
              </i>
            </div>

            <img src={homePhoto} alt="" />

            <div className="icon flex">
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
