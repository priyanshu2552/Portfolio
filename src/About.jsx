import React from "react";
import "./About.css";
import img2 from './profile_img.jpg'
const About = () => {
  return (
    <>
      <div id="about" className="main2">
        <div className="header">
          <h1>About Me</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={img2} alt="" />
          </div>
          <div className="right">
            <div className="shortinfo">
              <p>
              I am a final-year ECE student at IIT Guwahati with a strong passion for software and web development. My expertise lies in creating efficient, innovative solutions through coding and development. I am eager to leverage my skills and knowledge in dynamic tech environments, contributing to impactful projects and advancing my career in the software development industry.
              </p>
            </div>
            <div className="skills">
              <div className="skill">
                <div className="name">Html</div>
                <div className="bar">
                  <div className="level" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">CSS</div>
                <div className="bar">
                  <div className="level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">Javascript</div>
                <div className="bar">
                  <div className="level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">React.js</div>
                <div className="bar">
                  <div className="level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">Node.Js</div>
                <div className="bar">
                  <div className="level" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">MongoDb</div>
                <div className="bar">
                  <div className="level" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
