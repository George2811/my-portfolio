import React from 'react';
import './Loader.css'

export default function Loader() {
    return(
        <div className='total__bg'>
            <div className='loader__container'>
                <div className='lds-dual-ring'></div>
                <h2 className='loader__name'>JS</h2>
            </div>
        </div>
    );

}