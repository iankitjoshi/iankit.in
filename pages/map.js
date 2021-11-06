import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL, { Marker, NavigationControl } from "react-map-gl";
// import MarkerImg from '../public/images/location-pin.svg'
// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaWFua2l0am9zaGkiLCJhIjoiY2tvaGt5cjczMGMxajJxcm1zNjAzcXJoNiJ9.pm9-AKma7Ao2ulHBxsvlGg";

  const navControlStyle= {
  right: 10,
  top: 10
};


const MyMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 30.738636,
    longitude: 76.7557678,
    zoom: 15,
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
        ...NavigationControl
      });
    },
    [handleViewportChange]
  );

  return (
    <div style={{ height: "480px" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        scrollZoom={false}
        doubleClickZoom={true}
        touchRotate={true}
        keyboard={true}
      >
        <NavigationControl style={navControlStyle} />
        <Marker 
        longitude={76.7557678}
        latitude={30.738636}
        >
          <img src='/images/location-pin.svg' style={{height : '35px' , width:'35px' }} />
        </Marker>
      </MapGL>
    </div>
  );
};

export default MyMap