import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Heroimg2 from "../component/Heroimg2";
import { NavLink } from "react-router-dom";
import proj1 from "../assets/project1.jpg";
import proj2 from "../assets/project2.jpg";
import proj3 from "../assets/project3.jpg";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
      <div className="work-container">
        <h1 className="project-heading">My Projects</h1>
        <div className="project-container">
          <div className="project-card">
            <img src={proj1} alt="Gym Website Project" />
            <br />
            <br />
            <h2 className="project-title">REJOUICE PAGE</h2>
            <div className="pro-details">
              <p>Tech:- : GSAP, HTML, CSS, JavaScript</p>
              <p>
                ◦Developed a visually appealing, user-centric website with
                smooth animations using GSAP and SwiperJS.
                <br />
                <br />
                ◦Implemented animations and interactive elements to enhance user
                engagement.
              </p>
              <br />
              <div className="pro-btns">
                <NavLink
                  to="https://vishalmaddheshiya2304.github.io/Rejouice-project/"
                  className="btn"
                >
                  View
                </NavLink>
                <NavLink
                  to="https://github.com/VishalMaddheshiya2304/Rejouice-project"
                  className="btn"
                >
                  Source
                </NavLink>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={proj2} alt="Gym Website Project" />
            <h2 className="project-title">GYM WEBSITE</h2>
            <div className="pro-details">
              <p>Tech:- REACT</p>
              <p>
                •Transformed the gym experience with a dynamic React website,
                offering seamless navigation and an engaging user interface.{" "}
                <br />
                •Enhanced accessibility and user engagement, demonstrating
                proficiency in modern web development practices
              </p>
              <div className="pro-btns">
                <NavLink to="https://fitclub-7kz.pages.dev/" className="btn">
                  View
                </NavLink>
                <NavLink
                  to="https://github.com/VishalMaddheshiya2304/GymSite"
                  className="btn"
                >
                  Source
                </NavLink>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={proj3} alt="Real time Editor" />
            <h2 className="project-title">Realtime Code Editor</h2>
            <div className="pro-details">
              <p>Tech:-React, Node.js, WebSockets</p>
              <p>◦Created a real-time code editor showcasing expertise in interactive web applications and real-time communication technologies. 
                <br />◦Demonstrated proficiency in using WebSockets for realtime data synchronization.
              </p>
              <div className="pro-btns">
                <NavLink to="" className="btn">
                  View
                </NavLink>
                <NavLink
                  to="https://github.com/VishalMaddheshiya2304/Realtime_Code_Editor"
                  className="btn"
                >
                  Source
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
