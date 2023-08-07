import React from 'react';
import LOGO from '../assets/logowhite.png';
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <img src={LOGO} alt="Logo" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
