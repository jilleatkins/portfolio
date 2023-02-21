import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    const navLeft = 'nav-left';
    const navItem = 'nav-item';
    const navItemText = 'nav-item-text';
    const navLine = 'nav-line';
    const copyright = 'copyright';
    const location = useLocation();

    useEffect(() => {
        let textColor, lineColor, copyrightColor;
        switch (location.pathname) {
          case '/':
            textColor = '#443235';
            lineColor = '#443235';
            copyrightColor = '#443235';
            break;
          case '/about':
            textColor = '#443235';
            lineColor = '#443235';
            copyrightColor = '#443235';
            break;
          case '/contact':
            textColor = '#EEE7E1';
            lineColor = '#EEE7E1';
            copyrightColor = '#EEE7E1';
            break;
          case '/projects':
            textColor = '#EEE7E1';
            lineColor = '#EEE7E1';
            copyrightColor = '#EEE7E1';
            break;
            case '/goldenbasket':
            textColor = '#EEE7E1';
            lineColor = '#EEE7E1';
            copyrightColor = '#EEE7E1';
            break;
            case '/powerpongleague':
            textColor = '#EEE7E1';
            lineColor = '#EEE7E1';
            copyrightColor = '#EEE7E1';
            break;
          default:
            textColor = '#443235';
            lineColor = '#443235';
            copyrightColor = '#443235';
            break;
        }
      
        const navItemTextElements = document.querySelectorAll(`.${navItemText}`);
        const navLineElement = document.querySelector(`.${navLine}`);
        const copyrightElement = document.querySelector(`.${copyright}`);
        navItemTextElements.forEach((element) => {
          element.style.color = textColor;
        });
        navLineElement.style.backgroundColor = lineColor;
        copyrightElement.style.color = copyrightColor;
      }, [location]);
      

    function changeColor(color) {
        localStorage.setItem('backgroundColor', color);
        document.body.style.backgroundColor = color;
    }

    window.addEventListener('load', function () {
        var backgroundColor = localStorage.getItem('backgroundColor');
        if (backgroundColor) {
            document.body.style.backgroundColor = backgroundColor;
        }
    });

    return (
        <div>
            <nav>
                <ul className={navLeft}>
                    <li className={navItem}>
                        <Link to="/" className="links" onClick={() => changeColor('#e6ddde')}>
                            <p className={navItemText}>HOME</p>
                        </Link>
                    </li>
                    <li className={navItem}>
                        <Link to="/about" className="links" onClick={() => changeColor('#e6ddde')}>
                            <p className={navItemText}>ABOUT</p>
                        </Link>
                    </li>
                    <li className={navItem}>
                        <Link to="/projects" className="links" onClick={() => changeColor('#1A1818')}>
                            <p className={navItemText}>PROJECTS</p>
                        </Link>
                    </li>
                    <li className={navItem}>
                        <Link to="/contact" className="links" onClick={() => changeColor('#1A1818')}>
                            <p className={navItemText}>CONTACT</p>
                        </Link>
                    </li>
                    <li className={navLine}></li>
                    <li className={copyright}>J. A. | 2023</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
