import React from 'react'
import './contact.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aldyvx5', 'template_q517tlb', form.current, 'XjJE52L18M25XKyKM')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Ponte en </h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <AiFillInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Marea Bartenders</h5><a href="https://www.instagram.com/marea.bartenders/">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <h5>+992487774</h5><a href="https://api.whatsapp.com/send?phone=992487774">Send a Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact