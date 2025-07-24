import React from "react";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import "./footerStyles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-item2 ">
        <a
          className="linkedin-icon"
          href="https://www.linkedin.com/in/marianne-bolduc-1b419a171/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="behance-icon"
          href="https://www.behance.net/mariannebolduc"
          target="_blank"
        >
          <FaBehance />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
