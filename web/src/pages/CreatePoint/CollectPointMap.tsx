import { LeafletMouseEvent, LeafletMouseEventHandlerFn } from "leaflet";
import React, { useState, useEffect } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

const CollectPointMap = (props: {
  initialPosition: [number, number];
  selectedPosition: [number, number];
  handleMapClick: LeafletMouseEventHandlerFn;
}) => {
  return (
    <Map
      center={props.initialPosition}
      zoom={15}
      onclick={props.handleMapClick}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.selectedPosition} />
    </Map>
  );
};

export default CollectPointMap;
