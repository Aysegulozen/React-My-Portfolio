import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">My Portfolio</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/experience">Experience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about-me">About Me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;