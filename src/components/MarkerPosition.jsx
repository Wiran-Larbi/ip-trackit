import React from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import Icon from '../icon'
import { useEffect } from 'react'

export function MarkerPosition({ address }) {
    const position = [address.location.lat, address.location.lng];
    const map = useMap();

    useEffect(() => {
        map.flyTo(position, 13, {
            animate: true
        })
    }, [map, position])

    return (
        <>
        <Marker icon={Icon} position={[address.location.lat, address.location.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </>
    )
}