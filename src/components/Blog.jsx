import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import images from '../image/images';

const Blog = () => {
  return (
    <>
       <section className="blog background2" id='blog'>
        <div className="container">
          <div className="heading heading2">
            <div className="heading_top flex">
              <div className="line"></div>
              <div className="line line2"></div>
              <i><FontAwesomeIcon icon={faCircle} /></i>
              <h3>News & Blog </h3>
            </div>
            <div className="heading_bottom">
              <h2><span>Some Tips & Activity </span></h2>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="box">
                <img src={images.b1} alt='' />
                <div className="text">
                  <p>18 Sep, 2020 - Design </p>
                  <h4>The Shocking Revelation of Portfolio</h4>
                </div>
              </div>
            </div>
            <div className="column column2">
              <div className="box">
                <img src={images.b2} alt='' />
                <div className="text">
                  <p>18 Sep, 2020 - Design </p>
                  <h4>The Shocking Revelation of Portfolio</h4>
                </div>
              </div>
              <div className="box">
                <img src={images.b4} alt='' />
                <div className="text">
                  <p>18 Sep, 2020 - Design </p>
                  <h4>The Shocking Revelation of Portfolio</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <img src={images.b3} alt="" />
                <div className="text">
                  <p>18 Sep, 2020 - Design </p>
                  <h4>The Shocking Revelation of Portfolio</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Blog