import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";

const CollectPointMap = () => (
  <Map center={[-20, -46]} zoom={15}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-20, -46]} />
  </Map>
);

export default CollectPointMap;
