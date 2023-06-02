import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "./map/map.css"

const Map = () => {
  return(
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <TileLayer
        attribution=""
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
    </MapContainer>
  )
}

export default Map