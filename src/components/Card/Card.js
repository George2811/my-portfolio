import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Modal from '../Modal/Modal';
import { useModal } from '../Modal/useModal';
import './Card.css'

export default function Card(props) {
    const project = props.el;
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (
        <>
        <div className='card' style={{backgroundImage: `url('${project.img_bg}')`}}>
            <div className='card__info'>
                <h3 className='card___title'>{project.name}</h3>
                <div className='tools'>
                    {
                        project.preview_technologies.map((el, index) => (
                            <div key={index} className='chip'>{el.tech_name}</div>
                        ))
                    }
                </div>
                <div className='access'>
                    {
                        project.website !== "" ?
                        <a href={project.website} rel='noreferrer' target="_blank" className='access__web'>
                            <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faGlobe} />
                            Website
                        </a>
                        :
                        null

                    }
                    {
                        project.github !== "" ?
                        <a href={project.github} rel='noreferrer' target="_blank" className='access__repo' >
                            <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faGithub} />
                            Repositorio
                        </a>
                        :
                        null
                    }
                    
                </div>
                <div className='details'>
                    {
                        project.description !== "" ?
                        <button className='details__link' onClick={openModal}>
                            <FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faPlus} />
                            Detalles
                        </button>
                        :
                        null
                    }
                    
                </div>
            </div>

        </div>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <h3 className='modal__title'>{project.name}</h3>
                <div className='modal__images'>
                    {
                        project.imgs.map((el, index) => (
                            <img key={index}  src={el.img} alt='Img' className='modal__img'></img>
                        ))
                    }                    
                </div>
                <p className='modal__description' dangerouslySetInnerHTML={{ __html: project.description }}></p>
                <h4 className='modal__subtitle'>Tecnologías</h4>
                <div className='tools'>
                    {
                        project.technologies.map((el, index) => (
                            <div key={index} className='chip'>{el.tech_name}</div>
                        ))
                    }
                </div>
        </Modal>
        </>
    );

}