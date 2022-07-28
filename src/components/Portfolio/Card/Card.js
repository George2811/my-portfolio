import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Card.css'

export default function Card() {
    var imgUrl = '../../../../public/projects/perustars1.png';
    // "url(" + "../../../../public/projects/perustars1.png" + ")"
    return (
        <>
        <div className='card' style={{backgroundImage: `url(${imgUrl})`}}>
            <div className='card__info'>
                <h3 className='card___title'>PeruStars</h3>
                <div className='tools'>
                    <div className='chip'>Vue</div>
                    <div className='chip'>.Net Core</div>
                    <div className='chip'>MySql</div>
                </div>
                <div className='access'>
                    <button className='access__web'>
                        <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faGlobe} />
                        Website
                    </button>
                    <button className='access__repo'>
                        <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faGithub} />
                        Repositorio
                    </button>
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