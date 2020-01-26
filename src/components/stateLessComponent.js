import React, { useState } from 'react';

const Coordenadas = () => {

    const [contador, setContador] = useState(0);

    return(
        <div>
            Contador: { contador }
            <button onClick={ () => setContador( contador + 1 ) }>
                ++ Aumentar en 1
            </button>
        </div>
    );
}

export default Coordenadas;