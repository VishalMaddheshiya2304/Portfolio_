import React from 'react';
import './AboutContentStyles.css';



const AboutContent = () => {
  const a = require("../assets/React1.png")
  const b = require("../assets/React2.png")
  return (
    <div className="about">
      <div className="left">
      <h1>Who am I?</h1>
        <p>I'm a React front-end developer. I create responsive and secure websites for my clients.</p>
        <a href="/contact">
          <button className="btn">Contact</button>
        </a>
      </div>
      <div className="right">
        <div className='image-container'>
          <div className='image-stack top'>
           <img src={a} className="img" alt='img' />
            </div> 
            <div className='image-stack bottom'>
           <img src={b} className="img" alt='img'/>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
