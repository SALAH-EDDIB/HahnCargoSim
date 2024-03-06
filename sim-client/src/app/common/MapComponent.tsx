import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;