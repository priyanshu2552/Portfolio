import React from "react";
import "./Home.css";
import profileImg from "./profile_img.jpg";

const Home = () => {
  return (
    <>
      <nav  className="navbar">
        <div className="navbar-left">
          <span className="brand-name">Priyanshu</span>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a
            href="#contact
                "
          >
            <button className="contact-button">Contact</button>
          </a>
        </div>
      </nav>
      <div id="home" className="main">
        <img id="img1" src={profileImg} alt="" />
        <h1>
          I am Priyanshu Kumar Raj, <br /> A final Year Student At IIT Guwahati
        </h1>
        <p>
          I am a full stack Developer From IIT Guwahati,India with 2 year of
          experiance in multiple projects like Mern Chat App,Wether APP ,Book
          search Application and many more.
        </p>

        <div className="buttons">
            <a href="#contact">

          <button className="first">Connect With Me</button>
            </a>
          <a
            href="https://drive.google.com/file/d/10E-JdLJbvHBQ66medTN0ZpDylB_lXGWJ/view?usp=sharing"
            target="blank"
          >
            <button className="second">Resume</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
