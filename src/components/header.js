import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.scss";
import LOGO from "../assets/LOGO.png";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo">
        <img src={LOGO} alt="Logo de Kasa" />
      </div>
      <div className="header__actions">
        <nav>
          <ul>
            <li>
              <Link 
                to="/"
                style={location.pathname === "/" ? { textDecoration: "underline" } : null}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                style={location.pathname === "/about" ? { textDecoration: "underline" } : null}
              >
                À propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

