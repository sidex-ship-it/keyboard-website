# formkey — Character collection

Responsive, buildless keyboard collection website inspired by supplied product references. Includes four case finishes, six keycap colors, shareable configuration URLs, and downloadable SVG build cards. Keyboard visuals are original illustrations, not product photography. Product availability and pricing are intentionally unconfirmed.

## Run

From this directory: `python3 -m http.server 8000 --directory dist`, then open http://localhost:8000.

No installation or build required. Deploy the `dist` directory to any static host. Google Fonts are optional external typography; system fonts provide fallbacks.

## Files

- `dist/index.html`: accessible page structure and product narrative
- `dist/style.css`: responsive styles
- `dist/app.js`: keyboard SVG renderer and configurator
- `.openai/hosting.json`: private Sites deployment identity

Checkout, prices and unverified technical specifications are not included.

## Pages and Vercel

The collection includes six dedicated palette pages, a standalone configurator, About, FAQ, Privacy, Saved builds, and a custom 404 page. Saved builds use local storage; no backend or tracking is installed.

Import this GitHub repository into Vercel, select **Other**, keep the project root at the repository root, set the output directory to **dist**, and use **main** as the production branch. No build or install command is needed. The included `vercel.json` declares the static output and security headers. Subsequent pushes to main trigger deployments when the Vercel GitHub integration is connected.

See [ROADMAP.md](ROADMAP.md) for the comprehensive product, commerce, quality, launch, and ongoing improvement plan.

## Expanded configurator

Keyboard previews use sculpted SVG keycaps, layered case shading, textured dials and studio shadows. Choose a legend style, satin or brushed texture, and linear/tactile/clicky sound character. Audio is synthesized in the browser and is labeled as a simulation. The generated logo is included at `dist/logo.png`.

The homepage and dedicated configurator support full-state share links and browser-local saved builds. Saved builds retain legend, texture and sound choices when reopened. Physical dimensions, manufacturing compatibility and pricing remain unconfirmed.


Reference-matched photo-style palette previews are generated imagery (`dist/character-z84-palettes.png`), not photographs of manufactured inventory. All keys share one base color; independent accent keys have been removed. Alternative legend modes use the editable SVG renderer. Downloaded build cards embed the palette image so they work offline.

Keyboard palette previews use a transparent PNG with the surrounding backdrop removed.


The homepage and configurator include a locally bundled Three.js 3D studio with modeled keycaps, a recessed deck, case depth and dial, drag/keyboard rotation and angle/top/detail views. Case and keycap choices update the model. Rendering is demand-driven, pixel ratio is capped for mobile, and product imagery remains as the fallback if WebGL is unavailable. Existing pricing copy is preserved.

Straight product pictures are the default again. Only the configurator can instantiate a 3D viewer, on demand via the 3D view button. It has a single angled preset, reset and drag rotation. Both views default to English + Russian legends.

The optional 3D preview renders at 2048 pixels on its longest edge, independently of screen density, with a 2048px shadow map. Tapered keycap shells, higher resolution bilingual legends, physical case materials and a procedural studio environment improve close-up quality.

## Matterhorn Edition

The homepage and configurator now offer a model menu: Character / 01 keeps its original finish and keycap choices; Matterhorn Edition is a reference-based concept in exactly Forest green, Burgundy, or Black, with cream English + Russian keycaps, mountain artwork and a circular 85% display. The display is a visual reference, not live battery data. The existing optional 3D view models both keyboards with drag and keyboard rotation. Matterhorn geometry and vector artwork are editable in `dist/mountain.js`; `dist/keyboard-3d.js` builds the meshes and painted keycap textures. Physical measurements are approximate, not manufacturing CAD.

Saved builds and share URLs retain the model and Matterhorn color. Previous build links without a model continue to open Character / 01. There are no extra dependencies or build steps.


## Matterhorn discovery and 4K previews

A model selector sits directly below the header on the homepage and configurator, including on mobile. Matterhorn Edition is visible before scrolling; choosing it updates the homepage picture, headline, configurator, shared link and saved build. Existing `m=mountain` build data remains compatible.

Matterhorn product pictures are native 4096 × 1720 WebP studio renders in `dist/pictures/`, with three coordinated colors. They are renders of the reference-based design, not camera photographs. The original Character product imagery is preserved. Interactive 3D uses a 4096-pixel longest drawing-buffer edge and 4096 × 4096 shadow maps. Rendering remains on demand. GPU limits may prevent WebGL on some devices; the static picture remains available.

Reference refinements include bilingual cream keycaps, a cream left Shift and dark right Shift/Enter, dedicated navigation and arrows, a muted microphone icon, snow-cut Matterhorn artwork, and a green-ringed 85% display. Geometry and surface details approximate the supplied photos; they are not manufacturing measurements.

## Mountain frame and separate model collections

Matterhorn's enclosure now has actual low-poly ridge and triangular facet geometry on the front bezel, front wall, rear and side frame bands. The three 4K colorway pictures are regenerated from that geometry. The optional 3D viewer includes a Mountain frame close-up. English and Russian keycap legends use heavier 900-weight strokes based on the supplied reference picture.

Selecting Matterhorn shows only its three coordinated colorways, frame details, specifications and saved builds in the configurator. Character palette cards and finish/texture choices are hidden until Character is selected again. Collection and configurator navigation carry the chosen Matterhorn state.

## Reference photographs for the regular view

Matterhorn's regular photo view, homepage, color cards, saved previews and build cards now display front-facing crops of the user's supplied green, burgundy and black reference image. The original JPEG is preserved unchanged at `dist/pictures/matterhorn-reference.jpg`; SVG viewports select each color without redrawing the lettering, artwork or frame. The uploaded source is 853 × 1280, so still-image detail is limited to that source. The interactive 3D model remains a separate 4K view; the prior 4K model renders are retained as assets.

## Carved case reference and Wine red

The latest supplied three-view case photo is the standard Black Matterhorn picture, preserved at `dist/pictures/matterhorn-case-reference.jpg`. The configurator displays the complete supplied photo; hero and palette cards show its main view. Black is the default Matterhorn color for a new visit. Existing links keep their explicit variant. Green uses the earlier supplied color photo; Wine red selectively deepens red surfaces in that earlier photo while preserving cream keycaps.

Wine red replaces the former Burgundy label throughout the model collection and uses `#421722` in 3D. The enclosure now has broader chiseled front, rear and side facets, flat top rim lines and rounded beveled corners. The rear includes a centered USB-C visual detail and a Rear case inspection view. Photo source detail is limited to the uploaded originals; interactive 3D remains 4K.

## One carved-case reference across every color

All Matterhorn photo views now use the latest black three-view reference at `dist/pictures/matterhorn-case-reference.jpg`. Forest green and Wine red tint dark neutral surfaces of that same source with SVG color filters. Cream keycaps, green display and backdrop are preserved. Every color has the same carved frame, camera angle and three-view arrangement. The earlier reference image is retained but is no longer used by the Matterhorn photo renderer.

The 3D enclosure has deeper physical mountain facets on front, rear and sides, rounded corner relief, stronger ridge/valley contrast and a dedicated raking light for the frame. Its initial Matterhorn angle shows the front and side relief more clearly. The centered rear port remains unobstructed, and all three finishes share the same sculpted geometry.

## Clean product-only photographs

Every Matterhorn still view now displays only the complete main keyboard from the shared reference. The lower detail-photo panels are excluded by an SVG display mask; a neutral studio backdrop continues below the main view. The mask preserves the case's lower-right corner, which extends below the inset divider in the original collage. Cards, hero, configurator, saved previews and offline build cards use the same product-only composition in every color. The source JPEG remains unchanged.


## Character Z-84 replacement

Character now uses the knobless Z-84 reference design. A shared layout in `dist/character-model.js` defines exactly 84 keys for the SVG and 3D renderers, including PrtSc/Pause/Del, Home/End/PgUp/PgDn and inverted-T arrows. The old dial model and palette asset are replaced. Existing Matterhorn functionality, pricing copy and saved color choices are preserved.


The live 3D viewer uses a 2K canvas on phones and a 4K canvas on desktop, bounded by device GPU limits. Shadow maps are sized separately. Case/switch changes reuse existing legend textures. A lost graphics context returns to the photo with a working 3D retry; disposed viewers release their shadow maps and WebGL contexts.


Mobile startup no longer waits for animation-frame callbacks. The 3D button queues a cancellable task and draws the first frame directly, with loading state reset on both success and failure. Mobile uses studio lights and a 2K canvas without runtime reflection-map baking or multisampling. Product photo remains available during startup.


## Phone performance

`dist/keyboard-preview.js` loads the WebGL renderer and its Three.js dependencies only after a 3D request. Mobile uses one 2048×1024 legend atlas and omits concealed switch/support meshes; rendering stops while idle. Returning to the photo or hiding the page disposes the viewer and releases its graphics context. Case changes reuse lettering. Failed WebGL startup, lost contexts and failed renderer downloads automatically use an interactive CSS 3D keyboard with individual raised EN/RU keys, finish/color controls and drag/keyboard rotation.

Delivery assets use `character-z84-palettes.webp` (258,810 bytes versus the 2,042,267-byte PNG) and `logo.webp` (656 bytes versus 964,472 bytes). Originals are retained for source editing. Product colors, model choices and existing pricing are unchanged.


Blue/colored photo cases now use closed, padded chassis contours. Open contour fragments previously closed diagonally across the keyboard and recolored the keycaps; the corrected ring masks isolate the enclosure for all six palettes.


The 3D preview imports its shared Character layout directly, including when opened from the homepage. Every HTML entry point that uses the classic renderer also loads that layout. Failed fallback construction cleans up its DOM, and retries remove incomplete stages/toolbars so empty or duplicate panels cannot accumulate.

## Mouse collection

`dist/mouse.html` adds a dedicated mouse item with five colors: White, Black, Navy, Sage green and Wine red. Original, unmodified supplied four-view JPEGs are in `dist/pictures/mouse-*.jpg`. Color selection updates the product image, accessible selection state and shareable `?color=` URL, including browser back/forward navigation. Homepage, collection and site navigation link to the mouse. Styles and behavior are isolated in `mouse.css` and `mouse.js`; keyboard configurators remain independent. No price, availability or technical specifications are assumed. No build step is required.

## Mouse 3D studio and product menu

Every page has a prominent Keyboard / Mouse menu. The mouse page offers a larger viewer with optional interactive 3D, five finishes, drag/keyboard rotation, zoom, reset/top/side/underside views and downloadable GLB models. `mouse-model.js` builds the reference-based geometry; `mouse-viewer-engine.js` renders on demand with local Three.js. Product photos remain the default and fallback. The geometry approximates the supplied views; it is not manufacturing CAD. Models use metre units.

## Matterhorn mouse and studio redesign

The collection now contains Character and Matterhorn keyboards, Character Mouse and Matterhorn Mouse. `matterhorn-mouse.html` uses the unmodified supplied Forest/Burgundy/Black reference with SVG viewports, three color selections, share links and a direct matching-keyboard link. `atelier.css` gives the site a cream/navy editorial design, with a new product-led homepage and clear four-item navigation. Existing keyboard builders, saved builds, mouse 3D and downloadable GLB models remain available. Reference images and 3D are visual studies, not verified manufacturing specifications.
