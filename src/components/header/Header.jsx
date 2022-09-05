import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5 className="text-light">
        Lleva la experiencia del Bar a tu dia especial
      </h5>
      <Fade top>
      <h1>Marea</h1>
      </Fade>
      <h5 className="text-light">
        Bar Catering & Drinks
      </h5>
      <CTA />
      <HeaderSocials />
      <Slide bottom>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      </Slide>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
    </header>
  )
}

export default Header