import React from "react";
import '../App.css';

const Projects = () => {
  return (
    <div>
      <container>
        <div class="projects-top-border-line"></div>
      </container>
      <container class="row">
        <div class="column">
        <h1 class="projects">PROJECTS</h1>
        <div class="projects-para-overline"></div>
          <h2 class="projects-subheading">A showcase of projects written in various languages for different applications.</h2>
        </div>
        <div class="column">
          <a class="powerpong-league" href="/powerpongleague">PowerPong League</a>
          <p class="project-landing-subheader">JAVASCRIPT | REACT.JS | MONGODB | HTML & CSS</p>
          <div class="sub-column">
            <div class="sub-row">
              <a class="btn" href="/powerpongleague">DEMO</a>
              <a class="btn" href="https://github.com/jilleatkins/javascript-project">GITHUB</a>
            </div>
          </div>
          <div class="sub-column">
            <a class="golden-basket" href="/goldenbasket">Golden Basket</a>
            <h2 class="project-landing-subheader">PYTHON | FLASK | POSTGRESQL | HTML & CSS</h2>
            <div class="sub-row">
              <a class="btn" href="/goldenbasket">DEMO</a>
              <a class="btn" href="https://github.com/jilleatkins/python_project">GITHUB</a>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
};

export default Projects;