import React from "react";
import '../App.css';

const Projects = () => {
  return (
    <div class="projects-container">
      <container>
        <div class="projects-top-border-line"></div>
      </container>
      <container >
        <h1 class="projects">PROJECTS</h1>
        <div class="projects-para-overline"></div>
        <h2 class="projects-subheading">A showcase of projects written in various languages for different applications.</h2>
        <div class="single-project">
          <h2 class="project-header">GOLDEN BASKET</h2>
          <h2 class="project-subheader">PYTHON | FLASK | POSTGRESQL | HTML & CSS</h2>
          <section>
            <p class="project-info">Project info</p>
          </section>
          <div class="video-container">
            <iframe src='https://youtube.com/embed/ELf0byoTcEc'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
            />
          </div>
        </div>
        <div class="single-project">
          <h2 class="project-header">POWERPONG LEAGUE</h2>
          <h2 class="project-subheader">JAVASCRIPT | REACT.JS | MONGODB | HTML & CSS</h2>
          <section>
            <p class="project-info">During my time at CodeClan, a group project assignment was given to create a browser game that incorporates database functionality, which resulted in the creation of PowerPong League. This game offers an exciting competition for players, with features that track and rank table tennis matches. By using PowerPong League, players can view recent match results, analyze in-depth win/loss statistics, and compare their performance to others on the leaderboard.</p>
          </section>
          <div class="video-container">
            <iframe src='https://youtube.com/embed/RfwVVUPGNpM'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
            />
          </div>
        </div>
      </container>
    </div>
  );
};

export default Projects;