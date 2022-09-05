import React from 'react'
import './team.css'
import AVTR1  from '../../assets/avatar1.png'
import AVTR2  from '../../assets/avatar2.png'
import DRINK from '../../assets/drink11.png'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
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
    name: 'Abraham Huacchillo',
    review: 'Founder',
    insta: <AiFillInstagram />,
    face: <AiFillFacebook />
  },
  {
    avatar: AVTR2,
    name: 'Joaquin Cachay',
    review: 'Co-founder',
    insta: <AiFillInstagram />,
    face: <AiFillFacebook />
  },
]
const Team = () => {
  return (
    <section id='team'>
      <h5>Conoce a nuestro</h5>
      <h2>Equipo</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name,review,insta,face},index) =>{
            return (
            <SwiperSlide keys={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="avatar one" />
            </div>
            <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
              <div className="social__review">
                <a href="https://www.instagram.com/abrahamhuacchillo/?hl=es-la">{insta}</a>
                <a href="https://www.facebook.com/abraham.huacchillo/">{face}</a>
              </div>
          </SwiperSlide>)
          })
        }
      </Swiper>
      <Slide left>
      <div className="team__description">
      <p className="team__description_text">
        Contamos con un equipo capacitado y preparado para servir en todo momento, <span>Bartenders</span> listos para brindar experiencias unicas a traves de su servicio.
      </p>
      </div>
      </Slide>
      <Bounce>
      <div className="drink">
        <img src={DRINK} alt="drink" />
      </div>
      </Bounce>

    </section>
  )
}

export default Team