import React, { Component } from 'react';

class Coordenadas extends Component {

    constructor(props){
        super(props);
    }

    state = {
        contador: 0
    };

    handleContador = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <div>
                Contador: { this.state.contador }
                <button onClick={ this.handleContador }>
                    ++ Aumentar en 1
                </button>
            </div>
        );
    }
}

export default Coordenadas;