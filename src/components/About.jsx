import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section className="about background2 " id='about'>
        <div className="container flex ptop">
          <div className="left">
            <div className="dots">
              <i><FontAwesomeIcon icon={faCircle} /></i>
              <i><FontAwesomeIcon icon={faCircle} /></i>
              <i><FontAwesomeIcon icon={faCircle} /></i>
            </div>

            <div className="content mtop">
              <div className="items flex mtop">
                <div className="box">
                  <div className="number">
                    <h5>90+</h5>
                  </div>
                  <div className="text">
                    <h3>Happy Clients</h3>
                  </div>
                </div>
                <div className="box">
                  <div className="number">
                    <h5>100+</h5>
                  </div>
                  <div className="text">
                    <h3>Projects Done</h3>
                  </div>
                </div>
              </div>
              <div className="items flex mtop">
                <div className="box">
                  <div className="number">
                    <h5>15+</h5>
                  </div>
                  <div className="text">
                    <h3>Projects Progresss</h3>
                  </div>
                </div>
                <div className="box">
                  <div className="number">
                    <h5>500+</h5>
                  </div>
                  <div className="text">
                    <h3>Working Hours</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="heading">
              <div className="heading_top flex">
                <div className="line"></div>
                <div className="line line2"></div>
                <i><FontAwesomeIcon icon={faCircle} /></i>
                <h3> About Me </h3>
              </div>
              <div className="heading_bottom">
                <h2><span>Unleash Your Creativity</span></h2>
              </div>
              <h4>A Lead UX & UI Designer based in Canada, with 8+ Years of Experience</h4>
            </div>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="btn2 btn3">Download CV</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About