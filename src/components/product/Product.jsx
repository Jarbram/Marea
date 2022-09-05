import React from 'react'
import './product.css'
import PRT1 from '../../assets/product3.png'
import PRT2 from '../../assets/product2.png'
import POT1 from '../../assets/postre2.png'

import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
const Product = () => {
    return (
    <section id='product' className='products'>
        <h5>y ya probaste nuestros</h5>
        <h2>Productos</h2>
        
        <Fade>
        <div className="product__description">
            <p className="product__description_text">
                Con nosotros podras encontrar una gran variedad de Amacerados a base de Pisco y una nueva de experimentar el bar en tu dia especial
            </p>
        </div>
        </Fade>

        <div className="container product__container">
        <Slide right>
        <article className="product">
        <div className="product__drink_1">
        <img src={PRT1} alt="product" />
        </div>
        <div className="product__head">
            <h3>Amacerados de Pisco</h3>
        </div>
        </article>
        </Slide>

        <Slide left>
        <article className="product">
        <div className="product__drink_2">
        <img src={POT1} alt="product" />
        </div>
        <div className="product__head">
            <h3>Postres a base de licor </h3>
        </div>
        </article>
        </Slide>
        </div>
        <Bounce>
        <div className="product__drink_3">
        <img src={PRT2} alt="product" />
        </div>
        </Bounce>

        <div className="product__description">
            <p className="product__description_text">
                Descubre una nueva forma de brindar la experiencia del bar en tu dia especial 
            </p>
        </div>
    </section>
    )
}

export default Product