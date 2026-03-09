import React from "react";
import logo from "./assets/Logo-Pictures/Final Logo Image.png";

function Home() {
    return (
        <>
            <div className="navbar">
                <nav>
                    <img src={logo} alt="logo" className="logo" />
                    <a href="#About_Me">About Me</a>
                    <a href="#skills">Skills</a>
                    <a href="#my-works">My Works</a>
                    <a href="#contact-me">Contact Me</a>
                </nav>
            </div>

            <div className="home">
                <h1>Hi, I'm Venkata Guru Prasad Gummadi</h1>
                <p>Full Stack AI/ML Security Engineer</p>
            </div>
        </>
    );
}

export default Home;