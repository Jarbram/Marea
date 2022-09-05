import React from 'react'
import './footer.css';

import {FaTiktok} from 'react-icons/fa'

import {FaInstagram} from 'react-icons/fa';

import Fade from 'react-reveal/Fade';
const Footer = () => {
  return (
    <footer>
      <Fade top>
      <a href="#" className="footer__logo">MAREA</a>
      </Fade>
      <ul className="permalinks">
        <li><a href="">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        
        <a href="https://www.instagram.com/marea.bartenders/"> <FaInstagram /> </a>
        <a href="https://tiktok.com"> <FaTiktok /> </a>
      </div>
      <Fade bottom>
      <div className="footer__copyright">
        <small>&copy; Abraham Huacchillo. All rights reserved.</small>
      </div>
      </Fade>
    </footer>
  )
}

export default Footer