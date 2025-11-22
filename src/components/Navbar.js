import React from 'react';
import '../Navbar.css'; // NEW FILE for responsiveness

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        {/* <img
          src="https://www.wsupercars.com/wallpapers-regular/Ferrari/2020-Ferrari-F8-Tributo-018-1600.jpg"
          alt="Ferrari"
          style={styles.navImg}
        /> */}
        Nikhit Dodia
      </div>

      <div className="links">
        <a href="#about" id="navbar-items">
          About
        </a>
        <a href="#skills" id="navbar-items">
          Skills
        </a>
        <a href="#experience" id="navbar-items">
          Experience
        </a>
        <a href="#projects" id="navbar-items">
          Projects
        </a>
      </div>
    </nav>
  );
}

const styles = {
  navImg: {
    maxWidth: '100px',
    maxheight: 'auto',
  },
};
