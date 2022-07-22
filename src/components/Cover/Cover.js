import React from 'react';
import './Cover.css'

export default function Cover(props) {

    return(
        <>
        <section id="home" class="home">
            <div class="home__background"></div>
            <div class="home__description">
                <span class="home__title--primary">Hola!</span>
                <h1 class="home__title">Soy Jorge Sánchez</h1>
                <span class="home__title--secondary">Software Developer</span>
            </div>
        </section>
        </>
    );
}