import { React, useState } from 'react';
import Card from '../Card/Card';
import './Portfolio.css'

export default function Portfolio(){
    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <>
        <section className='portfolio__section'>
            <h2 className='portfolio__title'>Portafolio</h2>
            <p className='portfolio__description'>En el 2019 comencé a realizar proyectos a nivel personal, y también participe en grandes proyectos grupales que me permitieron reforzar y adquirir nuevos conocimientos.</p>
            <div className='container__tabs'>
                <div className='bloc__tabs'>
                    <button className={toggle === 1 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)}>Top</button>
                    <button className={toggle === 2 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)}>Web</button>
                    <button className={toggle === 3 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(3)}>Mobile</button>
                    <button className={toggle === 4 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(4)}>Landing Pages</button>
                    <button className={toggle === 5 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(5)}>Designs</button>
                    <button className={toggle === 6 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(6)}>Others</button>
                </div>
                <div className='content__tabs'>
                    <div className={toggle === 1 ? "content  active-content" : "content"}>
                        <Card name='PeruStars'></Card>
                    </div>

                    <div className={toggle === 2 ? "content  active-content" : "content"}>
                        <h2>Content 2</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                    </div>

                    <div className={toggle === 3 ? "content  active-content" : "content"}>
                        <h2>Content 3</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                    </div>
                    <div className={toggle === 4 ? "content  active-content" : "content"}>
                        <h2>Content 4</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit anissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                    </div>
                    <div className={toggle === 5 ? "content  active-content" : "content"}>
                        <h2>Content 5</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                    </div>
                    <div className={toggle === 6 ? "content  active-content" : "content"}>
                        <h2>Content 6</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimosunt.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}