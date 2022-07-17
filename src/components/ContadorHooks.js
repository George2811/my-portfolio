import React, { useState } from 'react';

export default function ContadorHooks(props) {
    const [contador, setContador] = useState(0);

    const sum = ()=> setContador(contador + 1);
    const rest = ()=> setContador(contador - 1);
    
    return(
        <>
        <h1>George, esto es un hook JS!</h1>
        <h1>Esto es un contador de {props.title}</h1>
        <nav>
            <button onClick={sum}>+</button>
            <button onClick={rest}>-</button>
        </nav>
        <h3>{contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps = {
    title: 'Clicks',
}