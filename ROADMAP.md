# FORM: implementation and improvement plan

## Delivered

- Responsive home, collection, configurator, six palette detail pages, about, FAQ, privacy, saved builds, and 404 page.
- Four case finishes and six keycap colors; accurate selection links and downloadable illustrated SVG cards.
- Browser-local saved builds with removal, share links, collection filters, mobile navigation, keyboard focus styles, skip links, and reduced-motion support.
- Static Vercel configuration, favicon, repository documentation, and security response headers.
- No invented product claims, prices, customer quotes, payment integration, or fulfillment promises.

## Phase 1 — verify the product and brand

Owner inputs: final brand/name and logo rights; original product photos; SKU matrix; accurate case materials; switch and keycap specifications; layout dimensions; connectivity; firmware; OS compatibility; stock; currency; tax requirements; sales markets.

Acceptance: each published product claim maps to a verified specification; photographs have usage rights and meaningful alt text; all saleable variants have unique SKUs. Remove the concept label only after this review.

## Phase 2 — commerce and customer operations

Select a commerce provider, preferably hosted checkout such as Shopify or Stripe Checkout. Keep payment secrets server-side. Define inventory ownership, shipping zones and rates, delivery estimates, returns, warranty, support contact, privacy controller, and terms. Then add product pricing, cart, checkout, order confirmation, transactional email, and order support.

Acceptance: end-to-end sandbox purchase, tax and shipping calculations, stock conflict, failed payment, cancellation and refund checks. Verify webhook signatures and idempotency; never mark an order paid based only on a browser redirect. Publish legally reviewed policies before accepting payment.

## Phase 3 — content and discoverability

Replace SVG concept previews with optimized real product imagery where appropriate; keep the configurator consistent with actual SKUs. Add final canonical domain, Open Graph cards, sitemap, robots.txt, and verified product structured data. Add Russian translations after content and brand approval; validate language switching and translation quality.

Acceptance: no unsupported Product/Offer data; previews readable in social sharing; keyboard and screen reader review; optimized image sizes and stable layout; broken-link scan across the final production domain.

## Phase 4 — Vercel operations

Import `sidex-ship-it/keyboard-website` into Vercel using the connected GitHub account. Set Framework Preset to Other, project root to repository root, Output Directory to `dist`, and leave build/install commands empty. Use `main` as the production branch. `vercel.json` provides the output directory and security headers. Configure the custom domain and DNS only when the owner provides the domain.

Acceptance: a successful production deployment tied to the latest main commit, valid HTTPS, successful direct page loads, correct 404 response, downloadable cards and preserved URL state. Ensure GitHub integration has access to this repository. No token should be committed.

## Ongoing improvement loop

1. Observe: collect reproducible bugs, user feedback, accessibility findings and (only after privacy review) aggregate usage data.
2. Prioritize: user impact, evidence, effort, and risk; prefer fixing broken user journeys over adding features.
3. Change: implement one bounded improvement with a measurable acceptance condition.
4. Verify: syntax, internal links, desktop/mobile navigation, configurator state, build downloads, saved builds, empty/error states.
5. Release: inspect the diff, push to main under the owner's authorization, verify deployment status and smoke-test production.
6. Compare: check the acceptance condition against the baseline. Revert regressions, record outcomes, then choose the next change.

This is a documented development process, not an autonomous service. No scheduled agent, telemetry collection, automatic spending, or unattended code mutation is enabled.

## Release gates and rollback

Require passing functional checks and no console exceptions. Verify unknown commercial details remain clearly marked. Record deployed SHA and URL. Roll back by reverting the relevant commit on main or promoting the previous verified Vercel deployment; never rewrite shared history. Re-run the affected user journey after rollback.
