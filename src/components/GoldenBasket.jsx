import React from "react";
import '../App.css';

const GoldenBasket = () => {
    return (
        <div>
            <div class="single-project">
                <h2 class="project-header">GOLDEN BASKET</h2>
                <h2 class="project-subheader">PYTHON | FLASK | POSTGRESQL | HTML & CSS</h2>
                <section>
                    <p class="project-info">I developed this web application as a solo project within a tight 1-week timeframe to simulate an enterprise inventory management system. The app is built on Flask framework and utilizes PostgreSQL as its database. While creating this application, I gained valuable experience with Python as a new programming language, as well as the opportunity to hone my skills in HTML and CSS. The app features full CRUD functionality, and with some more functionality extensions, it has the potential to become a versatile and effective tool for managing a real-life inventory.</p>
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
            <a class="to-projects" href="/projects">BACK TO PROJECTS</a>
        </div>
    )
}

export default GoldenBasket; 