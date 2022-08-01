import { React, useState } from 'react';
import data from '../../data/projects.json';
import Card from '../Card/Card';
import './Portfolio.css'

export default function Portfolio(){
    const [toggle, setToggle] = useState(1);
    const projects = data.projects;

    const toggleTab = (index) => {
        setToggle(index);
        console.log(projects);
    };

    return (
        <>
        <section className='portfolio__section' id='portfolio'>
            <h2 className='portfolio__title'>Portafolio</h2>
            <p className='portfolio__description'>En el 2019 comencé a realizar proyectos a nivel personal, y también participe en grandes proyectos grupales que me permitieron reforzar y adquirir nuevos conocimientos.</p>
            <div className='container__tabs'>
                <div className='bloc__tabs'>
                    <button className={toggle === 1 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)}>Top</button>
                    <button className={toggle === 2 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)}>Web</button>
                    <button className={toggle === 3 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(3)}>Mobile</button>
                    <button className={toggle === 4 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(4)}>Landing Pages</button>
                    <button className={toggle === 5 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(5)}>Diseños</button>
                    <button className={toggle === 6 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(6)}>Otros</button>
                </div>
                <div className='content__tabs'>
                    <div className={toggle === 1 ? "content  active-content" : "content"}>
                        {
                            projects.map((el, index)=>(
                                el.is_top ? <Card key={index} el={el}></Card> : null
                            ))
                        }
                    </div>

                    <div className={toggle === 2 ? "content  active-content" : "content"}>
                        {
                            projects.map((el, index)=>(
                                el.category === 'Web' ? <Card key={index} el={el}></Card> : null
                            ))
                        }
                    </div>

                    <div className={toggle === 3 ? "content  active-content" : "content"}>
                        {
                            projects.map((el, index)=>(
                                el.category === 'Mobile' ? <Card key={index} el={el}></Card> : null
                            ))
                        }
                    </div>
                    <div className={toggle === 4 ? "content  active-content" : "content"}>
                        {
                            projects.map((el, index)=>(
                                el.category === 'LP' ? <Card key={index} el={el}></Card> : null
                            ))
                        }
                    </div>
                    <div className={toggle === 5 ? "content  active-content" : "content"}>
                        {
                            projects.map((el, index)=>(
                                el.category === 'Designs' ? <Card key={index} el={el}></Card> : null
                            ))
                        }
                    </div>
                    <div className={toggle === 6 ? "content  active-content" : "content"}>
                        {
                            projects.map((el, index)=>(
                                el.category === 'Others' ? <Card key={index} el={el}></Card> : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}