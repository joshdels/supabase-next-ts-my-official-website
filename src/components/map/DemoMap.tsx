"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function DemoMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    // this sets the actual DOM
    mapRef.current = new maplibregl.Map({
      container: mapContainer.current, 
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [0, 0],
      zoom: 1,
    });

    mapRef.current.addControl(new maplibregl.NavigationControl({ showCompass: true, showZoom: true }), "top-right");
    
    new maplibregl.Marker({ color: "#FF5722" })
      .setLngLat([120.982, 14.6042])
      .setPopup(new maplibregl.Popup({ offset: 25 }).setText("Hello! This is your demo marker."))
      .addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[82.5vh] border border-gray-300 rounded-2xl hover:shadow-md"
    />
  );
}
