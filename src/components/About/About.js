import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import './About.css'

export default function About(props) {
    return ( 
        <>
        <section class="about__section">
            <h2 class="about__title">Sobre mí</h2>
            <div class="about__body">
                <p class="about__description">
                Hola! Soy Jorge Sánchez
                <br></br>
                <br></br>
                Actualmente soy estudiante de ingeniería de software con experiencia desarrollando varias aplicaciones web y móvil.
                <br></br>
                <br></br>
                Me considero muy autodidacta, adaptable y colaborador, pues disfruto de aprender y recibir retroalimentación, lo que me ha permitido elaborar proyectos personales y grupales. 
                </p>
                <div class="about__information">
                    <span class="about__span">
                        <FontAwesomeIcon className="icons" icon={faLocationDot} />
                        Lima, Perú
                    </span>
                    <span class="about__span">
                        <FontAwesomeIcon className="icons" icon={faEnvelope}/>                        
                        jsanv.dev@gmail.com
                    </span>
                    <button class="about__button">
                        <FontAwesomeIcon icon={faFileArrowDown}/>
                        <span>Descargar CV</span>
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}
