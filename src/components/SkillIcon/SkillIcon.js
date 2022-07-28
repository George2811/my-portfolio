import React from 'react';
import './SkillIcon.css'

export default function SkillIcon(props){
    const { img } = props;

    return(

        <div id="logo-holder">
            <img className='image' src={require(`../../assets/skill-icons/${img}.svg`)} alt={props.name}></img>
            <p className={`text ${props.img}`}>{props.name}</p>
        </div>

    );
}