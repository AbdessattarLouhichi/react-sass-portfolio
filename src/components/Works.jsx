import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import images from '../image/images';

const Works = () => {
  return (
    <>
       <section className="skills  background2" id='works'>
        <div className="container flex ptop">
          <div className="left">
            <div className="heading">
              <div className="heading_top flex">
                <div className="line"></div>
                <div className="line line2"></div>
                <i><FontAwesomeIcon icon={faCircle} /></i>
                <h3> Expertise</h3>
              </div>
              <div className="heading_bottom">
                <h2><span>My Skills & Tools </span></h2>
              </div>
            </div>

            <div className="text">
              <h3>Every Day is a New Challenge</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. </p>

              <button className="btn2 btn3">Hire Me</button>
            </div>
          </div>


          <div className="right">
            { /* line skill bars */}
            <div className="line_content">
              <div className="line flex1">
                <p>ADOBE PHOTOSHOP</p>
                <div className="bar">
                  <div className="line_bar html"> </div>
                </div>
                <h5>85</h5>
              </div>

              <div className="line">
                <p>ADOBE ILLUSTRATOR</p>
                <div className="bar">
                  <div className="line_bar css"></div>
                </div>
                <h5>75</h5>
              </div>

              <div className="line">
                <p>ADOBE XD</p>
                <div className="bar">
                  <div className="line_bar photo"> </div>
                </div>
                <h5>65</h5>
              </div>
            </div>
            </div>
            { /* line skill bars */}


            <div className="skill-container flex1">
              <div className="circle_box">
                <svg className="skill-circle" height="150" width="150">
                  <circle cx="-40" cy="10" r="48" strokeDasharray="224px" transform="translate(50,50) rotate(-90)"></circle>
                  <text id="text1" x="40" y="100" fill="#fff" fontFamily="Verdana" fontSize="28">80</text>
                </svg>
                <h4>AFTER EFFECTS</h4>
              </div>

              <div className="circle_box">
                <svg className="skill-circle" height="150" width="150">
                  <circle cx="-40" cy="10" r="48" strokeDasharray="224px" transform="translate(50,50) rotate(-90)"></circle>
                  <text id="text1" x="40" y="100" fill="#fff" fontFamily="Verdana" fontSize="28">56</text>
                </svg>
                <h4>DREAM WEAVER </h4>
              </div>

              <div className="circle_box">
                <svg className="skill-circle" height="150" width="150">
                  <circle cx="-40" cy="10" r="48" strokeDasharray="224px" transform="translate(50,50) rotate(-90)"></circle>
                  <text id="text1" x="40" y="100" fill="#fff" fontFamily="Verdana" fontSize="28">60</text>
                </svg>
                <h4>HTML/JAVSCRIPT </h4>
              </div>

              <div className="circle_box">
                <svg className="skill-circle" height="150" width="150">
                  <circle cx="-40" cy="10" r="48" strokeDasharray="224px" transform="translate(50,50) rotate(-90)"></circle>
                  <text id="text1" x="40" y="100" fill="#fff" fontFamily="Verdana" fontSize="28">70</text>
                </svg>
                <h4>WORDPRESS </h4>
              </div>
            </div>
          </div>
      </section>
      <section className="portfolio mtop">
        <div className="container">
          <div className="content flex1">
            <div className="heading">
              <div className="heading_top flex">
                <div className="line"></div>
                <div className="line line2"></div>
                <i><FontAwesomeIcon icon={faCircle} /></i>
                <h3> Portfolio</h3>
              </div>
              <div className="heading_bottom">
                <h2><span>My Creative Work </span></h2>
              </div>
            </div>

            <ul className="filter-menu">
              <li data-target="all">All</li>
              <li data-target="web">WEB DESIGN</li>
              <li data-target="logo">LOGO DESIGN</li>
              <li data-target="branding">BRANDING</li>
              <li data-target="apps">APPS DESIGN</li>
            </ul>
          </div>

          { /* Filter portfolio */}
          <div className="box">
            <ul className="filter-item">
              <li className="filter_container" style={{flexGrow: 1}} data-item="web">
                <img src={images.p1} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
              <li className="filter_container" style={{flexGrow: 1}} data-item="logo">
                <img src={images.p2} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
              <li className="filter_container" style={{flexGrow: 8}} data-item="web">
                <img src={images.p3} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
              <li className="filter_container" style={{flexGrow: 2}} data-item="logo">
                <img src={images.p4} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
              <li className="filter_container" data-item="web">
                <img src={images.p5} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
              <li className="filter_container" data-item="branding">
                <img src={images.p6} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
              <li className="filter_container" data-item="branding">
                <img src={images.p7} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
              <li className="filter_container" data-item="apps">
                <img src={images.p8} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                    <h3>Illustrator Design</h3>
                    <p>Mockup, Design, Inspiration </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          { /* Filter portfolio */}
        </div>
      </section>
    </>
  )
}

export default Works