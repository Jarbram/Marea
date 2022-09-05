import React from 'react'
import {FaTiktok} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://tiktok.com" target="_blank">
            <FaTiktok />
        </a>
        <a href="https://instagram.com" target="_blank">
            <FaInstagram />
        </a>
    </div>
  )
}

export default HeaderSocials