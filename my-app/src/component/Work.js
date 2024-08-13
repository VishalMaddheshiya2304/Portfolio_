import "./WorkCardStyles.css";
import React from "react";
import prop2 from "../assets/languages.png";
import prop3 from "../assets/Frontend-Development.jpg";
import prop4 from "../assets/Development tools.png";
import Cplus from "../assets/c++.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import SQL from "../assets/SQL.png";
import C from "../assets/C.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Bootstrap from "../assets/Bootstrap.png";
import VSCode from "../assets/VSCode.png";
import Replit from "../assets/Replit.png";
import Git from "../assets/Git.png";
import GitHub from "../assets/GitHub.png";
import IntelliJ from "../assets/IntelliJ.jpeg";
import ReactLogo from "../assets/React.png"; 
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">My Skillsets</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={prop2} alt="Languages" />
          <h2 className="project-title">Languages</h2>
          <div className="pro-details">
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap' }}>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={Cplus} alt="C++ logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>C++</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={C} alt="C logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>C</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={javascript} alt="JavaScript logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>JavaScript</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={java} alt="Java logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>Java</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={python} alt="Python logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>Python</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={SQL} alt="SQL logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>SQL</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <img src={prop3} alt="Front-End Technologies" />
          <h2 className="project-title">Front-End Technologies</h2>
          <div className="pro-details">
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap' }}>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={HTML} alt="HTML logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>HTML</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={CSS} alt="CSS logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>CSS</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={Bootstrap} alt="Bootstrap logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>Bootstrap</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={ReactLogo} alt="React logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>React</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <img src={prop4} alt="Development Tools" />
          <h2 className="project-title">Development Tools</h2>
          <div className="pro-details">
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap' }}>
              
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={Git} alt="Git logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>Git</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={GitHub} alt="GitHub logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>GitHub</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={VSCode} alt="VS Code logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>VS Code</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={IntelliJ} alt="IntelliJ IDEA logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>IntelliJ IDEA</figcaption>
                </figure>
              </li>
              <li style={{ width: '50%', marginBottom: '20px', textAlign: 'center' }}>
                <figure>
                  <img src={Replit} alt="Replit logo" style={{ width: '48px', height: '48px' }} />
                  <figcaption style={{ color: 'white' }}>Replit</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
