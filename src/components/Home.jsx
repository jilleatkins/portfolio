import React from 'react';
import { ReactComponent as GitHubIcon } from '../icons8/icons8-github-30.svg';
import { ReactComponent as LinkedInIcon } from '../icons8/icons8-linkedin-2-30.svg';
import '../App.css';

function App() {
  return (
    <div>
      <container>
        <container class="icons-box">
          <a href="https://github.com/jilleatkins"><GitHubIcon className="home-github-icon" /></a>
          <a href="https://linkedin.com/in/jill-atkins"><LinkedInIcon className="home-linkedin-icon" /></a>
        </container>
        <div class="section-left">
          <h1 class="atkins">JILL</h1><h1 class="atkins">ATKINS</h1>
        </div>
        <div class="intro-para">
          <p>Junior software developer with a passion for <span class="front-end-design">front-end design</span> and <span class="clean-lines">clean lines</span>.</p>
        </div>
      </container>
    </div>
  );
}

export default App;
