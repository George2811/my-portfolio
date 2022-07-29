import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Card.css'

export default function Card(props) {
    return (
        <>
        <div className='card' style={{backgroundImage: `url('https://i.postimg.cc/Hk3knfVQ/Screenshot-from-2022-07-27-22-33-04.png')`}}>
            <div className='card__info'>
                <h3 className='card___title'>{props.name}</h3>
                <div className='tools'>
                    <div className='chip'>Vue</div>
                    <div className='chip'>.Net Core</div>
                    <div className='chip'>MySql</div>
                </div>
                <div className='access'>
                    <a href='https:www.google.com' rel='noreferrer' target="_blank" className='access__web'>
                        <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faGlobe} />
                        Website
                    </a>
                    <a href='https:www.google.com' rel='noreferrer' target="_blank" className='access__repo' >
                        <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faGithub} />
                        Repositorio
                    </a>
                </div>
                <div className='details'>
                    <button className='details__link'>
                        <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faPlus} />
                        Detalles
                    </button>
                </div>
            </div>
        </div>
        </>
    );

}