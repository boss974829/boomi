import { useEffect, useState, type ComponentType } from "react";
import { useShallow } from "zustand/react/shallow";
import { Compass, Minus, Plus } from "lucide-react";
import { PLACES, findPlace } from "@/data/places";
import { formatCoord, formatMeters } from "@/lib/geo-format";
import { mapCommands, useAtlas, type Basemap } from "@/lib/map-store";

const MODES: { id: Basemap; label: string }[] = [
  { id: "satellite", label: "Satellite" },
  { id: "relief", label: "Relief" },
  { id: "physical", label: "Physical" },
];

export function Observatory() {
  const [MapView, setMapView] = useState<ComponentType | null>(null);

  useEffect(() => {
    let live = true;
    void import("@/components/terrain-map").then((mod) => {
      if (live) setMapView(() => mod.TerrainMap);
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-ink text-mist">
      <Dock />
      <section className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        <MobileBar />
        <div className="relative min-h-0 flex-1">
          {MapView ? <MapView /> : null}
          <Veil />
          <Controls />
          <Readout />
        </div>
        <MobileStrip />
      </section>
    </div>
  );
}

function Dock() {
  const activeId = useAtlas((s) => s.activeId);
  const place = findPlace(activeId);

  return (
    <aside className="hidden h-dvh w-80 shrink-0 flex-col border-r border-line bg-panel md:flex">
      <header className="px-5 pt-5 pb-4">
        <p className="text-xs tracking-widest text-sage uppercase">Field atlas · India</p>
        <h1 className="mt-1 font-display text-4xl leading-none text-mist">Bhoomi</h1>
        <p className="mt-3 text-sm text-pretty text-sage">
          Live satellite draped on a real elevation mesh. Drag to orbit, scroll to descend, right-drag to tilt.
        </p>
      </header>
      <article className="mx-5 border-t border-line py-4">
        <p className="text-xs tracking-widest text-saffron uppercase">{place.kind}</p>
        <h2 className="mt-1 font-display text-2xl text-balance text-mist">{place.name}</h2>
        <p className="mt-1 text-sm text-sage">{place.region}</p>
        <p className="mt-3 text-sm text-pretty text-mist">{place.text}</p>
        <p className="mt-3 text-sm text-sage">
          Surveyed <span className="text-mist tabular-nums">{place.surveyed}</span>
        </p>
      </article>
      <div className="px-5 pb-2">
        <Search />
        <Modes />
      </div>
      <PlaceList className="min-h-0 flex-1 overflow-y-auto px-3 pb-3" />
      <footer className="border-t border-line px-5 py-4">
        <ReliefSlider />
        <Flags />
        <Credit />
      </footer>
    </aside>
  );
}

function MobileBar() {
  return (
    <header className="flex shrink-0 items-center justify-between gap-3 border-b border-line bg-panel px-3 py-2 md:hidden">
      <div className="min-w-0">
        <p className="text-xs tracking-widest text-sage uppercase">Field atlas</p>
        <h1 className="font-display text-2xl leading-none text-mist">Bhoomi</h1>
      </div>
      <Modes compact />
    </header>
  );
}

function MobileStrip() {
  const activeId = useAtlas((s) => s.activeId);
  const place = findPlace(activeId);

  return (
    <div className="w-full min-w-0 shrink-0 border-t border-line bg-panel md:hidden">
      <p className="px-3 pt-2 text-xs text-sage">
        Mesh <MeshReadout />
        <span className="text-mist"> · {place.surveyed}</span>
      </p>
      <p className="line-clamp-2 px-3 text-sm text-pretty text-mist">{place.text}</p>
      <PlaceList className="flex w-full min-w-0 gap-2 overflow-x-auto px-3 py-2" horizontal />
      <div className="px-3 pb-3">
        <ReliefSlider />
        <Flags />
        <p className="text-xs text-pretty text-sage">
          Esri, Maxar imagery on open SRTM elevation. Not a Google Maps embed.
        </p>
      </div>
    </div>
  );
}

function Veil() {
  const ready = useAtlas((s) => s.ready);
  const mapError = useAtlas((s) => s.mapError);
  if (ready && !mapError) return null;
  return (
    <div className="absolute inset-0 z-10 grid place-items-center bg-ink px-6 text-center">
      <div>
        <p className="text-xs tracking-widest text-sage uppercase">Elevation mesh</p>
        <p className="mt-2 font-display text-3xl text-mist">{mapError ? "Terrain unavailable" : "Draping the land"}</p>
        <p className="mt-2 text-sm text-sage">
          {mapError ?? "Fetching satellite imagery and the open elevation tiles for India."}
        </p>
      </div>
    </div>
  );
}

function Controls() {
  const bearing = useAtlas((s) => s.bearing);
  return (
    <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
      <button type="button" className="grid size-11 place-items-center bg-panel text-mist" aria-label="Zoom in" onClick={() => mapCommands()?.zoomBy(0.7)}>
        <Plus size={18} strokeWidth={1.5} />
      </button>
      <button type="button" className="grid size-11 place-items-center bg-panel text-mist" aria-label="Zoom out" onClick={() => mapCommands()?.zoomBy(-0.7)}>
        <Minus size={18} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        className="grid size-11 place-items-center bg-panel text-mist"
        aria-label="Reset north"
        onClick={() => mapCommands()?.northUp()}
      >
        <Compass
          size={18}
          strokeWidth={1.5}
          style={{ transform: `rotate(${-bearing}deg)` }}
        />
      </button>
    </div>
  );
}

function Readout() {
  const view = useAtlas(
    useShallow((s) => ({
      lng: s.lng,
      lat: s.lat,
      pitch: s.pitch,
      centerElevation: s.centerElevation,
      cursorElevation: s.cursorElevation,
      cursorLng: s.cursorLng,
      cursorLat: s.cursorLat,
    })),
  );
  const aimed = view.cursorLng != null && view.cursorLat != null;
  const lat = aimed ? view.cursorLat! : view.lat;
  const lng = aimed ? view.cursorLng! : view.lng;
  const elevation = aimed ? view.cursorElevation : view.centerElevation;

  return (
    <div className="pointer-events-none absolute bottom-3 left-24 z-20 hidden max-w-xs bg-ink/95 px-3 py-2 md:block">
      <p className="text-xs tracking-widest text-sage uppercase">{aimed ? "Under the cursor" : "Under the view"}</p>
      <p className="font-display text-xl text-mist tabular-nums">{formatMeters(elevation)}</p>
      <p className="text-xs text-sage tabular-nums">
        {formatCoord(lat, lng)} · tilt {Math.round(view.pitch)}°
      </p>
    </div>
  );
}

function MeshReadout() {
  const centerElevation = useAtlas((s) => s.centerElevation);
  const cursorElevation = useAtlas((s) => s.cursorElevation);
  return <span className="text-mist tabular-nums">{formatMeters(cursorElevation ?? centerElevation)}</span>;
}

function Search() {
  const query = useAtlas((s) => s.query);
  const setQuery = useAtlas((s) => s.setQuery);
  return (
    <label className="block">
      <span className="sr-only">Search landforms</span>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search landforms"
        className="w-full border-b border-line bg-transparent py-2 text-sm text-mist outline-none placeholder:text-sage"
      />
    </label>
  );
}

function Modes({ compact = false }: { compact?: boolean }) {
  const basemap = useAtlas((s) => s.basemap);
  const setBasemap = useAtlas((s) => s.setBasemap);
  return (
    <div className={`flex ${compact ? "" : "mt-3"}`} role="group" aria-label="Basemap">
      {MODES.map((mode) => {
        const on = basemap === mode.id;
        return (
          <button
            key={mode.id}
            type="button"
            aria-pressed={on}
            onClick={() => setBasemap(mode.id)}
            className={`min-h-11 px-2 text-sm ${on ? "border-b-2 border-saffron text-mist" : "border-b-2 border-transparent text-sage"}`}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}

function PlaceList({ className, horizontal = false }: { className: string; horizontal?: boolean }) {
  const activeId = useAtlas((s) => s.activeId);
  const query = useAtlas((s) => s.query);
  const setActiveId = useAtlas((s) => s.setActiveId);
  const needle = query.trim().toLowerCase();
  const places = needle
    ? PLACES.filter((place) => `${place.name} ${place.region} ${place.kind}`.toLowerCase().includes(needle))
    : PLACES;

  if (places.length === 0) {
    return <p className="px-2 py-4 text-sm text-sage">No landform matches that.</p>;
  }

  return (
    <ul className={className}>
      {places.map((place) => {
        const on = place.id === activeId;
        return (
          <li key={place.id} className={horizontal ? "shrink-0" : ""}>
            <button
              type="button"
              aria-current={on ? "true" : undefined}
              onClick={() => setActiveId(place.id)}
              className={`min-h-11 border-l-2 px-3 py-2 text-left ${
                horizontal ? "whitespace-nowrap border-l-0" : "w-full"
              } ${on ? "border-saffron bg-ink text-mist" : "border-transparent text-sage"}`}
            >
              <span className="block text-sm text-mist">{place.name}</span>
              {horizontal ? null : <span className="block text-xs text-sage">{place.region}</span>}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function ReliefSlider() {
  const exaggeration = useAtlas((s) => s.exaggeration);
  const setExaggeration = useAtlas((s) => s.setExaggeration);
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-xs tracking-widest text-sage uppercase">
        Vertical scale
        <span className="text-mist tabular-nums">{exaggeration.toFixed(1)}×</span>
      </span>
      <input
        className="relief-slider mt-1 w-full"
        type="range"
        min={1}
        max={4}
        step={0.1}
        value={exaggeration}
        aria-valuetext={`${exaggeration.toFixed(1)} times true scale`}
        onChange={(event) => setExaggeration(Number(event.target.value))}
      />
    </label>
  );
}

function Flags() {
  const labels = useAtlas((s) => s.labels);
  const borders = useAtlas((s) => s.borders);
  const globe = useAtlas((s) => s.globe);
  const toggleLabels = useAtlas((s) => s.toggleLabels);
  const toggleBorders = useAtlas((s) => s.toggleBorders);
  const toggleGlobe = useAtlas((s) => s.toggleGlobe);
  return (
    <div className="mt-1 flex flex-wrap" role="group" aria-label="Map layers">
      <Flag on={labels} label="Labels" onClick={toggleLabels} />
      <Flag on={borders} label="Borders" onClick={toggleBorders} />
      <Flag on={globe} label="Globe" onClick={toggleGlobe} />
    </div>
  );
}

function Flag({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`min-h-11 px-3 text-sm ${on ? "text-mist" : "text-sage"}`}
    >
      {label}
    </button>
  );
}

function Credit() {
  return (
    <p className="mt-2 text-xs text-pretty text-sage">
      Imagery from Esri and Maxar. Elevation from open AWS terrain tiles (SRTM, GMTED, ETOPO1). Outlines are a
      simplified open dataset and skip some current union-territory edges. Google’s 3D tiles need a billed Maps key,
      so this view uses that open mesh instead.
    </p>
  );
}
