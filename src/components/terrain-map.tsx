import { useEffect, useRef } from "react";
import type { GeoJSONSource, Map as MlMap, StyleSpecification } from "maplibre-gl";
import { PEAKS, findPlace, type Place } from "@/data/places";
import { bindMap, useAtlas, type Basemap } from "@/lib/map-store";

const DEM = "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png";
const SATELLITE =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const PHYSICAL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}";
const LABELS =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}";

const RELIEF_COLOR = [
  "interpolate",
  ["linear"],
  ["elevation"],
  -7000,
  "#07141c",
  -3500,
  "#0c3040",
  -800,
  "#1a5568",
  -80,
  "#3d8494",
  -1,
  "#7eb8b4",
  1,
  "#cbb892",
  30,
  "#8ea56b",
  160,
  "#6d8c50",
  420,
  "#c2a86a",
  900,
  "#a07c52",
  1600,
  "#8a6048",
  2600,
  "#b7a08a",
  3800,
  "#ddd4c6",
  5200,
  "#f3f0ea",
  8200,
  "#ffffff",
];

function makeStyle(exaggeration: number): StyleSpecification {
  return {
    version: 8,
    glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
    projection: { type: "globe" },
    light: {
      anchor: "map",
      position: [1.4, 200, 32],
      color: "#fff3e4",
      intensity: 0.58,
    },
    sky: {
      "sky-color": "#8eb4c8",
      "horizon-color": "#e6efe8",
      "sky-horizon-blend": 0.72,
      "horizon-fog-blend": 0.55,
      "fog-color": "#c9d6d0",
      "fog-ground-blend": 0.12,
      "atmosphere-blend": 0.4,
    },
    terrain: { source: "dem", exaggeration },
    sources: {
      dem: {
        type: "raster-dem",
        tiles: [DEM],
        encoding: "terrarium",
        tileSize: 256,
        maxzoom: 15,
        attribution: "Elevation: AWS Terrain Tiles / SRTM, GMTED, ETOPO1",
      },
      "dem-shade": {
        type: "raster-dem",
        tiles: [DEM],
        encoding: "terrarium",
        tileSize: 256,
        maxzoom: 15,
      },
      "dem-relief": {
        type: "raster-dem",
        tiles: [DEM],
        encoding: "terrarium",
        tileSize: 256,
        maxzoom: 15,
      },
      satellite: {
        type: "raster",
        tiles: [SATELLITE],
        tileSize: 256,
        maxzoom: 18,
        attribution: "Imagery: Esri, Maxar, Earthstar Geographics",
      },
      physical: {
        type: "raster",
        tiles: [PHYSICAL],
        tileSize: 256,
        maxzoom: 10,
        attribution: "Physical map: Esri, USGS, NOAA",
      },
      labels: {
        type: "raster",
        tiles: [LABELS],
        tileSize: 256,
        maxzoom: 19,
        attribution: "Labels: Esri",
      },
      states: {
        type: "geojson",
        data: { type: "FeatureCollection", features: [] },
      },
      peaks: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: PEAKS.map((peak) => ({
            type: "Feature",
            properties: { name: peak.name, rank: peak.rank },
            geometry: { type: "Point", coordinates: [peak.lng, peak.lat] },
          })),
        },
      },
    },
    layers: [
      { id: "bg", type: "background", paint: { "background-color": "#0c1210" } },
      {
        id: "relief",
        type: "color-relief",
        source: "dem-relief",
        layout: { visibility: "none" },
        paint: { "color-relief-color": RELIEF_COLOR as never },
      },
      {
        id: "physical",
        type: "raster",
        source: "physical",
        layout: { visibility: "none" },
        paint: { "raster-fade-duration": 180 },
      },
      {
        id: "satellite",
        type: "raster",
        source: "satellite",
        paint: {
          "raster-fade-duration": 180,
          "raster-saturation": 0.06,
          "raster-contrast": 0.06,
        },
      },
      {
        id: "hillshade",
        type: "hillshade",
        source: "dem-shade",
        paint: {
          "hillshade-illumination-direction": 200,
          "hillshade-illumination-altitude": 38,
          "hillshade-exaggeration": 0.18,
          "hillshade-shadow-color": "#14110e",
          "hillshade-highlight-color": "#f4efe4",
          "hillshade-accent-color": "#6e8578",
        },
      },
      { id: "labels", type: "raster", source: "labels", paint: { "raster-fade-duration": 120 } },
      {
        id: "states-casing",
        type: "line",
        source: "states",
        paint: {
          "line-color": "#0c1210",
          "line-width": ["interpolate", ["linear"], ["zoom"], 3, 1.1, 7, 2.2, 11, 3.2],
          "line-opacity": 0.45,
        },
      },
      {
        id: "states-line",
        type: "line",
        source: "states",
        paint: {
          "line-color": "#e4b15a",
          "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.4, 7, 0.9, 11, 1.3],
          "line-opacity": 0.8,
        },
      },
      {
        id: "peaks",
        type: "symbol",
        source: "peaks",
        filter: ["==", ["get", "rank"], 1],
        minzoom: 5.4,
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Noto Sans Regular"],
          "text-size": 13,
          "text-offset": [0, 0.7],
          "text-anchor": "top",
          "text-allow-overlap": false,
        },
        paint: {
          "text-color": "#e7efe9",
          "text-halo-color": "#0c1210",
          "text-halo-width": 1.3,
        },
      },
      {
        id: "peaks-minor",
        type: "symbol",
        source: "peaks",
        filter: ["==", ["get", "rank"], 2],
        minzoom: 7.2,
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Noto Sans Regular"],
          "text-size": 12,
          "text-offset": [0, 0.65],
          "text-anchor": "top",
        },
        paint: {
          "text-color": "#e7efe9",
          "text-halo-color": "#0c1210",
          "text-halo-width": 1.2,
        },
      },
    ],
  };
}

function applyBasemap(map: MlMap, mode: Basemap) {
  const show = (id: string, on: boolean) => {
    if (!map.getLayer(id)) return;
    map.setLayoutProperty(id, "visibility", on ? "visible" : "none");
  };
  show("satellite", mode === "satellite");
  show("physical", mode === "physical");
  show("relief", mode === "relief");
  if (map.getLayer("hillshade")) {
    map.setPaintProperty("hillshade", "hillshade-exaggeration", mode === "relief" ? 0.48 : 0.16);
  }
}

function frameFor(place: Place, width: number) {
  const tight = width < 720;
  return {
    center: [place.lng, place.lat] as [number, number],
    zoom: Math.max(2.8, place.zoom - (tight ? 0.72 : 0)),
    pitch: tight ? Math.min(place.pitch, 56) : place.pitch,
    bearing: place.bearing,
  };
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TerrainMap() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let map: MlMap | null = null;
    let dead = false;
    let frame = 0;
    let queued = false;
    let booted = false;
    let returnCleanup: (() => void) | null = null;

    void (async () => {
      const maplibregl = await import("maplibre-gl");
      maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
      await import("maplibre-gl/dist/maplibre-gl.css");
      if (dead || !host.current) return;

      const initial = useAtlas.getState();
      const view = new maplibregl.Map({
        container: host.current,
        style: makeStyle(initial.exaggeration),
        center: [initial.lng, initial.lat],
        zoom: initial.zoom,
        pitch: 18,
        bearing: initial.bearing,
        maxPitch: 70,
        minZoom: 2.6,
        maxZoom: 17,
        attributionControl: false,
        maplibreLogo: true,
        logoPosition: "bottom-left",
        fadeDuration: 180,
        canvasContextAttributes: { preserveDrawingBuffer: true, antialias: true },
        pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        renderWorldCopies: false,
      });

      map = view;
      const live = view;

      bindMap({
        zoomBy(delta) {
          live.zoomTo(live.getZoom() + delta, { duration: reducedMotion() ? 0 : 220 });
        },
        northUp() {
          live.easeTo({ bearing: 0, duration: reducedMotion() ? 0 : 450, essential: true });
        },
      });

      let cursor: { lng: number; lat: number; elevation: number | null } | null = null;

      const publish = () => {
        const center = live.getCenter();
        useAtlas.setState({
          lng: center.lng,
          lat: center.lat,
          zoom: live.getZoom(),
          pitch: live.getPitch(),
          bearing: live.getBearing(),
          centerElevation: live.queryTerrainElevation(center),
          ...(cursor
            ? {
                cursorLng: cursor.lng,
                cursorLat: cursor.lat,
                cursorElevation: cursor.elevation,
              }
            : {}),
        });
      };

      const schedule = () => {
        if (queued) return;
        queued = true;
        frame = requestAnimationFrame(() => {
          queued = false;
          if (!dead) publish();
        });
      };

      live.on("move", schedule);
      live.on("mousemove", (event) => {
        cursor = {
          lng: event.lngLat.lng,
          lat: event.lngLat.lat,
          elevation: live.queryTerrainElevation(event.lngLat),
        };
        schedule();
      });
      live.on("mouseout", () => {
        cursor = null;
        useAtlas.setState({ cursorLng: null, cursorLat: null, cursorElevation: null });
      });

      live.on("error", (event) => {
        const message = event.error?.message ?? "";
        if (/style|WebGL|canvas/i.test(message) && !/tile|ajax|image|fetch/i.test(message)) {
          useAtlas.setState({ mapError: "The terrain view could not start on this device.", ready: true });
        }
      });

      const fly = (place: Place) => {
        const camera = frameFor(place, live.getContainer().clientWidth);
        live.flyTo({
          ...camera,
          duration: reducedMotion() ? 0 : 2200,
          essential: true,
          curve: 1.35,
        });
      };

      const boot = () => {
        if (dead || booted) return;
        booted = true;
        const state = useAtlas.getState();
        applyBasemap(live, state.basemap);
        live.setTerrain({ source: "dem", exaggeration: state.exaggeration });
        if (state.globe) live.setProjection({ type: "globe" });
        const source = live.getSource("states") as GeoJSONSource | undefined;
        void fetch("/india-states.geojson")
          .then((response) => response.json())
          .then((data) => {
            if (!dead) source?.setData(data);
          })
          .catch(() => {
            /* borders are optional; the mesh still stands */
          });

        const place = findPlace(state.activeId);
        const camera = frameFor(place, live.getContainer().clientWidth);
        if (reducedMotion()) live.jumpTo(camera);
        else live.easeTo({ ...camera, duration: 1200, essential: true });

        const finish = () => useAtlas.setState({ ready: true });
        if (live.loaded()) finish();
        else live.once("idle", finish);
        window.setTimeout(finish, 1800);
        schedule();
      };

      live.on("load", boot);
      if (live.isStyleLoaded()) boot();
      window.setTimeout(() => {
        if (!dead) useAtlas.setState({ ready: true });
      }, 4500);

      const unsub = useAtlas.subscribe((state, prev) => {
        if (!live.isStyleLoaded()) return;
        if (state.basemap !== prev.basemap) applyBasemap(live, state.basemap);
        if (state.labels !== prev.labels) {
          const visibility = state.labels ? "visible" : "none";
          for (const id of ["labels", "peaks", "peaks-minor"]) {
            if (live.getLayer(id)) live.setLayoutProperty(id, "visibility", visibility);
          }
        }
        if (state.borders !== prev.borders) {
          const visibility = state.borders ? "visible" : "none";
          for (const id of ["states-casing", "states-line"]) {
            if (live.getLayer(id)) live.setLayoutProperty(id, "visibility", visibility);
          }
        }
        if (state.exaggeration !== prev.exaggeration) {
          live.setTerrain({ source: "dem", exaggeration: state.exaggeration });
        }
        if (state.globe !== prev.globe) {
          live.setProjection({ type: state.globe ? "globe" : "mercator" });
        }
        if (state.activeId !== prev.activeId) fly(findPlace(state.activeId));
      });

      const observer = new ResizeObserver(() => live.resize());
      observer.observe(host.current);

      returnCleanup = () => {
        unsub();
        observer.disconnect();
      };
    })();

    return () => {
      dead = true;
      cancelAnimationFrame(frame);
      returnCleanup?.();
      bindMap(null);
      map?.remove();
    };
  }, []);

  return <div ref={host} className="atlas-map absolute inset-0 h-full w-full" role="application" aria-label="Three-dimensional topographic map of India" />;
}
