import React from 'react';
import SkillIcon from './SkillIcon/SkillIcon';
import './Skills.css'

export default function Skills(){

    return(
        <>
        <section class="skills__section">
            <h2 class="skills__title">Habilidades</h2>
            <p class="skills__description">Dentro de este apasionante mundo.</p>  
            <div class="skills__set">
                <SkillIcon name="HTML" img="html.svg"></SkillIcon>
                              
            </div>
        </section>
        </>
    );
}