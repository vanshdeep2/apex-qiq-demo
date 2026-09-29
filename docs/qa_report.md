# QA report — Apex Utilities

**Status: PASS (with items to review)** · re-run 2026-09-29 after the provenance / longer-transcript / O1 round

Run with `skills/qiq-demo-qa/scripts/run_qa.py`'s checks imported one by one, pointed at the live app (`QIQ Demos/Apex Utilities Demo`, app at the folder root, so `resolve_app_dir` was redirected there). Lint and build were run in their own calls.

## Results by check

- Spec invariants: pass.
- Banned terms: pass. The 8 contact-ID literals that used to be listed here (quick links and flagged calls) are now built with `contactRef(n)`, as Complete Care does.
- Public VOC integrity (`check_public_voc`): pass. `publicVoc.js` and `methodology.json` exist, all 7 quotes are verbatim in `story-spec.json`/`research.json`, reviews-read = `external.reviewsExamined` (10), synthetic rows are declared, and the app's copy of `publicVoc.js` is identical.
- Contact shard richness: pass (807 contacts, every transcript 20-32 lines, median 22).
- Index title: pass.
- Lint: `eslint .` 0 problems. Build: `npm run build` passes (935 kB JS, the usual chunk-size notice only); `dist/data` matches `public/data`.

## Warnings (review before delivery)

- 143 numeric literal(s) in content/ don't match story-spec.json or the dataset. Not necessarily wrong (some are legitimate derived values, indices, or CSS/layout numbers) but every one should be checked by hand:
    agentMetrics.js:110  30
    agentMetrics.js:113  479
    agentMetrics.js:117  141
    agentMetrics.js:139  118
    agentMetrics.js:140  47
    agentMetrics.js:161  123
    agentMetrics.js:174  600
    agentMetrics.js:183  39
    agentMetrics.js:282  193
    agentMetrics.js:283  483
    agentMetrics.js:287  141
    agentMetrics.js:309  125
    agentMetrics.js:331  124
    agentMetrics.js:354  37
    agentMetrics.js:366  600
    agentMetrics.js:452  138
    agentMetrics.js:457  138
    agentMetrics.js:479  109
    agentMetrics.js:502  39
    agentMetrics.js:599  26
    agentMetrics.js:601  143
    agentMetrics.js:602  358
    agentMetrics.js:606  138
    agentMetrics.js:628  118
    agentMetrics.js:629  47
    agentMetrics.js:650  102
    agentMetrics.js:750  191
    agentMetrics.js:751  477
    agentMetrics.js:755  138
    agentMetrics.js:777  120
    agentMetrics.js:778  48
    agentMetrics.js:799  119
    agentMetrics.js:800  48
    agentMetrics.js:822  40
    agentMetrics.js:834  600
    agentMetrics.js:920  138
    agentMetrics.js:925  135
    agentMetrics.js:947  117
    agentMetrics.js:948  47
    agentMetrics.js:970  37
    ... and 103 more

## Manual review items

- Financial figures with nearby labels — confirm no figure is labelled two different ways across pages:
    ltvCopy.js:27  'This panel estimates avoidable cost-to-serve exposure, not churn risk - Apex cu  [at risk, protected]

## Reviewed by hand

- The numeric-literal warning: outside `agentMetrics.js` (card word counts and reading-time seconds) every literal is a date, a contact number passed to `contactRef`, a modelled weekly trend that ends on the spec KPI, the population QA matrix, the CA$140,400 cost derivation, or a figure inside a verbatim review quote. None is a stale copy number.
- The financial label item: `ltvCopy.js` uses 'at risk' only inside the sentence that rules out churn framing. Accepted as before.
- Verbatim Google quotes keep their bare '$' ('$488', '$3143', '$1800'): they are direct quotes, left unedited (open item for Vansh from the first build).
