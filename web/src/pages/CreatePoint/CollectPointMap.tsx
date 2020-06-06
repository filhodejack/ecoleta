import { LeafletMouseEvent } from "leaflet";
import React, { useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

type LatLng = [number, number];

const CollectPointMap = () => {
  const [selectedPosition, setSelectedPosition] = useState<LatLng>([0, 0]);

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  return (
    <Map center={[-20, -46]} zoom={15} onclick={handleMapClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={selectedPosition} />
    </Map>
  );
};

export default CollectPointMap;
