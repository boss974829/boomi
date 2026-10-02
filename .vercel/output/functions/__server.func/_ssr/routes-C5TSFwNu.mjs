import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Compass, n as Plus, r as Minus } from "../_libs/lucide-react.mjs";
import { n as create, t as useShallow } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5TSFwNu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var PLACES = [
	{
		id: "land",
		name: "The subcontinent",
		region: "India",
		lng: 79.05,
		lat: 22.55,
		zoom: 4.32,
		pitch: 50,
		bearing: -14,
		kind: "Overview",
		surveyed: "Sea floor to 8,586 m",
		text: "A peninsula pinned under the Himalaya. The north is a wall of rock, the interior a tilted plateau, the coasts a thin plain."
	},
	{
		id: "kangchenjunga",
		name: "Kangchenjunga",
		region: "Sikkim",
		lng: 88.147,
		lat: 27.62,
		zoom: 9.4,
		pitch: 62,
		bearing: -18,
		kind: "Summit",
		surveyed: "8,586 m",
		text: "Highest summit of India, on the Sikkim–Nepal border. Five ridges fall off the massif into ice, then forest."
	},
	{
		id: "nanda",
		name: "Nanda Devi",
		region: "Uttarakhand",
		lng: 79.97,
		lat: 30.28,
		zoom: 9.6,
		pitch: 62,
		bearing: 12,
		kind: "Summit",
		surveyed: "7,816 m",
		text: "The highest peak standing entirely inside India. A ring of walls closes the Garhwal sanctuary around it."
	},
	{
		id: "ladakh",
		name: "Ladakh",
		region: "High desert",
		lng: 77.9,
		lat: 34.05,
		zoom: 7.7,
		pitch: 58,
		bearing: -24,
		kind: "Plateau",
		surveyed: "Valley floors near 3,000 m",
		text: "Cold desert between the Ladakh and Zanskar ranges. The Indus cuts a trench through ground that stays above the tree line."
	},
	{
		id: "kashmir",
		name: "Kashmir Valley",
		region: "Pir Panjal",
		lng: 74.78,
		lat: 33.95,
		zoom: 8.8,
		pitch: 58,
		bearing: 8,
		kind: "Basin",
		surveyed: "Floor near 1,600 m",
		text: "An almond-shaped basin. The Pir Panjal holds the monsoon; the Great Himalaya rises on the far side."
	},
	{
		id: "ganga",
		name: "Ganga plain",
		region: "Indo-Gangetic",
		lng: 82.2,
		lat: 26.15,
		zoom: 6.15,
		pitch: 46,
		bearing: -8,
		kind: "Alluvium",
		surveyed: "Mostly under 200 m",
		text: "Silt from the Ganga and its tributaries, almost no relief. The land only steepens where the Siwalik hills begin."
	},
	{
		id: "thar",
		name: "Thar desert",
		region: "Rajasthan",
		lng: 71.15,
		lat: 26.85,
		zoom: 6.9,
		pitch: 54,
		bearing: 16,
		kind: "Desert",
		surveyed: "Dunes, tens to hundreds of metres",
		text: "Dunes and salt playas on a hard floor. The Aravalli keeps most of the monsoon on the range’s eastern side."
	},
	{
		id: "rann",
		name: "Rann of Kutch",
		region: "Gujarat",
		lng: 70.15,
		lat: 23.85,
		zoom: 7.5,
		pitch: 54,
		bearing: -12,
		kind: "Salt flat",
		surveyed: "A few metres above the sea",
		text: "A seasonal salt marsh. It floods in the monsoon and bakes white after. The relief is almost entirely the tide."
	},
	{
		id: "aravalli",
		name: "Aravalli",
		region: "Rajasthan",
		lng: 73.85,
		lat: 25.15,
		zoom: 7.3,
		pitch: 56,
		bearing: 18,
		kind: "Ancient range",
		surveyed: "Guru Shikhar 1,722 m",
		text: "A worn fold belt, among the oldest mountains on Earth. What remains is a ridge, not a wall."
	},
	{
		id: "deccan",
		name: "Deccan Traps",
		region: "Peninsular plateau",
		lng: 76.4,
		lat: 18.4,
		zoom: 6.35,
		pitch: 50,
		bearing: -18,
		kind: "Volcanic plateau",
		surveyed: "Mostly 400–800 m",
		text: "Stacked flood basalt, then tilted. The west stands higher; rivers drain east across the traps toward the Bay of Bengal."
	},
	{
		id: "ghats",
		name: "Western Ghats",
		region: "Arabian escarpment",
		lng: 75.15,
		lat: 13.55,
		zoom: 7.55,
		pitch: 60,
		bearing: -28,
		kind: "Escarpment",
		surveyed: "Crest often above 1,000 m",
		text: "A scarp facing the Arabian Sea. The monsoon dumps on the windward face. The plateau behind it is drier."
	},
	{
		id: "anamudi",
		name: "Anamudi",
		region: "Anaimalai hills",
		lng: 77.06,
		lat: 10.12,
		zoom: 10.1,
		pitch: 62,
		bearing: 20,
		kind: "Summit",
		surveyed: "2,695 m",
		text: "Highest ground in peninsular India. The Anaimalai, Cardamom and Palni hills meet around this peak."
	},
	{
		id: "sundarbans",
		name: "Sundarbans",
		region: "Ganga–Brahmaputra delta",
		lng: 88.9,
		lat: 21.95,
		zoom: 8.5,
		pitch: 50,
		bearing: -20,
		kind: "Delta",
		surveyed: "Barely above the tide",
		text: "Mangrove on new silt. Height barely changes. The pattern is the creeks, not the elevation."
	},
	{
		id: "brahmaputra",
		name: "Brahmaputra valley",
		region: "Assam",
		lng: 92.9,
		lat: 26.55,
		zoom: 6.85,
		pitch: 54,
		bearing: 22,
		kind: "Braided river",
		surveyed: "Valley near 50–100 m",
		text: "The river leaves the mountains and braids across Assam. The Meghalaya plateau rises abruptly to the south."
	},
	{
		id: "andaman",
		name: "Andaman ridge",
		region: "Bay of Bengal",
		lng: 92.85,
		lat: 12.15,
		zoom: 7.15,
		pitch: 55,
		bearing: -16,
		kind: "Island arc",
		surveyed: "Peaks above 700 m",
		text: "The tops of a submerged chain, where the Indian plate meets the Burma plate. The sea around them is deep."
	}
];
var PEAKS = [
	{
		name: "Kangchenjunga",
		lng: 88.1475,
		lat: 27.7025,
		rank: 1
	},
	{
		name: "Nanda Devi",
		lng: 79.9708,
		lat: 30.3768,
		rank: 1
	},
	{
		name: "Anamudi",
		lng: 77.0614,
		lat: 10.1698,
		rank: 1
	},
	{
		name: "Kamet",
		lng: 79.7747,
		lat: 30.9198,
		rank: 2
	},
	{
		name: "Doddabetta",
		lng: 76.733,
		lat: 11.4,
		rank: 2
	},
	{
		name: "Guru Shikhar",
		lng: 72.706,
		lat: 24.632,
		rank: 2
	},
	{
		name: "Kalsubai",
		lng: 73.795,
		lat: 19.601,
		rank: 2
	}
];
function findPlace(id) {
	return PLACES.find((place) => place.id === id) ?? PLACES[0];
}
var useAtlas = create((set) => ({
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
	setQuery: (query) => set({ query })
}));
var commands = null;
function bindMap(next) {
	commands = next;
}
function mapCommands() {
	return commands;
}
function formatMeters(value) {
	if (value == null || !Number.isFinite(value)) return "—";
	const rounded = Math.round(value);
	const abs = Math.abs(rounded).toLocaleString("en-IN");
	return rounded < 0 ? `−${abs} m` : `${abs} m`;
}
function formatCoord(lat, lng) {
	const ns = lat >= 0 ? "N" : "S";
	const ew = lng >= 0 ? "E" : "W";
	return `${Math.abs(lat).toFixed(2)}° ${ns}  ${Math.abs(lng).toFixed(2)}° ${ew}`;
}
var MODES = [
	{
		id: "satellite",
		label: "Satellite"
	},
	{
		id: "relief",
		label: "Relief"
	},
	{
		id: "physical",
		label: "Physical"
	}
];
function Observatory() {
	const [MapView, setMapView] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./terrain-map-CSkbNb5h.mjs").then((mod) => {
			if (live) setMapView(() => mod.TerrainMap);
		});
		return () => {
			live = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh w-full overflow-hidden bg-ink text-mist",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dock, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-0 min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-0 flex-1",
					children: [
						MapView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapView, {}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Veil, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileStrip, {})
			]
		})]
	});
}
function Dock() {
	const place = findPlace(useAtlas((s) => s.activeId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden h-dvh w-80 shrink-0 flex-col border-r border-line bg-panel md:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-5 pt-5 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-sage uppercase",
						children: "Field atlas · India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl leading-none text-mist",
						children: "Bhoomi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-pretty text-sage",
						children: "Live satellite draped on a real elevation mesh. Drag to orbit, scroll to descend, right-drag to tilt."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mx-5 border-t border-line py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-saffron uppercase",
						children: place.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl text-balance text-mist",
						children: place.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-sage",
						children: place.region
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-pretty text-mist",
						children: place.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-sage",
						children: ["Surveyed ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-mist tabular-nums",
							children: place.surveyed
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modes, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceList, { className: "min-h-0 flex-1 overflow-y-auto px-3 pb-3" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReliefSlider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flags, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Credit, {})
				]
			})
		]
	});
}
function MobileBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex shrink-0 items-center justify-between gap-3 border-b border-line bg-panel px-3 py-2 md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-sage uppercase",
				children: "Field atlas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl leading-none text-mist",
				children: "Bhoomi"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modes, { compact: true })]
	});
}
function MobileStrip() {
	const place = findPlace(useAtlas((s) => s.activeId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full min-w-0 shrink-0 border-t border-line bg-panel md:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "px-3 pt-2 text-xs text-sage",
				children: [
					"Mesh ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshReadout, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-mist",
						children: [" · ", place.surveyed]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "line-clamp-2 px-3 text-sm text-pretty text-mist",
				children: place.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceList, {
				className: "flex w-full min-w-0 gap-2 overflow-x-auto px-3 py-2",
				horizontal: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReliefSlider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flags, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-pretty text-sage",
						children: "Esri, Maxar imagery on open SRTM elevation. Not a Google Maps embed."
					})
				]
			})
		]
	});
}
function Veil() {
	const ready = useAtlas((s) => s.ready);
	const mapError = useAtlas((s) => s.mapError);
	if (ready && !mapError) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-10 grid place-items-center bg-ink px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-sage uppercase",
				children: "Elevation mesh"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl text-mist",
				children: mapError ? "Terrain unavailable" : "Draping the land"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-sage",
				children: mapError ?? "Fetching satellite imagery and the open elevation tiles for India."
			})
		] })
	});
}
function Controls() {
	const bearing = useAtlas((s) => s.bearing);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-3 right-3 z-20 flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center bg-panel text-mist",
				"aria-label": "Zoom in",
				onClick: () => mapCommands()?.zoomBy(.7),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					size: 18,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center bg-panel text-mist",
				"aria-label": "Zoom out",
				onClick: () => mapCommands()?.zoomBy(-.7),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
					size: 18,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center bg-panel text-mist",
				"aria-label": "Reset north",
				onClick: () => mapCommands()?.northUp(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
					size: 18,
					strokeWidth: 1.5,
					style: { transform: `rotate(${-bearing}deg)` }
				})
			})
		]
	});
}
function Readout() {
	const view = useAtlas(useShallow((s) => ({
		lng: s.lng,
		lat: s.lat,
		pitch: s.pitch,
		centerElevation: s.centerElevation,
		cursorElevation: s.cursorElevation,
		cursorLng: s.cursorLng,
		cursorLat: s.cursorLat
	})));
	const aimed = view.cursorLng != null && view.cursorLat != null;
	const lat = aimed ? view.cursorLat : view.lat;
	const lng = aimed ? view.cursorLng : view.lng;
	const elevation = aimed ? view.cursorElevation : view.centerElevation;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute bottom-3 left-24 z-20 hidden max-w-xs bg-ink/95 px-3 py-2 md:block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-sage uppercase",
				children: aimed ? "Under the cursor" : "Under the view"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl text-mist tabular-nums",
				children: formatMeters(elevation)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-sage tabular-nums",
				children: [
					formatCoord(lat, lng),
					" · tilt ",
					Math.round(view.pitch),
					"°"
				]
			})
		]
	});
}
function MeshReadout() {
	const centerElevation = useAtlas((s) => s.centerElevation);
	const cursorElevation = useAtlas((s) => s.cursorElevation);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-mist tabular-nums",
		children: formatMeters(cursorElevation ?? centerElevation)
	});
}
function Search() {
	const query = useAtlas((s) => s.query);
	const setQuery = useAtlas((s) => s.setQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Search landforms"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value: query,
			onChange: (event) => setQuery(event.target.value),
			placeholder: "Search landforms",
			className: "w-full border-b border-line bg-transparent py-2 text-sm text-mist outline-none placeholder:text-sage"
		})]
	});
}
function Modes({ compact = false }) {
	const basemap = useAtlas((s) => s.basemap);
	const setBasemap = useAtlas((s) => s.setBasemap);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex ${compact ? "" : "mt-3"}`,
		role: "group",
		"aria-label": "Basemap",
		children: MODES.map((mode) => {
			const on = basemap === mode.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": on,
				onClick: () => setBasemap(mode.id),
				className: `min-h-11 px-2 text-sm ${on ? "border-b-2 border-saffron text-mist" : "border-b-2 border-transparent text-sage"}`,
				children: mode.label
			}, mode.id);
		})
	});
}
function PlaceList({ className, horizontal = false }) {
	const activeId = useAtlas((s) => s.activeId);
	const query = useAtlas((s) => s.query);
	const setActiveId = useAtlas((s) => s.setActiveId);
	const needle = query.trim().toLowerCase();
	const places = needle ? PLACES.filter((place) => `${place.name} ${place.region} ${place.kind}`.toLowerCase().includes(needle)) : PLACES;
	if (places.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-2 py-4 text-sm text-sage",
		children: "No landform matches that."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className,
		children: places.map((place) => {
			const on = place.id === activeId;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: horizontal ? "shrink-0" : "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-current": on ? "true" : void 0,
					onClick: () => setActiveId(place.id),
					className: `min-h-11 border-l-2 px-3 py-2 text-left ${horizontal ? "whitespace-nowrap border-l-0" : "w-full"} ${on ? "border-saffron bg-ink text-mist" : "border-transparent text-sage"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-mist",
						children: place.name
					}), horizontal ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-sage",
						children: place.region
					})]
				})
			}, place.id);
		})
	});
}
function ReliefSlider() {
	const exaggeration = useAtlas((s) => s.exaggeration);
	const setExaggeration = useAtlas((s) => s.setExaggeration);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-baseline justify-between text-xs tracking-widest text-sage uppercase",
			children: ["Vertical scale", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-mist tabular-nums",
				children: [exaggeration.toFixed(1), "×"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "relief-slider mt-1 w-full",
			type: "range",
			min: 1,
			max: 4,
			step: .1,
			value: exaggeration,
			"aria-valuetext": `${exaggeration.toFixed(1)} times true scale`,
			onChange: (event) => setExaggeration(Number(event.target.value))
		})]
	});
}
function Flags() {
	const labels = useAtlas((s) => s.labels);
	const borders = useAtlas((s) => s.borders);
	const globe = useAtlas((s) => s.globe);
	const toggleLabels = useAtlas((s) => s.toggleLabels);
	const toggleBorders = useAtlas((s) => s.toggleBorders);
	const toggleGlobe = useAtlas((s) => s.toggleGlobe);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 flex flex-wrap",
		role: "group",
		"aria-label": "Map layers",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
				on: labels,
				label: "Labels",
				onClick: toggleLabels
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
				on: borders,
				label: "Borders",
				onClick: toggleBorders
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
				on: globe,
				label: "Globe",
				onClick: toggleGlobe
			})
		]
	});
}
function Flag({ on, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: `min-h-11 px-3 text-sm ${on ? "text-mist" : "text-sage"}`,
		children: label
	});
}
function Credit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-xs text-pretty text-sage",
		children: "Imagery from Esri and Maxar. Elevation from open AWS terrain tiles (SRTM, GMTED, ETOPO1). Outlines are a simplified open dataset and skip some current union-territory edges. Google’s 3D tiles need a billed Maps key, so this view uses that open mesh instead."
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent });
var SplitComponent = Observatory;
//#endregion
export { findPlace as a, PEAKS as i, bindMap as n, useAtlas as r, routes_exports as t };
