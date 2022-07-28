import React from 'react';


import './SkillIcon.css'

export default function SkillIcon(props){

    //<img className='image' src={`../../../../assets/skill-icons/${props.img}.svg`} alt={`${props.name}`} height='60px'/>
    //<img className='image' src={`../../../assets/skill-icons/${props.img}.svg`} alt={`${props.name}`} height='60px'/>
    return(

        <div id="logo-holder">
            <img className='image' src={`assets/skill-icons/${props.img}.svg`} alt={`${props.name}`} height='60px'/>
            <p className={`text ${props.img}`}>{props.name}</p>
        </div>

    );
}