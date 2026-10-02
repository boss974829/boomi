import { create } from "zustand";

export type Basemap = "satellite" | "relief" | "physical";

type Commands = {
  zoomBy: (delta: number) => void;
  northUp: () => void;
};

type AtlasState = {
  ready: boolean;
  mapError: string | null;
  basemap: Basemap;
  labels: boolean;
  borders: boolean;
  globe: boolean;
  exaggeration: number;
  activeId: string;
  query: string;
  lng: number;
  lat: number;
  zoom: number;
  pitch: number;
  bearing: number;
  centerElevation: number | null;
  cursorElevation: number | null;
  cursorLng: number | null;
  cursorLat: number | null;
  setBasemap: (basemap: Basemap) => void;
  toggleLabels: () => void;
  toggleBorders: () => void;
  toggleGlobe: () => void;
  setExaggeration: (exaggeration: number) => void;
  setActiveId: (activeId: string) => void;
  setQuery: (query: string) => void;
};

export const useAtlas = create<AtlasState>((set) => ({
  ready: false,
  mapError: null,
  basemap: "satellite",
  labels: true,
  borders: true,
  globe: true,
  exaggeration: 2.4,
  activeId: "land",
  query: "",
  lng: 79.05,
  lat: 22.55,
  zoom: 4.32,
  pitch: 50,
  bearing: -14,
  centerElevation: null,
  cursorElevation: null,
  cursorLng: null,
  cursorLat: null,
  setBasemap: (basemap) => set({ basemap }),
  toggleLabels: () => set((state) => ({ labels: !state.labels })),
  toggleBorders: () => set((state) => ({ borders: !state.borders })),
  toggleGlobe: () => set((state) => ({ globe: !state.globe })),
  setExaggeration: (exaggeration) => set({ exaggeration }),
  setActiveId: (activeId) => set({ activeId }),
  setQuery: (query) => set({ query }),
}));

let commands: Commands | null = null;

export function bindMap(next: Commands | null) {
  commands = next;
}

export function mapCommands() {
  return commands;
}
