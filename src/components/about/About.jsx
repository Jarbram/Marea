import React from 'react'
import './about.css'
import Fade from 'react-reveal/Fade';

import AVTR1  from '../../assets/drink8.png'
import AVTR2  from '../../assets/drink10.png'
import AVTR3  from '../../assets/drink3.png'
import AVTR4  from '../../assets/drink4.png'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
  },
  {
    avatar: AVTR2,
  },
  {
    avatar: AVTR3,
  },
  {
    avatar: AVTR4,
  },
]

const About = () => {
  return (
    <section id='about' >
      <h5>Conoce sobre </h5>
      <h2>Nosotros</h2>

      <Swiper className="container about__container" 
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar},index) =>{
            return (
            <SwiperSlide keys={index} className="about">
            <div className="about__avatar">
              <img src={avatar} alt="avatar one" />
            </div>
          </SwiperSlide>)
          })
        }
      </Swiper>
      
      <div className="about__description">
        <Fade right cascade>
      <p className="about__description_p">
        En Marea nos dedicamos a brindar un servicio de Bar Catering completo en la ciudad de Piura.Conocidos por nuestra, puntualidad, rapidez y la variedad de tragos que contamos.Nos veras en eventos de todas las formas y tamaños, ya sea tu boda deseada, eventos corporativos o un dia especial. 
      </p>
      </Fade>
      <h5 className="about__description_h">Nos dedicamos a crear una experiencia increible.

      </h5>
      </div>
    </section>
  )
}

export default About