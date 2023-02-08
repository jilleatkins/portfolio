import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import githubIcon from 'src/icons8/icons8-github-60.svg';

function App() {
  return (
    <div>
      <container>
        <img src="src/icons8/icons8-github-60.svg" alt="github"/>
        <nav>
          <ul class="nav-left">
            <li class="nav-item">
                <Link to="/about"><span class="nav-item-text">ABOUT</span></Link>
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
        <div class="section-left">
          <h1 class="atkins">JILL</h1><h1 class="atkins">ATKINS</h1>
        </div>
        <div class="intro-para">
          <p>Junior software developer with a passion for <span class="front-end-design">front-end design</span> and <span class="clean-lines">clean lines</span>.</p>
          </div>
      </container>
    </div>

    //   
  );
}

export default App;
