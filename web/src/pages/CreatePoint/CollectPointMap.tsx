import { LeafletMouseEvent } from "leaflet";
import React, { useState, useEffect } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

type LatLng = [number, number];

const CollectPointMap = () => {
  const [initialPosition, setInitialPosition] = useState<LatLng>([0, 0]);
  const [selectedPosition, setSelectedPosition] = useState<LatLng>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  return (
    <Map center={initialPosition} zoom={15} onclick={handleMapClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={selectedPosition} />
    </Map>
  );
};

export default CollectPointMap;
