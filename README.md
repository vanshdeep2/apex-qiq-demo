# Apex Utilities QiQ demo

A React + Vite demo app for QiQ (Quantanite iQ) client intelligence, built around a synthetic Apex Utilities contact-centre dataset.

- The app sits at the root of this folder. Run `npm install`, then `npm run dev`. `dist/` is a production build ready for any static host, with `vercel.json` included.
- `docs/` holds the research, story spec, methodology table, transcript content, and the QA and audit reports for this build.
- `Apex Utilities - Client Research & Demo Storylines.docx` is the internal research and storylines doc for the sales team.

Scope: Apex Utilities' customer contact centre, for its Alberta natural gas distribution business (rate-class and billing questions, fee disputes, budget billing, moves and account changes, meter reads, construction notices, and gas-safety and emergency calls). Contact-centre numbers are modelled/synthetic. Dollar figures are Canadian (CA$).

## Real vs synthetic

- The research doc opens with **How This Demo Was Built**, a table of what's real (Apex Utilities Inc.'s Google reviews, rating and public company, regulatory and construction facts) and what's modelled (the contact centre), with the scale of each.
- The app has a **Voice of the Customer** page (`/voc`) that shows only real, public data. Every page carries a Public / Modelled / Public + modelled badge, and a **How this demo was built** button in the nav opens the same table as the doc.
- Review links: 6 of the 7 quoted Google reviews link to the review itself. One (Mike Kruger's vacant-property review) couldn't be linked individually, so it links to Apex Utilities Inc.'s Google Maps listing, and the page says so. Google shows review dates only as relative ages ("about 2 years ago"), so quotes carry an age rather than a date.

## Google SSO

On Vercel, every page, bundle and data file is behind Google sign-in through the shared QiQ login hub (`../QIQ Demo Login`, https://qiq-demo-login.vercel.app).

- `middleware.js` checks this demo's session cookie. Without one, pages redirect to the hub and other requests get a 401.
- The hub handles Google and the `demo_users` allowlist, then sends the visitor to `api/auth/callback.js` with a 60-second token. The callback sets a 24h session cookie here.
- `api/auth/me.js` and `api/auth/logout.js` back the **Sign out** button in the nav. Signing out also ends the hub session.
- The only env var is `SSO_JWT_SECRET`, which must match the hub's (see `.env.example`). No Google Console change is needed for this demo.
- `npm run dev` skips SSO, because Vite doesn't run Vercel middleware.
