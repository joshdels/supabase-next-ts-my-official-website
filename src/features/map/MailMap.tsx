"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCountRespondents } from "@/src/hooks/useCountRespondents";
import { FeatureCollection, Geometry } from "geojson";

interface CountryProperties {
  country_value: string;
  count?: number;
}

export default function DemoMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const { respondentCount } = useCountRespondents();

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
        center: [0, 0],
        zoom: 1,
      });

      mapRef.current.addControl(
        new maplibregl.NavigationControl({ showCompass: true, showZoom: true }),
        "top-right"
      );
    }

    const map = mapRef.current;
    if (!map) return;

    const updateMap = async () => {
      if (!respondentCount.length) return; 

      const res = await fetch("/data/world_clean.geojson"); 
      const geojson: FeatureCollection<Geometry, CountryProperties> = await res.json();
      

      const countByCountry: Record<string, number> = {};
      respondentCount.forEach(r => {
        countByCountry[r.country_value] = r.respondents_count;
      });

      const joinedGeoJSON: FeatureCollection<Geometry, CountryProperties> = {
        type: "FeatureCollection",
        features: geojson.features.map(f => ({
          ...f,
          properties: {
            ...f.properties,
            count: countByCountry[f.properties.country_value] ?? 0,
          },
        })),
      };

      if (map.getSource("world-id")) {
        (map.getSource("world-id") as maplibregl.GeoJSONSource).setData(joinedGeoJSON);
      } else {
        map.addSource("world-id", {
          type: "geojson",
          data: joinedGeoJSON,
        });

        map.addLayer({
          id: "world-fill",
          type: "fill",
          source: "world-id",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "count"],
              0,
              "red",
              1,
              "yellow",
              5,
              "blue",
            ],
            "fill-opacity": 0.75,
          },
        });
      }
    };

    updateMap();
  }, [respondentCount]);
  return (
    <div
      ref={mapContainer}
      className="w-full h-[82.5vh] border border-gray-300 rounded-2xl hover:shadow-md"
    />
  );
}
