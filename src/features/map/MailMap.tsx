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

  const topFive = [...respondentCount]
    .sort((a, b) => b.respondents_count - a.respondents_count)
    .slice(0, 5);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainer.current,
        style:
          "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
        center: [0, 0],
        zoom: 1,
        minZoom: 1,
        maxZoom: 3,
        attributionControl: false,
      });

      mapRef.current.addControl(
        new maplibregl.NavigationControl({
          showCompass: false,
          showZoom: true,
        }),
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
    <div className="relative w-full h-[82.5vh]">
      {/* Map container */}
      <div
        ref={mapContainer}
        className="w-full h-full border border-gray-300 rounded-2xl hover:shadow-md"
      />

      {/* Bottom-right legend */}
      {topFive.length > 0 && (
        <div className="absolute bottom-4 left-4 z-50 w-50 rounded-xl bg-white backdrop-blur-md shadow-lg border border-gray-200 p-4">
          <h4 className="font-semibold text-gray-800 text-center mb-3">
            Top Respondents
          </h4>
          <ul className="space-y-2">
            {topFive.map((item, index) => (
              <li
                key={item.country_value}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="flex items-center justify-center text-xs font-semibold text-gray-700">
                    {index + 1}
                  </span>
                  <span className="truncate text-gray-800">
                    {item.country_value}
                  </span>
                </div>
                <span className="ml-3 px-2 py-0.5 text-xs font-medium text-gray-700">
                  {item.respondents_count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
