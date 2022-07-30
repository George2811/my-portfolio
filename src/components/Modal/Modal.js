import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css'

export default function Modal({children, isOpen, closeModal}) {
    const handleModalContainerClick = e => e.stopPropagation();
    return(
        <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <div className='modal-container' onClick={handleModalContainerClick}>
                <button className='modal-close' onClick={closeModal}>
                    <FontAwesomeIcon className="icon-close" icon={faXmark} />
                </button>
                {children}
            </div>
        </article>
    );
}