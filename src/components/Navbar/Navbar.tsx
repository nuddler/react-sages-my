import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar: FC = () => (
  <nav className="navbar navbar-expand  navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        Tv Maniac
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">
              Shows
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
