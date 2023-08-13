
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MarkerPosition } from './MarkerPosition'

export function MapModal({ address }) {


  return <>
    <div className="absolute lg:-mt-20 md:-mt-40 -mt-72" style={{ zIndex: -10 }}>
      <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true} style={{ height: "700px", width: "100vw" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerPosition address={address} />

      </MapContainer>

    </div>
  </>
}