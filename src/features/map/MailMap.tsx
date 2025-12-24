"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCountRespondents } from "@/src/hooks/useCountRespondents";
import { FeatureCollection, Point, Feature } from "geojson";
import { centroid } from "@turf/turf";

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
        style:
          "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
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
      const geojson: FeatureCollection = await res.json();

      const countByCountry: Record<string, number> = {};
      respondentCount.forEach((r) => {
        countByCountry[r.country_value] = r.respondents_count;
      });

      const centroids: FeatureCollection<Point, CountryProperties> = {
        type: "FeatureCollection",
        features: geojson.features
          .map((f: Feature<any>) => {
            // safely access country_value
            const countryValue = f.properties?.country_value ?? "Unknown";
            const count = countByCountry[countryValue] ?? 0;
            const c = centroid(f);
            return {
              type: "Feature" as const,
              geometry: c.geometry,
              properties: {
                country_value: countryValue,
                count,
              },
            };
          })
          .filter((f) => f.properties?.count && f.properties.count > 0),
      };

      const bounds = new maplibregl.LngLatBounds();

      centroids.features.forEach((f) => {
        bounds.extend(f.geometry.coordinates as [number, number]);
      });

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, {
          padding: 100,
          maxZoom: 6,
          duration: 800,
        });
      }

      if (map.getSource("world-centroids")) {
        (map.getSource("world-centroids") as maplibregl.GeoJSONSource).setData(
          centroids
        );
      } else {
        map.addSource("world-centroids", {
          type: "geojson",
          data: centroids,
        });

        map.addLayer({
          id: "world-circles",
          type: "circle",
          source: "world-centroids",
          paint: {
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["get", "count"],
              1,
              3,
              5,
              10,
              20,
              25,
            ],
            "circle-color": [
              "interpolate",
              ["linear"],
              ["get", "count"],
              1,
              "#eeeeee",
              2,
              "#74add1",
              5,
              "#abd9e9",
              10,
              "#ffffbf",
              20,
              "#fdae61",
              50,
              "#d7191c",
            ],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 0.5,
            "circle-opacity": 0.8,
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
