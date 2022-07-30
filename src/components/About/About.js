import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import './About.css'

export default function About(props) {
    return ( 
        <>
        <section className='about__section' id='info'>
            <h2 className='about__title'>Sobre mí</h2>
            <div className='about__body'>
                <p className='about__description'>
                Hola! Soy Jorge Sánchez
                <br></br>
                <br></br>
                Actualmente soy estudiante de ingeniería de software con experiencia desarrollando varias aplicaciones web y móvil.
                <br></br>
                <br></br>
                Me considero muy autodidacta, adaptable y colaborador, pues disfruto de aprender y recibir retroalimentación, lo que me ha permitido elaborar proyectos personales y grupales. 
                </p>
                <div className='about__information'>
                    <span className='about__span'>
                        <FontAwesomeIcon className="icons" icon={faLocationDot} />
                        Lima, Perú
                    </span>
                    <span className='about__span'>
                        <FontAwesomeIcon className="icons" icon={faEnvelope}/>                        
                        jsanv.dev@gmail.com
                    </span>
                    <button className='about__button'>
                        <FontAwesomeIcon icon={faFileArrowDown}/>
                        <span>Descargar CV</span>
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}
