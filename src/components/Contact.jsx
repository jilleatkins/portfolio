import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Contact = () => {
  return (
    <div>
      <container class="container">
        <nav>
          <ul class="nav-left">
            <li class="nav-item">
              <Link to="/"><span class="nav-item-text">HOME</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/projects"><span class="nav-item-text">PROJECTS</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/about"><span class="nav-item-text">ABOUT</span></Link>
            </li>
            <li class="nav-line"></li>
            <li class="copyright">J. A. | 2023</li>
          </ul>
        </nav>
        <div class="top-border-line"></div>
        <div class="right-border-line"></div>
        <div>
          <h1 class="contact">Contact</h1>
        </div>
        {/* <img class="profile-photo" src={require("./profile-photo.jpg")} alt="profile" /> */}
        <div class="para-overline"></div>
        <div class="contact-para">
          <h2 class="contact-subheading">I'd love to hear from you.</h2>
          <a class="contact-link" href="https://www.linkedin.com/in/jill-atkins/">LinkedIn</a>
          <a class="contact-link" href="https://www.linkedin.com/in/jill-atkins/">GitHub</a>
        </div>
      </container>
    </div>

    // 
  );
};

export default Contact;