# Audit report: Apex Utilities (stage 6, qiq-demo-audit)

Run 2026-09-15, right after qiq-demo-qa. Everything below ran on Vansh's PC through the Linux VM bridge, against the real `app/` folder.

**Status: issues found and fixed. No crash-class or blocking issues left.** There is one open item for Vansh (verbatim review quotes, see the end).

## 1. Install check

- `node_modules/.bin/vite` is there and executable.
- These entry points were checked on disk and all resolve to real files: `react-router-dom` → `dist/index.mjs`, `react-router/dom` → `dist/development/dom-export.mjs`, `recharts` → `lib/index.js`, `@reduxjs/toolkit` → `dist/redux-toolkit.modern.mjs`, `vite` → `dist/node/index.js`.
- The `@rolldown/binding-linux-x64-gnu` native binding that stage 5 installed is present and resolves (`rolldown-binding.linux-x64-gnu.node`).
- No reinstall was needed, and no bundler workarounds or dependency overrides were added.

## 2. What was run

| Step | Result |
|---|---|
| `npm run build`, before any fixes | Passed. 662 modules, 46.5s. The only warning is the existing chunk-size notice. |
| `npm run build`, after all fixes | Passed. 663 modules (includes the new `utils/ltvLabels.js`), about 30s. |
| `npm run lint`, after fixes | Passed with 0 problems. |
| `run_qa.py --client clients/apex-utilities`, re-run after fixes | The only FAIL items are the 8 contact-ID literals in `CF_QUICK_LINKS` and `FLAGGED_CALLS` that stage 5 already accepted. Shard richness passes. The numeric-literal warning count went up because of the added `wordCount` and duration fields, which are derived values. |
| Runtime smoke test | Details below. |

**About the runtime smoke test.** The VM has no headless Chrome and couldn't open a dev-server port to a browser. Instead, the real app was rendered in jsdom, outside the mounted folder under `~/audit`. Vite's own module pipeline loaded `src/App.jsx` with the project's `vite.config.js`, and React 19 `createRoot` rendered each route. `fetch` was stubbed to serve `app/public/data` from disk, so the contact index and shards loaded for real.

Routes rendered:
- `/`, `/quality`, `/operations`, `/agent`, `/search`
- All 10 `/agent/<slug>` pages
- 8 `/search?call=<id>` deep links

On every route, the harness clicked through the clickable elements (cards, tiles, rows, tabs, buttons, selects), about 300 clicks in total. After each click it collected React and console errors, text showing `NaN`, `undefined` or `null`, and any `$` amount not written as `CA$`.

**Final result:** no errors, no `NaN` or `undefined` text, and no bare `$` on any route.

## 3. Cross-referencing data shapes

- **(a) Drift between content files and the app copy.** All 9 `clients/apex-utilities/content/*.js` files were byte-identical to `app/src/data/*.js` at the start. After the fixes below, every edited file was re-copied, and a second byte comparison found zero drift.
- **Direct property accesses.** A script imported every data module and checked each non-optional dotted access chain in `app/src` against the real objects. The only miss was `KPI_TILE_META.csat.changeText`. That one is harmless: `KPITile` falls back to the variance text.
- **Comparison with working client packs.** The Apex data shapes were also compared key by key with the Bed Bath & Beyond and Brooklinen content packs, which are known to work. Only keys the app actually reads were counted. This caught Bug 1 below. After the fix, the only remaining difference is `DRIVER_ROWS[].subDrivers`, and the app reads that with optional chaining.
- **(b) LTV / financial panel.** `computeLtvFinancials()` merges `LTV_DEFAULTS`, which is `LTV_ASSUMPTION_DEFAULTS` from `ltvCopy.js`, with the live assumptions. It reads `demandSideLtv`, `cohortHitWeekly`, `churnUpliftPct`, `coachingCohortWeekly` and `coachingProtectionPct` correctly. Nothing hardcoded overrides the result:
  - The donut centres, legends, net card and drawers all read computed `ltv.*` keys.
  - `FINANCIAL_ESTIMATES` in `executiveConstants.js` echoes the inputs only and is not imported anywhere.
  - The rendered values match a hand calculation: 5-week exposure CA$17k (16,602), annual CA$173k, 5-week protected CA$6,480, annual protected CA$78k, surfaced CA$23k, annualised CA$250k.
  - Supply-side keys are left out, as expected for a one-sided client.
  - One note: with 0.56% the primary line works out to CA$141,523 a year, not exactly CA$140,400, because the exact solution is 0.5556% and the input step is 0.01. The gap is 0.8%. Nothing on screen shows the primary annual figure alone, so this was left as is.
- **(c) CA$ formatting.** `utils/format.js` takes the symbol and locale from `NOUNS` (`CA$`, `en-CA`). All computed money goes through it. The bare `$` amounts all came from authored text (see Bug 2).
- **(d) Contact detail modal.** All 807 index contacts have a matching record in the correct md5 shard, with a non-empty transcript and narrative summary, section scores and question evaluations. 805 of the 807 narratives are distinct. One contact per category was spot-checked, covering all 12 categories across shards 4, 6, 7, 9, 10, 13, 15 and 17, and all were contact-specific. In the rendered modal, 8 deep links across 7 shards and 8 categories showed full Summary, QA Scorecard (81-82 rows), Transcript (12-17 lines) and Agent Context tabs, with no fallback text.

## 3b. Percentages in the toggle view

- `qualityMatrix.js` `buildMatrix()` already divides by the whole week (`weekTotal`), not by the selected behaviour band.
- A check against the real contact index: for each of weeks 1-5, the 24 cells across the Good and Poor toggle states add up to 100.00%, and the cell counts add up to `weekTotal` (163, 164, 155, 163, 162).
- Related totals use the same scope:
  - `MatrixCellModal`'s "Total weekly calls" gets `matrix.weekTotal`.
  - The cell template reads "{pct}% of all {total} contacts this week", with `total` = `weekTotal`.
  - The campaign summary's `heroPct` is labelled "% of all contacts that week" and uses the same denominator.
- No other toggle, tab or segment view in the app computes percentages.

## 4. Bugs found and fixed

### Bug 1: Agent page showed "About NaN minutes", an empty role and an empty team lead (crash-class data gap)
- **Where it showed:** `app/src/pages/Agent.jsx:77` (`pack.estimatedPackDurationSeconds / 60` gave NaN), `:145` (`agent.role`), `:148` (`agent.team`), and `components/MicroCoachingCard.jsx:39` (`card.estimatedDurationSeconds`). `AgentTlModal.jsx:116` also passes `agent.team`.
- **Root cause:** the content file `clients/apex-utilities/content/agentMetrics.js` (hand-authored in stage 4) left out `role`, `team`, `coachingPack.estimatedPackDurationSeconds`/`packWordCount` and per-card `wordCount`/`estimatedDurationSeconds`. The BBB and Brooklinen packs both have these fields.
- **Fix, in the content file, then re-copied to the app:**
  - All 10 agents now have `role: "Customer Support Agent"` and `team: "Palesa Mahlangu"`, the only team lead named in `agents.js`.
  - All 37 cards now have `wordCount` and `estimatedDurationSeconds`, using the same method as the BBB pack: words from personalNote through encouragingClose, then round(words × 0.4) seconds.
  - Each pack total is the sum of its cards.
- **Verified:** all 10 agent pages render "Customer Support Agent · Team lead: Palesa Mahlangu · N contacts", show "About 2-3 minutes", and have no NaN.

### Bug 2: bare "$" amounts in client-visible text (CA$ requirement)
- **Where it showed:**
  - Executive hero and briefing text ("$1,800 back-bill", "$3,143 … $488")
  - VoC evidence and summaries
  - Agent coaching guidance ("a $600 adjustment")
  - The storyline title "…then lands an $1,800 surprise", which is also a `call_category` and so appears in Contact Search filters, the index, Operations incident trails and coaching personal notes
  - 50 transcripts, 14 QA evidence quotes and 3 narratives
- **Root cause:** authored text in `story-spec.json` (storyline title and notes), `category_content.json` (5 dialogue lines), and `content/executiveConstants.js`, `vocConstants.js` and `agentMetrics.js`. From there it flowed through `contact_extract.json`, `agent_metrics.json` and the generated shards and index.
- **Fix:**
  - `$<digits>` was changed to `CA$<digits>` in all of those source files, including `contacts/contact_extract.json` and `agent_metrics.json`, so the renamed category key stays the same everywhere.
  - The same change was made to `app/public/data` (index plus 20 shards), 114 replacements.
  - "an CA$1,800" was corrected to "a CA$1,800", and doubled forms like "CA$6 CAD" were tidied.
  - Category keys were re-checked: `contact_extract`, `category_content` and the index all match.
- **Verified:** there is no bare `$` on any rendered route or in any of the 8 rendered contact modals. The one exception is listed under open items.

### Bug 3: the financial panel still used "LTV at risk" (churn) wording for a regulated monopoly
- **Where it showed:**
  - `components/MemberLtvSection.jsx`: "Customer LTV at risk", "LTV protected by Micro Coaching", "Total LTV impact surfaced this period", "Customer LTV CA$1k · Shows LTV still at risk…", "Annualised at risk"
  - `components/LtvBreakdownDrawer.jsx`: drawer title, subtitle and "Annualised at risk:"
  - `pages/Executive.jsx:175`: "LTV Assumptions" / "Adjust customer LTV inputs"
- **Root cause:** these labels were hardcoded in template components. `ltvCopy.js` had no way to override them, so the cost-to-serve reframing only reached the section title and drawer text. "CA$1k" was also a misleading rounding of CA$1,080.
- **Fix:**
  - New `app/src/utils/ltvLabels.js`. Its defaults are the original strings, so other clients are unchanged. It reads an optional `LTV_UI_LABELS` export from `data/ltvCopy.js` through a namespace import, so packs without that export still build.
  - The three components now read their labels from it.
  - `clients/apex-utilities/content/ltvCopy.js` exports `LTV_UI_LABELS` with cost-to-serve wording ("Avoidable cost-to-serve exposure", "Avoidable cost protected by Micro Coaching", "Total cost-to-serve impact surfaced this period", "Cost-to-Serve Assumptions", …) and `unitValueFormat: 'whole'`, so the unit shows as "Customer annual value CA$1,080".
- **Verified:** there is no "LTV" text anywhere on the Executive page, drawers or assumptions modal, and the computed values are unchanged.

### Bug 4: generator text defects in contact narratives and transcripts
- **Where it showed:**
  - All 807 narratives read "…, a Apex Utilities customer, …" and "…on the demand side." Marketplace jargon doesn't fit a one-sided client.
  - 106 continuation transcripts and 53 QA evidence quotes read "I'm following up again — i haven't…".
- **Root cause:** in `skills/qiq-content-writer/scripts/generate_contact_shards.py`:
  - `gen_narrative()` hardcoded the article "a" and always added the side clause.
  - `gen_transcript()` lowercased the first letter even when it was the pronoun "I".
- **Fix in the generator:**
  - Added `_indefinite_article()`.
  - `gen_narrative(..., one_sided=False)` leaves out the side clause when `--one-sided` is set, and `main()` now passes `args.one_sided`.
  - Added `_continue_sentence()`, which keeps "I" capitalised.
- **Output:** the invocation stage 5 used (name lists, seed) wasn't recorded, and re-running with guessed arguments would reshuffle customer names and RNG-driven QA details that the content files reference. So the existing shards and index were patched with exactly the string changes the fixed generator produces: 807 article fixes, 807 side-clause removals, 159 pronoun fixes. Contact IDs, scores and question outcomes are unchanged.

### Minor: hardcoded `en-GB` number locale
- `pages/ContactSearch.jsx` (4 places) and `pages/QualityAnalysis.jsx:172` now use `NOUNS.locale`. Integer output looks the same, but the template no longer hardcodes a locale.

## 5. Open items and manual steps

1. **Verbatim Google review quotes still contain bare "$".** These are `content/vocConstants.js:87` ("I have used $488 worth of gas and been charged $3143 in fees!!!") and `:101` ("…a $1800 plus bill!!!"), plus the matching `quotes[].text` in `story-spec.json` (lines 220 and 239). They are word-for-word quotes from real public reviews, so they were deliberately not changed. **Vansh:** decide whether to (a) leave them as quoted, (b) change them to "CA$" in brackets, e.g. `[CA]$488`, or (c) paraphrase them. Whichever you pick, edit both files and re-copy `vocConstants.js` into `app/src/data/`. These quotes show in VoC evidence drawers; none showed up on the routes the harness clicked through.
2. **Recording the shard generator invocation.** Next time `generate_contact_shards.py` is run for Apex, pass `--one-sided` and record the full command, for example in this folder, so the generator fixes apply from a clean re-run instead of the output patch.
3. No dev server was opened in a real browser, because this environment has none. The jsdom render above ran the real app code through Vite. An optional 2-minute check before a sales call: `npm run dev`, open `/`, `/agent`, and one `/search?call=APX-000806`.

## Round (2026-09-29): provenance surfaces, per-review links, longer transcripts, O1 continuation-CSAT fix

**Status: PASS.** The live app (`QIQ Demos/Apex Utilities Demo`, app at the folder root) passes lint (0 problems) and build (clean, 935 kB JS). `dist/data` matches `public/data`. The jsdom smoke test raised 0 console errors and 0 findings after the fixes below. Static QA is PASS (see `qa_report.md`).

**Harness**
- Location: `clients/apex-utilities/audit/`, the Complete Care scripts with `APP_ROOT` support (the Apex app is not in `clients/apex-utilities/app`). `env.sh` sets `APP_ROOT`, the other-client pattern, the agent route and the `/voc` forbidden figures.
- Coverage: `/`, `/voc`, `/operations`, `/quality` to depth 2; `/search` to depth 2 (130 top-level controls, about 2,100 actions); `/agent` and all 10 agent pages; 10 `?call=` deep links (incident contacts 801, 802 and 806, both other quick links, all 4 flagged calls, one ordinary contact) plus the week-5 auto-fail filter, with all 4 detail tabs; Quality: 5 weeks × both toggles × every non-empty cell; the methodology drawer from all 7 entry points.
- Not re-run: the 390px check in a real browser. No browser available to this session can load the VM build (file:// and VM hosts are blocked). The Apex app's CSS is now byte-identical to Complete Care's, which passed at 390px and 1280px on 2026-09-28, and the Apex copy has no long unbreakable strings. Worth one look on a phone after the next deploy.

### Ported this round (template → Apex app)
- `components/ProvenanceBadge.jsx`, `components/MethodologyDrawer.jsx`, `pages/VoiceOfCustomer.jsx` (route `/voc`), `styles/provenance.css` (legend "Legend · type of data used on this page", margin `4px 0 36px`), `styles/voc.css`.
- `Nav.jsx` (VOC menu item, per-page badge, "How this demo was built" button, pills hidden when not passed), the 640px nav wrap in `components.css`, `App.jsx` route, `Executive.jsx` badges + legend + `connectorNote`, `MemberLtvSection.jsx` badge in the LTV connector, `charts/CoachingWeekBoxLabel.jsx` computed week.
- Apex had no customisations in those files beyond `config/brand.js`, which was kept.
- `CoachingWeekBoxLabel` now reads "Coaching deployed W2." The old hard-coded label said W3 while the marker sat on week 2.

### Fixed this round
1. **O1: the continuation-CSAT recovery was authored but not in the data.** The copy said 2.3 → 3.4; the generated contacts were flat (2.14 / 2.30 / 2.25 / 2.31 / 2.46).
   - **Spec changes:**
     - `coaching.applyEffectToDataset: true`.
     - `effectSeriesCsat` [2.3, 2.5, 2.8, 3.1, 3.4] → **[2.0, 2.1, 2.2, 2.4, 2.8]**. The mean is 2.3, the spec's continuation value, so period averages don't move: continuation 2.31 (was 2.29), team CSAT 3.79 (was 3.78), first-contact 4.27, QA 87.39 (unchanged).
     - `population.weekAnchor: 2026-08-03` (see 2).
     - `kpis.fiveWeekTrend.csat` [4.1, 3.9, 3.8, 3.7, 3.6] → **[3.71, 3.8, 3.73, 3.67, 4.03]**, the extract's weekly blended means.
     - No `criticalFailureWeekly` target: week swaps would move low-CSAT contacts and bend the recovery curve.
     - Hero narrative paragraph 2: "2.3 to 3.4 by week 5" → "2.0 in week 1 to 2.9 by week 5".
   - **Verified from the regenerated index:**
     - continuation CSAT by week **2.00 / 2.06 / 2.11 / 2.43 / 2.88**
     - blended 3.71 / 3.80 / 3.73 / 3.67 / 4.03
     - auto-fails **14 / 12 / 14 / 8 / 2 = 50** (was 16 / 9 / 11 / 8 / 11 = 55)
   - **Copy updated to match:**
     - every "2.3 → 3.4" / "2.3 to 3.4" now reads "2.0 → 2.9" / "2.0 to 2.9", and "CSAT +1.1" → "+0.9";
     - `CONTINUATION_CSAT_RECOVERY` holds the measured weekly series, and the Pattern 1 trend chart reads it;
     - `CRITICAL_FAILURES` is now summed from `AGENT_METRICS` (weekly, total 50, current 2, peak 14);
     - every "16 → 9 → 11 → 8 → 11", "peak of 16", "11 in week 5" and "55" in executive, operations, quality, VOC and LTV copy now describes 14 → 12 → 14 → 8 → 2 (week 3 back at the week-1 level, falling since);
     - the Quality weekly narratives: week 1 is now "joint-highest", week 3 "back level with week 1", week 4 "lowest so far";
     - the blended-CSAT wording: "has not turned yet" → "lifts only in week 5".
   - **Operations CSAT drawer:** it showed "3.4" labelled as blended CSAT, which was really the old continuation end-point. It now shows the week-5 blended value (4.0) and computes the gap to target.
   - **Top auto-fail agents:** "Sipho van der Merwe 11, Kagiso Radebe 9" → Kagiso Radebe, Vusi Jacobs and Sipho van der Merwe at 8 each. `QUALITY_SUMMARY` and the VOC decision text read the flagged order.
   - **Benchmark agent:** Vusi Molefe now has 5 auto-fails, so the "Lowest auto-fail count" benchmark row and the best-practice card now go to Zanele Radebe (2, the lowest). The ledger is data-driven like Complete Care's.
   - **`agentMetrics.js`** was re-synced by the new `clients/apex-utilities/sync_agent_series.py`, adapted from Complete Care's. It also syncs `firstQa` and the `firstCsat` quoted in `positiveOpening`, and its card regexes no longer run across card boundaries.
     - No gap counts changed.
     - Two severities changed: Nomsa Khumalo route_forward high → medium; Vusi Molefe route_forward and match_register medium → high.
     - The flagged order is now Kagiso Radebe, Vusi Jacobs, Sipho van der Merwe, Karabo Zulu.
   - **Research doc:** manifest strings updated (2), then `build_methodology.py`, `generate_public_voc.py` and `build_sales_doc.js` re-run.
2. **Storyline contacts were all dated 2026-08-03 (week 1, day 1).** The spec dates for APX-000801..807 are 08-11 / 08-14 / 08-19 / 08-21 and 08-15 / 08-28 / 09-02.
   - Cause: no `population.weekAnchor`.
   - Fix: added the anchor and regenerated. The contacts now carry their real dates.
3. **Each incident showed a different customer name on every contact.** For example, Emily Stewart, Tyler Cameron, Emily Kerr and Robert Grant all appeared on the same fee dispute. Regenerated with the current shard generator, which keeps one name per incident: Chris Bell (BILLDISPUTE) and Brian Baker (MISSINGBILL).
4. **Quick links pointed at incident first contacts that aren't auto-fails.** APX-000801 and APX-000805 are now the follow-ups **APX-000802** and **APX-000806**, both auto-fails.
   - All 4 quick links and all 4 flagged calls resolve to auto-fail contacts with the right agent, date and category (`audit/check_ids.py`).
   - The flagged-call QA figures are now exact (95.9 / 100 / 98.8 / 94.2, were rounded to 96 / 99 / 94).
   - One flag reason said "closed without route" on a contact that was resolved. It now reads "Continuation · high QA · CSAT 2".
5. **Stale hard-coded team and agent numbers.**
   - `TEAM_HEALTH_STATS` (QA, CSAT, "11 · 55", "10/10") and the Operations hero stats now read `TEAM_AGGREGATES` / `AGENT_METRICS`.
   - The coaching ledger and its summary chips are computed with the same thresholds as `statusOf`.
6. **Raw metric keys.**
   - 30 camelCase `affectedKpis` keys (`repeatContactRate`) were normalised to `repeat_contact_rate`.
   - The TL evidence line in `agents.js` maps keys to display labels ("Repeat contacts").
   - 0 raw-identifier chips in the smoke test.
7. **Contact-ID literals in content** (the 8 QA items accepted in the first build) are now built with `contactRef(n)`. QA banned-terms passes.
8. **Retail wording and odd `{event}` fills in transcripts.** Every contact verified identity with "the email or order number on the account", and rate-class openers read "moved to a different rate class because of the recent storm". Each category now has its own `verify`/`verify_reply` (account number or service address), and the `{event}` placeholders are gone.
9. **`build_methodology.py`** (shared script, backwards-compatible):
   - `domain_of()` read a Google Maps `data=!4m8…` URL tail as a domain. It now only accepts a bare domain.
   - New opt-in flag `methodology.coachingFromDataset`: the coaching row quotes the measured first/last-week continuation CSAT (2.0 → 2.9) rather than the generator targets (2.0 → 2.8).
   - Re-running it for Complete Care, Sun Life and DentaQuest produces byte-identical `methodology.json`.
10. **`research.json` / `research.md` were still the pre-correction "no reviews found" version.** They now carry the Google Business Profile corpus: 2.5/5, 52 reviews, split 31/2/1/0/18 re-checked on 2026-09-29, 10 read, themes and linked quotes. The first-pass inferred themes are kept as `inferredThemesFirstPass`.

### Per-review links
- Listing: Apex Utilities Inc., Leduc AB (CID `0x46aa1efe2dfd8cb5`).
- **6 of 7 quotes link to their own review** using `maps/reviews/data=!4m8!14m7!1m6!2m5!1s{ID}!2m1!1s0x0:{CID}!3m1!1s2@1:{ID}`. Each link was opened in Chrome and shows the quoted text: M L, Jules Sommer ×2, Ken Neuts, Marianne Volk, Alana Shilleto.
- **1 quote (Mike Kruger, vacant-property distribution charge) links to the Google Maps listing** with "(this review isn't individually linkable)". The reviews pane stopped loading past the first 10 reviews, so its review ID couldn't be read. No ID was guessed.

### Transcripts
- `category_content.json` was enriched with `probes`, `explain`, `good_after`, `bad_after`, `recap_good`, `recap_bad`, `ack`, `verify`/`verify_reply` and `topic` for all 12 categories. The backup is `category_content.backup-2026-09-29.json`.
- Categories that mixed unrelated openers were made single-topic so the probes follow the opener: Start/Stop/Move is about moves, Gas Safety about furnace ignition, Emergency about gas odour.
- Regenerated with `clients/apex-utilities/run_shards.sh`, which writes straight into the app's `public/data`. Same file names and layout as before, so no app change was needed.
- All 807 transcripts are 20-32 lines (median 22).
- No transcript repeats a line, and every scorecard evidence quote appears in its transcript.
- 0 grammar-pattern hits and 0 other-client strings in `src`, `public/data` and `dist`. The only hit is the template CSS class `.rover-logo`.

### Checked, no change needed
- **Storyline 4 (System Betterment notifications, coachable: false)** is never credited to coaching.
- **`/voc`:**
  - 11 https links, 0 unlinked quotes, and 0 empty, `undefined` or `null` hrefs.
  - Every number on the page traces to `PUBLIC_VOC`, and no modelled figure (16,000 / 807 / 3,200) appears.
  - The nav shows "52 public reviews".
  - The drawer matches `methodology.json` from all 7 entry points.
- **Executive Public badges** sit only on the legend and the External VOC strip, which holds real review themes.
- **Quality matrix:** both toggles sum to 100.00% ± 0.03 each week. The modal totals are 156/167/157/164/163. The weekly auto-fail placeholders render 14/12/14/8/2.
- **Currency:** CA$ throughout the app and the doc. The only bare "$" amounts are inside verbatim review quotes (open item from the first build).
