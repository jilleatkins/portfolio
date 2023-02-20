import React from "react";
import { ReactComponent as GitHubIcon } from '../icons8/icons8-github-60.svg';
import { ReactComponent as LinkedInIcon } from '../icons8/icons8-linkedin-2-60.svg';
import '../App.css';

const Contact = () => {
  return (
    <div>
      <container class="container">
        <div class="contact-top-border-line"></div>
        <div class="right-border-line"></div>
        <div>
          <h1 class="contact">Hi,</h1>
        </div>
        {/* <img class="profile-photo" src={require("./profile-photo.jpg")} alt="profile" /> */}
        <div class="contact-para-overline"></div>
        <div class="contact-para">
          <h2 class="contact-subheading">I'd love to hear from you.</h2>
          <p class="email-me">Send me an email directly at <span class="bolder">jilleatkins@gmail.com</span>,
          <br /> or hit the links below.</p> 
          <br />
          <container class="contact-icons"> 
          <a href="https://github.com/jilleatkins"><GitHubIcon className="contact-github-icon"/></a>
          <br />
          <br />
          <a href="https://linkedin.com/in/jill-atkins"><LinkedInIcon className="contact-linkedin-icon"/></a>
          </container>
        </div>
      </container>
    </div>
  );
};

export default Contact;