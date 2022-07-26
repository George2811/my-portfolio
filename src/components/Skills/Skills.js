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
                <SkillIcon className='aa' name="HTML" img="html"></SkillIcon>
                <SkillIcon name="CSS" img="css"></SkillIcon>
                <SkillIcon name="JavaScript" img="javascript"></SkillIcon>
                <SkillIcon name="Flutter" img="flutter"></SkillIcon>
                <SkillIcon name="React" img="react"></SkillIcon>
                <SkillIcon name="Vue.js" img="vue-js"></SkillIcon>
                <SkillIcon name=".Net Core" img="net-core"></SkillIcon>
                <SkillIcon name="SpringBoot" img="springboot"></SkillIcon>
                <SkillIcon name="MySql" img="mysql"></SkillIcon>
                <SkillIcon name="Git" img="git"></SkillIcon>
                <SkillIcon name="Figma" img="figma"></SkillIcon>                              
            </div>
        </section>
        </>
    );
}