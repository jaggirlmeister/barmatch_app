import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer  = props => {

    const containerStyle = {
        width: '100%',
        height: '60vh'
    }

    return(
        <div>
            <Map
            google={props.google}
            zoom={12}
            containerStyle={containerStyle}
            defaultOptions={{
                disableDefaultUI: true, // disable default map UI
                draggable: true, // make map draggable
                keyboardShortcuts: false, // disable keyboard shortcuts
                scaleControl: true, // allow scale controle
                scrollwheel: true, // allow scroll wheel
            }}
            initialCenter={{ lat: -34.61120987342011, lng: -58.43158274131758}}
        
            ></Map>
        </div>
        
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBWkgCA12w9m00ZPVLiDI2UsV-4zlwomX4"
})(MapContainer)