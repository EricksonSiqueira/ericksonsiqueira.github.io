import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfólio</Link>
        <Link to="/portfolio">Habilidades</Link>
      </nav>
    </header>
  );
}

export default Header;
