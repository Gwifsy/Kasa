import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <img src="/assets/logo/logo_header.jpg" alt="Logo Kasa" />
        <ul className="nav__links">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
