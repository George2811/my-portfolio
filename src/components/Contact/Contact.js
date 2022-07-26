import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'

export default function Contact(){
    return(
        <>
        <section class="contact__section">
            <h2 class="contact__title">Trabajemos juntos</h2>
            <p class="contact__description">Es genial afrontar nuevos retos 😀</p>  
            <div class="contact__set">
                <FontAwesomeIcon className="contact__icon" icon={faEnvelope} />
                <FontAwesomeIcon className="contact__icon" icon={faLinkedin} />
                <FontAwesomeIcon className="contact__icon" icon={faGithub} />
            </div>
        </section>
        </>
    );
}