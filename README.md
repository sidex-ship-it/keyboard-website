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


Reference-matched photo-style palette previews are generated imagery (`dist/keyboard-palettes.png`), not photographs of manufactured inventory. All keys share one base color; independent accent keys have been removed. Alternative legend modes use the editable SVG renderer. Downloaded build cards embed the palette image so they work offline.

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
