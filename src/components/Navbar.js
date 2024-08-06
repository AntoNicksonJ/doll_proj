import React from 'react';
import '../styles/style.css';

const NavBar = () => {
  return (
    <header>
      <div>
        <a href="#" className="logo">LOGO</a>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
