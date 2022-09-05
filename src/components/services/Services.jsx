import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import DRINK from '../../assets/drink13.png'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const Services = () => {
  return (
    <section id='services' className='container__services'>
      <h5>Que es lo que ofrecemos</h5>
      <h2>Servicios</h2>

      <div className="container services__container">

        <Slide left>
        <article className="service">
          <div className="service__head">
            <h3>Nosotros dirigimos tu fiesta durante la Marea</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>Nos encargamos totalmente del Bar,llevamos todo lo necesario para librarte de preocupaciones,garantizando la calidad, brindando un servicio sin estrés y unos cocteles increibles.</p>
            </li>
          </ul>
        </article>
        </Slide>
        {/*END WEB Development */}
        <Slide right>
        <article className="service">
          <div className="service__head">
            <h3>Personaliza tu travesia en esta aventura</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <p>Decidiras los cocteles a disfrutar en tu dia especial, el tipo de licor para la aventura, y los sabores a experimentar, la belleza del coctel nosotros nos encargamos </p>
            </li>
          </ul>
        </article>
        </Slide>
        {/*END CONTENT CREATION */}
      </div>
      <Bounce>
      <div className="drink">
        <img src={DRINK} alt="drink" />
      </div>
      </Bounce>

    </section>
  )
}

export default Services