import React from "react";
import '../App.css';

const About = () => {
  return (
    <div>
      <container class="container">
        <div class="about-top-border-line"></div>
        <div class="right-border-line"></div>
        <a id="top"></a>
        <div>
          <h1 class="about">About</h1>
        </div>
        <div class="about-para-overline"></div>
        <div class="about-para">
          <h2 class="about-subheading">I'm a junior software developer. And I <span class="animated-underline">love it</span>.</h2>
          <p class="about-sentence">
            My name is <span class="bolder">Jill</span>. I'm an Australian living in Glasgow, Scotland.
            I've come from <span class="bolder">10 years</span> in the dental industry - which was kind of an accident - and was looking for a change. A creative outlet. A chance to build, to produce, and to really push the limits of what's possible. Growing up, I thought I would become an author. Then I thought I was going to be a scientist.
            <br /><br />
            <span class="bolder">The one constant I kept going back to was computers</span>. I used to customise my <i>mySpace</i> profile to within an inch of its life. I spent many hours writing various scripts to make my Sims do things like sit down when they ate, instead of awkwardly standing and watching TV, plate in hand. It was the most time I'd ever invested in anything that I wasn't being graded on.
            <br />
            Part of me wishes I'd recognised that interest as a prospective career path years ago, and the other part doesn't regret a thing.
            <br /><br />
            In November 2022, I was accepted to study <span class="bolder">Professional Software Development</span> at CodeClan in Glasgow and it's been fantastic. I've been able to hone my skills in full-stack software development and am steadily building a vision for where I can go and what I can do with a career in development.
            <br /><br />
            It's hard making the leap to change careers and I am so proud of myself for doing it. It's been a <i>wild</i> ride.
            <br /><br />
            Read on to find out more about what I've learnt during the course.
          </p>
          <br /><br />
          <h2 class="skills-subheading">Skills</h2>
          <h3 class="about-sub-subheading">PROGRAMMING LANGUAGES & FRAMEWORKS</h3>
          <ul class="skills-list">
            <li>HTML & CSS</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Python</li>
            <ul>
              <li>Flask</li>
            </ul>
            <li>JavaScript</li>
            <ul>
              <li>React.js</li>
              <li>Express.js</li>
              <li>npm.js</li>
            </ul>
            <li>RESTful APIs</li>
            <li>DOM & VDOM </li>
            <li>MongoDB</li>
            <li>Java</li>
            <ul>
              <li>Spring</li>
            </ul>
          </ul>
          <h3 class="about-sub-subheading">TESTING</h3>
          <ul class="skills-list">
            <li>Test-driven development involving both static and dynamic testing methods</li>
            <li>Unit testing with JUnit</li>
            <li>Debugging & bug prevention</li>
            <li>E2E testing with Cypress</li>
            <li>Mocha and Insomnia frameworks</li>
          </ul>
          <h3 class="about-sub-subheading">AS WELL AS:</h3>
          <ul class="skills-list">
            <li>Git & GitHub</li>
            <li>The Agile methodology</li>
            <li>VSCode</li>
            <li>IntelliJ</li>
            <li>Postico</li>
            <li>The art of linting (or, employing plugins to do so!)</li>
            <li>System diagrams (class, object, use-case, et al.)</li>
            <li>Wireframing</li>
            <li>Figma, Canva, and LaTeX</li>
          </ul>
          <p class="about-sentence">Did I mention I can make Sims eat while seated?</p>
          <a class="to-top" href="#top">BACK TO TOP</a>
        </div>
      </container>
    </div>
  );
};

export default About;