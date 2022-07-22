import React from 'react';
import './Navbar.css'

export default function Navbar(props) {

    return(
        <>
        <nav class="navbar">
            <div class="container">
                <div class="navbar__logo">
                    <p class="navbar__title">                        
                        <span>JS</span>
                    </p>
                </div>
                <div class="navbar__menu">
                    <i class="fas fa-bars"></i>
                </div>
                <ul class="navbar__links">
                    <li class="navbar__link" data-ref="about">
                        <a href="#about">Info</a>
                    </li>
                    <li class="navbar__link" data-ref="portfolio">
                        <a href="#portfolio">Portafolio</a>
                    </li>
                    <li class="navbar__link" data-ref="contact">
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}