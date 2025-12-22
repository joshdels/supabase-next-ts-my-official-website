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
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [0, 0],
      zoom: 1,
    });

    mapRef.current = map;

    mapRef.current.addControl(
      new maplibregl.NavigationControl({ showCompass: true, showZoom: true }),
      "top-right"
    );

    map.on("load", () => {
      map.addSource("world-id", {
        type: "geojson",
        data: "data/world_clean.geojson",
      });

      map.addLayer({
        id: "world-fill",
        type: "fill",
        source: "world-id",
        paint: {
          "fill-color": "white",
          "fill-opacity": 0.1
        }
      })
    });

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
