import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { db } from 'lib/firebase'
import React, { useState, useEffect } from 'react'
import { Container } from './styled'

const MapContainer  = props => {

    const containerStyle = {
        width: '100%',
        height: '60vh'
    }

    const [locations, setLocations] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        const fetchLocations = () => {
            try{
                let posts = [];
                db.collection("bares").get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        const post = { id: doc.id, ...doc.data()}
                        posts.push(post)
                    });
                setLocations(posts)
                });
            }
            catch(error){
                console.log(error)
            }
        }
        fetchLocations();
    }, [])

    return(
        <div>
            <Container>
                <Map
                google={props.google}
                zoom={12}
                containerStyle={containerStyle}
                options={{
                    mapTypeControlOptions: {
                        mapTypeIds :[]
                    },
                    streetViewControl: false
                }}
                defaultOptions={{
                    disableDefaultUI: true, // disable default map UI
                    draggable: true, // make map draggable
                    keyboardShortcuts: false, // disable keyboard shortcuts
                    scaleControl: true, // allow scale controle
                    scrollwheel: true, // allow scroll wheel
                    mapTypeControlOptions: false
                }}
                initialCenter={{ lat: -34.61120987342011, lng: -58.43158274131758}}
                >

                {locations.map(location =>
                    <Marker
                        position={{ lat: location.lat, lng: location.lng}}
                        animation={google.maps.Animation.DROP}
                        onClick={()=> {
                            setSelectedMarker(location);
                        }}
                    />
                )}

                {selectedMarker && (
                    <InfoWindow
                        visible={true}
                        onCloseClick={()=>{
                            setSelectedMarker(null);
                        }}
                        position={{
                            lat: selectedMarker.lat,
                            lng: selectedMarker.lng
                        }}
                    >
                        <h1>{selectedMarker.nombre}</h1>
                        <h2>{selectedMarker.locacion}</h2>
                        <p>{selectedMarker.description}</p>
                    </InfoWindow>
                )}
            
                </Map>
            </Container>
        </div>
        
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBWkgCA12w9m00ZPVLiDI2UsV-4zlwomX4"
})(MapContainer)