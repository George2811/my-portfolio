import React from 'react';
import './SkillIcon.css'

export default function SkillIcon(props){
    return(
         <>
        <div id="logo-holder">
            <img className='image' src={`../../../../skill-icons/${props.img}`} alt={`${props.name}`}/>
            <div className='text'>{props.name}</div>
        </div>
        </>
    );
}