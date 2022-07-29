import React from 'react';
import './Divider.css'

export default function Divider() {
    return(
        <>
        <div className='divider'>
            <hr style={{backgroundColor: 'var(--darkBlue)'}} />
            <hr style={{backgroundColor: 'var(--lightBlue)'}} />
        </div>
        </>
    );
}