import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>217, Prem gali, Sanjay colony, Arthala</p>
              <p>Ghaziabad</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>7652051864</p>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "white", margin: "0 1rem 0 0" }}
            />
            <p>vishalmaddheshiya864@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            "I am a dedicated computer science student with a passion for React
            development, eager to showcase my skills through my portfolio."
          </p>
          <div className="social">
  <a href="https://www.facebook.com/vishal.maddhesiya.581/" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={30} style={{ color: "white", margin: "1rem" }} />
  </a>
  <FaTwitter size={20} style={{ color: "white", margin: "0 1rem 0 0" }} />
  <a href="https://www.linkedin.com/in/vishal-maddheshiya/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={20} style={{ color: "white", margin: "0 1rem 0 0" }} />
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
