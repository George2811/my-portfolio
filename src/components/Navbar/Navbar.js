import React, { useState, useEffect } from 'react';
import './Navbar.css'

export default function Navbar(props) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const getScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", getScroll);
    });

    return(
        <>
        <nav className={scrollY > 650 ? 'bg__dark': 'none'}>
            <div className="menu">
                <div className="logo">
                    <p className="navbar__title">                        
                        <span>JS</span>
                    </p>
                </div>
                <input type="checkbox" id="click"></input>
                <label htmlFor='click' className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><a href="#info">Info</a></li>
                    <li><a href="#portfolio">Portafolio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}