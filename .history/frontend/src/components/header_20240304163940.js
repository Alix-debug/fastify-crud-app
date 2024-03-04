// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>My CRUD App</h1>
      <nav>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </header>
  );
};

export default Header;
