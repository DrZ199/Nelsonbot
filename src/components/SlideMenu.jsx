import React from 'react';
import '../styles/slideMenu.css';

function SlideMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`slide-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <button className="close-btn" onClick={toggleMenu}>×</button>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SlideMenu;

