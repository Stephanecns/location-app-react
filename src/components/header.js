import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss'
import LOGO from '../assets/LOGO.png';

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <img src={LOGO} alt="Logo de Kasa" />
        </div>
        <div className="header__actions">
            <nav>
                <ul>
                  <li>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/about">À propos</Link>
                  </li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
