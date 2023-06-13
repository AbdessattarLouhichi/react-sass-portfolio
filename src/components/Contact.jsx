import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";



const Contact = () => {
  return (
    <>
      <section className="contact" id='contact'>
        <div className="container flex ptop">
          <div className="left">
            <img src="image/logo.png" alt="" />
            <div className="heading">
              <div className="heading_bottom">
                <h2><span>UI/UX </span>Designer</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. </p>
              <h5>Copyright (c) 2021 Copyright Holder All Rights Reserved.</h5>
            </div>
          </div>

          <div className="right">
            <div className="heading">
              <div className="heading_top flex">
                <div className="line"></div>
                <div className="line line2"></div>
                <i><FontAwesomeIcon icon={faCircle} /></i>
                <h3>Any Question? </h3>
              </div>
              <div className="heading_bottom">
                <h2><span>Drop Me A Line </span></h2>
              </div>
            </div>


            <form className="">
              <div className="input grid">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Phone" />
              </div>
              <textarea name="name" rows="5" cols="80" defaultValue="Message" />
              <button className="btn2 btn3">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="social_media background2 ">
        <div className="container">
          <div className="social_icon ">
            <div className="heading center">
              <h2>Looking to Design Similar Project ? </h2>
              <p>Contact me on any platform and i will happy to help you out ? </p>
            </div>

            <div className="content grid">
              <div className="box">
                <i className="fas fa-phone-alt"></i>
                <div className="text">
                  <p>Call Me At:</p>
                  <span>025 - 123- 4565</span>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-envelope-open-text"></i>
                <div className="text">
                  <p>Email At:</p>
                  <span>dotstudio@gmail.com</span>
                </div>
              </div>
              <div className="box">
                <i className="fab fa-facebook-f"></i>
                <div className="text">
                  <p>Facebook:</p>
                  <span>dot.studio/profile</span>
                </div>
              </div>
              <div className="box">
                <i className="fab fa-twitter"></i>
                <div className="text">
                  <p>Twitter:</p>
                  <span>@dot.studio</span>
                </div>
              </div>
              <div className="box">
                <i className="fab fa-linkedin-in"></i>
                <div className="text">
                  <p>Linkedin:</p>
                  <span>linkedin/dot.studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact