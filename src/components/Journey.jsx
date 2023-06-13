import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import images from '../image/images';


const Journey = () => {
  return (
    <>
       <section className="experience background2" id='journey'>
        <div className="container ptop">
          <div className="heading center">
            <div className="heading_top flex">
              <div className="line"></div>
              <div className="line line2"></div>
              <i><FontAwesomeIcon icon={faCircle} /></i>
              <h3> Employment & Education</h3>
            </div>
            <div className="heading_bottom">
              <h2><span>My Experience Journey </span></h2>
            </div>
          </div>


          <div className="content flex">
            <div className="left">
              <img src={images.e} alt="" />
            </div>
            <div className="right">
             
              <div className="timeline">
                <div className="line">
                </div>
                <div className="content content-1">
                  <section>
                    <i className="icon fas fa-briefcase"></i>
                    <div className="details">
                      <span> Present - 2020</span>
                      <h3>Product Manager / Google</h3>
                    </div>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </div>

                <div className="content content-1">
                  <section>
                    <i className="icon fas fa-graduation-cap"></i>
                    <div className="details">
                      <span> 2016 - 2018</span>
                      <h3>MS Degree / University of Manchester</h3>
                    </div>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </div>

                <div className="content content-1">
                  <section>
                    <i className="icon fas fa-book-open"></i>
                    <div className="details">
                      <span> 2013 - 2016</span>
                      <h3>Lead UI Designer / Apple Inc.</h3>
                    </div>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </div>

                <div className="content content-1">
                  <section>
                    <i className="icon fab fa-acquisitions-incorporated"></i>
                    <div className="details">
                      <span> 2009 - 2013</span>
                      <h3>BA Degree / London School of Arts</h3>
                    </div>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </div>
              </div>
             
            </div>
          </div>
          </div>
      </section>



      <section className="Testimonials mtop">
        <div className="container flex">
          <div className="left">
            <div className="heading">
              <div className="heading_top flex">
                <div className="line"></div>
                <div className="line line2"></div>
                <i><FontAwesomeIcon icon={faCircle} /></i>
                <h3>Testimonials</h3>
              </div>
              <div className="heading_bottom">
                <h2><span>Happy Clients </span></h2>
              </div>
            </div>

            <div className="img grid top">
              <div className="box">
                <img src={images.t1} alt="" />
              </div>
              <div className="box">
                <img src={images.t2} alt="" />
              </div>
              <div className="box">
                <img src={images.t3} alt="" />
              </div>
              <div className="box">
                <img src={images.t4} alt="" />
              </div>
            </div>
          </div>


          <div className="right">
            <div className="owl-carousel owl-theme">
              <div className="item mtop">
                <div className="image flex1">
                  <img src={images.c1} className="item_img" alt='' />
                  <i className="fas fa-quote-right"></i>
                </div>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. </p>
                  <h4>Alex Ander</h4>
                </div>
              </div>
              <div className="item mtop">
                <div className="image flex1">
                  <img src={images.c2} className="item_img" alt='' />
                  <i className="fas fa-quote-right"></i>
                </div>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. </p>
                  <h4>Alex Ander</h4>
                </div>
              </div>
              <div className="item mtop">
                <div className="image flex1">
                  <img src={images.c3} className="item_img" alt='' />
                  <i className="fas fa-quote-right"></i>
                </div>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. </p>
                  <h4>Alex Ander</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Journey