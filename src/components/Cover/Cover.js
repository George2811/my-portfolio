import React from 'react';
import './Cover.css'

export default function Cover(props) {

    return(
        <>
        <section id="home" className="home">
            <div className="home__background"></div>
            <div className="home__description">
                <span className="home__title--primary">Hola!</span>
                <h1 className="home__title">Soy Jorge Sánchez</h1>
                <span className="home__title--secondary">Software Developer</span>
            </div>
        </section>
        </>
    );
}