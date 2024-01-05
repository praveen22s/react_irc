import React from "react";
import "./contact.css";
import profilePic from "./images/ProfilePic.jpg";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:praveen@gmail.com">
        praveen@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/praveen-arulraj-0902a6256/">
          User Name: praveen
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/praveen22s">
          praveen22s
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="/">
          @pr_vin
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel: +91 7417536965">
          +91 7417536965
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={profilePic} alt="Profile Image"/>
      </div>
    </div>
  );
};

export default Contact;
