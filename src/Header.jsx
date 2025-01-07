import { useState } from "react";
import PropTypes from "prop-types";
import "./styles/header.css";

const Header = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, text: "About", link: "#about" },
    { id: 2, text: "Projects", link: "#projects" },
    { id: 3, text: "Tech", link: "#tech" },
    { id: 4, text: "Services", link: "#services" },
    { id: 5, text: "Contact", link: "#contact" },
  ];

  return (
    <header className="header">
      <a href="#home" className="logo">
        Intiser <span>Zaman</span>
      </a>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className={currentPage === link.text.toLowerCase() ? "active" : ""}
            onClick={toggleMenu}
          >
            {link.text}
          </a>
        ))}
      </nav>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Header;
