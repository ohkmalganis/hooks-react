import React, { useState } from 'react';

const MiFuncion = (props) => {

    const [contador, setContador] = useState(1);

    return (
        <div>
            Contador actual: { contador }
            <br/>
            <button onClick={ () => setContador( contador + 1 ) }>
                ++ Aumentar en 1
            </button>
        </div>
    );

}

// MiFuncion.defaltProps = {
//     contador: 5
// }

export default MiFuncion;