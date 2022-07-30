import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'

export default function Contact(){
    return(
        <>
        <section className="contact__section" id='contact'>
            <h2 className="contact__title">Trabajemos juntos</h2>
            <p className="contact__description">Es genial afrontar nuevos retos 😀</p>  
            <div className="contact__set">
                <a href='mailto: jsanv.dev@gmail.com' rel='noreferrer' target="_blank" ><FontAwesomeIcon className="contact__icon" icon={faEnvelope}/></a>
                <a href='https://www.linkedin.com/in/jorge-s%C3%A1nchez-vallejos-563561224/' rel='noreferrer' target="_blank" ><FontAwesomeIcon className="contact__icon" icon={faLinkedin}/></a>
                <a href='https://github.com/George2811' rel='noreferrer' target="_blank" ><FontAwesomeIcon className="contact__icon" icon={faGithub}/></a>
            </div>
        </section>
        </>
    );
}