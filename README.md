# FORM — Character collection

Responsive, buildless keyboard collection website inspired by supplied product references. Includes four case finishes, six keycap colors, shareable configuration URLs, and downloadable SVG build cards. Keyboard visuals are original illustrations, not product photography. Product availability and pricing are intentionally unconfirmed.

## Run

From this directory: `python3 -m http.server 8000 --directory dist`, then open http://localhost:8000.

No installation or build required. Deploy the `dist` directory to any static host. Google Fonts are optional external typography; system fonts provide fallbacks.

## Files

- `dist/index.html`: accessible page structure and product narrative
- `dist/style.css`: responsive styles
- `dist/app.js`: keyboard SVG renderer and configurator
- `.openai/hosting.json`: private Sites deployment identity

FORM is a working concept name. Replace it with the final brand before commercial use. Checkout, prices and unverified technical specifications are not included.

## Pages and Vercel

The collection includes six dedicated palette pages, a standalone configurator, About, FAQ, Privacy, Saved builds, and a custom 404 page. Saved builds use local storage; no backend or tracking is installed.

Import this GitHub repository into Vercel, select **Other**, keep the project root at the repository root, set the output directory to **dist**, and use **main** as the production branch. No build or install command is needed. The included `vercel.json` declares the static output and security headers. Subsequent pushes to main trigger deployments when the Vercel GitHub integration is connected.

See [ROADMAP.md](ROADMAP.md) for the comprehensive product, commerce, quality, launch, and ongoing improvement plan.

## Expanded configurator

Keyboard previews use sculpted SVG keycaps, layered case shading, textured dials and studio shadows. Choose an independent accent color, legend style, satin or brushed texture, and linear/tactile/clicky sound character. Audio is synthesized in the browser and is labeled as a simulation. The generated logo is included at `dist/logo.png`.

The homepage and dedicated configurator support full-state share links and browser-local saved builds. Saved builds retain accent, legend, texture and sound choices when reopened. Physical dimensions, manufacturing compatibility and pricing remain unconfirmed.
