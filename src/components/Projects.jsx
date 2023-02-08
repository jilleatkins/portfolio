import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Projects = () => {
  return (
    <div>
      <container class="container">
        <nav>
          <ul class="nav-left">
            <li class="nav-item">
              <Link to="/"><span class="nav-item-text">HOME</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/projects"><span class="nav-item-text">CONTACT</span></Link>
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
          <h1 class="about">Projects</h1>
        </div>
        {/* <img class="profile-photo" src={require("./profile-photo.jpg")} alt="profile" /> */}
        <div class="about-para-overline"></div>
        <div class="contact-para">
          <h2 class="contact-subheading">YAY coding.</h2>
        </div>
      </container>
    </div>

    // 
  );
};

export default Projects;