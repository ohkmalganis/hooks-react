import React, {Component} from 'react';

class Coords extends Component {
    state = {
        latitud: null,
        longitud: null
    };

    render() {
        return this.state.latitud == null ? (
            <div>Cargando...</div>
        ) : (
            <div>
                <h2>Latitud: { this.state.latitud } </h2>
                <h2>Longitud: { this.state.longitud } </h2>
            </div>
        )
    }

    componentDidMount() {
        this.geoId = window.navigator.geolocation.watchPosition((position) => {
            this.setState({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.geoId);
    }

}

export default Coords;