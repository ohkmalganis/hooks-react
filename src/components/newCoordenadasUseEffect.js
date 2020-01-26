import React, { useState, useEffect } from 'react';

const useCoords = () => {

    const [ coordenadas, setCoordenadas ] = useState({
        latitud: null,
        longitud: null
    });

    let geoId;

    useEffect(() => {

        geoId = window.navigator.geolocation.watchPosition(position => {
            setCoordenadas({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
        });

        return (() => {
            navigator.geolocation.clearWatch(geoId);
        });

    })
    
    return coordenadas;
}

const Coords = () => {
    const coordenadas = useCoords();
    return coordenadas.latitud == null ? (
        <div>Cargando...</div>
    ) : (
        <div>
            <h2>Latitud: { coordenadas.latitud } </h2>
            <h2>Longitud: { coordenadas.longitud } </h2>
        </div>
    )
}
export default Coords;