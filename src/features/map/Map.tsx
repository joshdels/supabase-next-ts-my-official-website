"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { FeatureCollection, Feature, Polygon } from "geojson";

export default function Map() {
  // Reference to the HTML div container for MapLibre map
  const mapContainer = useRef<HTMLDivElement | null>(null);
  // Reference to the MapLibre map instance
  const mapRef = useRef<maplibregl.Map | null>(null);
  // Ref for debouncing moveend events (to prevent too many fetches)
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // React state for loading spinner, search input, error messages, and 3D toggle
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");
  const [is3D, setIs3D] = useState(true);

  useEffect(() => {
    if (!searchError) return;

    const timer = setTimeout(() => {
      setSearchError(""); // clear error after 5s
    }, 5000);

    return () => clearTimeout(timer);
  }, [searchError]);

  /**
   * Fetch buildings from Overpass API within a given bounding box
   * Converts OSM elements into GeoJSON Polygon features
   */
  async function fetchBuildings(
    bbox: [number, number, number, number]
  ): Promise<FeatureCollection<Polygon>> {
    const url = "https://overpass-api.de/api/interpreter";
    const query = `
      [out:json][timeout:25];
      (
        way["building"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]});
      );
      out geom;
    `;

    const res = await fetch(url, { method: "POST", body: query });
    const data = await res.json();

    // Map OSM elements to GeoJSON features
    const features: Feature<Polygon>[] = data.elements
      .filter((el: any) => el.type === "way" && el.geometry)
      .map((el: any): Feature<Polygon> => ({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [el.geometry.map((p: any) => [p.lon, p.lat])],
        },
        properties: {
          height: el.tags?.height ? Number(el.tags.height) : null,
          levels: el.tags?.["building:levels"]
            ? Number(el.tags["building:levels"])
            : null,
        },
      }));

    return { type: "FeatureCollection", features };
  }

  /**
   * Search for a location using Nominatim
   * If found, flies the map to the location
   */
  async function handleSearch() {
    if (!search) return;

    setLoading(true);
    setSearchError(""); // reset previous errors

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        search
      )}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        // Smoothly fly to location with zoom
        mapRef.current?.flyTo({
          center: [parseFloat(lon), parseFloat(lat)],
          zoom: 16,
          speed: 1.5,      // slower = calmer
          curve: 1,        // gentler flight arc
          essential: true,
        });
      } else {
        setSearchError("Location not found");
      }
    } catch (err) {
      console.error(err);
      setSearchError("Error searching location");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Prevent initializing map multiple times
    if (!mapContainer.current || mapRef.current) return;

    // Initialize MapLibre map
    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json", // grayscale no-label basemap
      center: [120.9842, 14.5995], // Manila
      zoom: 16,
      // minZoom: 15,
      pitch: 45,
      bearing: -17.6,
      attributionControl: false,
    });

    const map = mapRef.current;

    /**
     * Load buildings and add/update the 3D extrusion layer
     */
    async function loadBuildings() {
      if (!mapRef.current) return;
      const zoom = mapRef.current.getZoom();

      // Skip fetching buildings if zoomed out too far
      if (zoom < 14) {
        // Optional: show message in loading spinner
        setLoading(true);
        setSearchError("Zoom in more to load buildings"); // show message to user
        setTimeout(() => setLoading(false), 1000); // hide after 1s
        return;
      }

      setLoading(true);
      setSearchError(""); // clear previous messages

      try {
        const bounds = mapRef.current.getBounds();
        const bbox: [number, number, number, number] = [
          bounds.getWest(),
          bounds.getSouth(),
          bounds.getEast(),
          bounds.getNorth(),
        ];

        const geojson = await fetchBuildings(bbox);

        const source = mapRef.current.getSource("buildings") as maplibregl.GeoJSONSource;
        if (source) {
          source.setData(geojson);
        } else {
          mapRef.current.addSource("buildings", { type: "geojson", data: geojson });
          mapRef.current.addLayer({
            id: "3d-buildings",
            type: "fill-extrusion",
            source: "buildings",
            paint: {
              "fill-extrusion-color": [
                "interpolate",
                ["linear"],
                ["coalesce", ["get", "height"], ["*", ["coalesce", ["get", "levels"], 1], 3]],
                0, "#e9edf4",
                3, "#cdd6e4",
                8, "#9fb2cf",
                20, "#5f7fb3",
                30, "#1e3f73",
              ],
              "fill-extrusion-height": ["coalesce", ["get", "height"], ["*", ["coalesce", ["get", "levels"], 1], 3]],
              "fill-extrusion-base": 0,
              "fill-extrusion-opacity": 0.9,
            },
          });
        }
      } finally {
        setLoading(false);
      }
    }

    // Load buildings when map initially loads
    map.on("load", loadBuildings);

    // Debounced reload when user moves the map
    map.on("moveend", () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => loadBuildings(), 300); // 300ms debounce
    });

    // Clean up map on component unmount
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      map.remove();
    };
  }, []);

  /**
   * Toggle between 2D and 3D view
   * Adjust pitch, rotation, and building extrusion height
   */
  const toggle3D = () => {
    if (!mapRef.current) return;

    if (is3D) {
      // Switch to 2D
      mapRef.current.easeTo({ pitch: 0, bearing: 0 });
      mapRef.current.dragRotate.disable();
      mapRef.current.touchZoomRotate?.disableRotation?.();

      if (mapRef.current.getLayer("3d-buildings")) {
        // Collapse extrusion height to 0 in 2D
        mapRef.current.setPaintProperty("3d-buildings", "fill-extrusion-height", 0);
      }
    } else {
      // Switch to 3D
      mapRef.current.easeTo({ pitch: 45, bearing: -17.6 });
      mapRef.current.dragRotate.enable();
      mapRef.current.touchZoomRotate?.enableRotation?.();

      if (mapRef.current.getLayer("3d-buildings")) {
        mapRef.current.setPaintProperty(
          "3d-buildings",
          "fill-extrusion-height",
          ["coalesce", ["get", "height"], ["*", ["coalesce", ["get", "levels"], 1], 3]]
        );
      }
    }

    setIs3D(!is3D);
  };

    const levels = [
      { color: "#e9edf4", label: "0-1 level" },
      { color: "#cdd6e4", label: "2-3 levels" },
      { color: "#9fb2cf", label: "4-6 levels" },
      { color: "#5f7fb3", label: "7-10 levels" },
      { color: "#1e3f73", label: "10+ levels" },
    ];

  return (
    <div className="relative w-full">
      {/* Search bar */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="px-2 py-1 rounded-lg border border-gray-300 shadow-sm bg-gray-100 hover:border-gray-400"
            aria-label="Search location"
          />
          <button
            onClick={handleSearch}
            className="px-3 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-600 shadow-sm cursor-pointer"
            aria-label="Search button"
          >
            Go
          </button>
        </div>
        {searchError && (
          <div className="bg-gray-50 rounded-lg px-2 py-1 shadow-sm text-center">
            <span className="text-red-600 text-sm font-semibold">{searchError}</span>
          </div>
        )}
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="absolute top-3 right-3 z-20 bg-white/90 px-3 py-1 rounded-lg text-sm shadow flex flex-col sm:flex-row lg:flex-row items-center gap-2">
          <span className="animate-spin h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full" />
          <span className="whitespace-nowrap">Loading buildings…</span>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 z-20 bg-white rounded-lg shadow p-3 w-40 text-sm">
        <div className="font-semibold mb-2 text-center text-lg">Building Floors</div>
        {levels.map((level) => (
          <div key={level.label} className="flex items-center justify-between mt-1 w-full">
            <span
              className="block w-4 h-4 rounded-sm"
              style={{ backgroundColor: level.color }}
            />
            <span>{level.label}</span>
          </div>
        ))}
      </div>

      {/* 2D/3D toggle */}
      <button
        onClick={toggle3D}
        className="absolute bottom-3 right-3 z-20 px-3 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 cursor-pointer"
        aria-label="Toggle 2D/3D map"
      >
        {is3D ? "Switch to 2D" : "Switch to 3D"}
      </button>

      {/* Map container */}
      <div
        ref={mapContainer}
        className="w-full h-145  border border-gray-300 rounded-2xl hover:shadow-sm"
      />
    </div>
  );
}
