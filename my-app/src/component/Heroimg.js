import './Heroimgstyle.css';
import React from 'react';
import introimgbg from '../assets/introimgbg.jpg';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introimgbg} alt="introimggbg" />
      </div>
      <div className="content">
        <p>
          Hello! MY self <b> Vishal Maddheshiya</b>, <br />
         
I am a Software Engineer with strong foundations in software development, system design, and core computer science concepts.
        </p>
        <h1>
          Software Engineer.
        </h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
