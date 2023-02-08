import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const About = () => {
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
              <Link to="/contact"><span class="nav-item-text">CONTACT</span></Link>
            </li>
            <li class="nav-line"></li>
            <li class="copyright">J. A. | 2023</li>
          </ul>
        </nav>
        <div class="top-border-line"></div>
        <div class="right-border-line"></div>
        <div>
          <h1 class="about">About</h1>
        </div>
        {/* <img class="profile-photo" src={require("./profile-photo.jpg")} alt="profile" /> */}
        <div class="para-overline"></div>
        <div class="about-para">
          <h2 class="about-subheading">I'm a junior software developer. And I <span class="animated-underline">love it</span>.</h2>
          <p class="about-sentence">My name is <span class="bolder">Jill</span>. I'm an Australian living in Glasgow, Scotland.</p>
          <p class="about-sentence">I've come from <span class="bolder">10 years</span> in the dental industry - which was kind of an accident - and was looking for a change. A creative outlet. A chance to build, to produce, and to really push myself. Growing up, I thought I would become an author. Then I thought I was going to be a scientist.</p>
          <p class="about-sentence">The one constant I kept going back to was <span class="bolder">computers</span>. I used to customise my mySpace profile to within an inch of its life. I spent many hours writing various scripts to make my Sims do things like sit down when they ate, instead of awkwardly standing and watching TV, plate in hand. It was the most time I'd ever invested in anything that I wasn't being graded on. Part of me wishes I'd recognised that interest as a prospective career path years ago, and the other part doesn't regret a thing.</p>
          <p class="about-sentence">In November 2022, I was accepted to study <span class="bolder">Professional Software Development</span> at CodeClan in Glasgow and it's been fantastic. I've been able to hone my skills in full-stack software development and am steadily building a vision for where I can go and what I can do with a career in development.</p>
          <p class="about-sentence">It's hard making the leap to change careers and I am so proud of myself for doing it. It's been a <i>wild</i> ride.</p>
          <h2 class="about-subheading">Skills</h2>
          <h3 class="about-sub-subheading">Programming Languages & Frameworks</h3>
            <ul>
              <li>HTML & CSS</li>
              <li>SQL</li>
              <li>Python</li>
                <ul>
                  <li>Flask</li>
                </ul>
              <li>JavaScript</li>
                <ul>
                  <li>React.js</li>
                  <li>Express.js</li>
                </ul>
              <li>Java</li>
                <ul>
                  <li>Spring</li>
                </ul>
            </ul>
          <h3 class="about-sub-subheading">Testing</h3>
            <ul>
              <li>Test-driven development involving both static and dynamic testing methods</li>
              <li>Unit testing</li>
              <li>Debugging & bug prevention</li>
              <li>E2E testing with Cypress</li>
              <li>Mocha and Insomnia frameworks</li>
            </ul>
          
        </div>
      </container>
    </div>

    // 
  );
};

export default About;