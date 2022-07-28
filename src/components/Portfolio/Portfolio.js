import React from 'react';
import Card from './Card/Card';
import './Portfolio.css'

export default function Portfolio(){
    return (
        <>
        <section class="portfolio__section">
            <h2 class="portfolio__title">Portafolio</h2>
            <p class="portfolio__description">En el 2019 comencé a realizar proyectos a nivel personal, y también participe en grandes proyectos grupales que me permitieron reforzar y adquirir nuevos conocimientos.</p>
            <Card></Card>
        </section>
        </>
    );
}