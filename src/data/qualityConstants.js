/** Qualitative copy only. Live numbers are interpolated at render time. This demo uses illustrative, synthetic data - Apex Utilities has not shared operational data with QiQ. */

export const CHEAT_CODE_LABELS = {
  card_1_open_with_incident: 'Card 1: start where they left off',
  card_2_match_register: 'Card 2: let the dispute set the tone',
  card_3_route_forward: 'Card 3: name who has it and when',
  card_4_acknowledge_effort: 'Card 4: count the chasing',
  cc1: 'Card 1: start where they left off',
  cc2: 'Card 2: let the dispute set the tone',
  cc3: 'Card 3: name who has it and when',
  cc4: 'Card 4: count the chasing',
}

/**
 * Campaign summaries by week (0-4). Placeholders:
 * {total}, {processAdherencePct}, {resolutionRatePct}, {positiveCsatPct},
 * {criticalFailures}, {heroPct}, {heroCount}, {meanQa}, {overallQa}
 */
export const CAMPAIGN_SUMMARY_BY_WEEK = [
  {
    headline:
      'Quality mining found the pattern per-contact QA cannot see: follow-up dispute contacts that pass the scorecard and still fail the customer.',
    paragraphs: [
      'Week 1 surfaces a large block of contacts in resolution achieved, process followed, and negative CSAT. Process adherence sits at {processAdherencePct}% and resolution at {resolutionRatePct}% across {total} contacts, yet customers are rating the experience poorly.',
      'These are follow-up contacts where the customer called back on an unresolved billing or rate-class dispute and the agent handled it as a fresh request. A contact can pass every scorecard question and still fail the customer.',
      '{criticalFailures} contacts auto-failed this week, the peak of the period, concentrated on a small number of agents. The Poor behaviour, negative CSAT cell alone holds {heroCount} contacts ({heroPct}% of all contacts that week) with a mean QA of {meanQa}.',
    ],
    wow: 'Auto-fails {criticalFailures} · process adherence {processAdherencePct}% · positive CSAT {positiveCsatPct}% · hero-cell mean QA {meanQa}',
    chips: [
      { text: 'Follow-up dispute contacts treated as fresh calls', className: 'chip-red', dotColor: '#f87171' },
      { text: 'Hero cell mean QA {meanQa} while CSAT collapses', className: 'chip-amber', dotColor: '#fbbf24' },
      { text: 'Process adherence {processAdherencePct}% still looks healthy', className: 'chip-green', dotColor: '#4ade80' },
    ],
  },
  {
    headline:
      'Micro Coaching went out in week 2 to the whole team. Continuation CSAT starts to move, and auto-fails ease from the week-1 peak.',
    paragraphs: [
      'Coaching opens every follow-up contact by naming what’s already on the account, not a blank page. Continuation-cohort CSAT is up from the week-1 starting point, and auto-fail contacts have already eased from their week-1 peak.',
      'Process adherence ({processAdherencePct}%) and resolution ({resolutionRatePct}%) remain healthy across {total} contacts. Positive CSAT is {positiveCsatPct}%.',
      'The core argument still holds: a contact can pass every scorecard question and still fail the customer, and per-contact QA scoring cannot see the dispute history that drives CSAT down.',
    ],
    wow: 'Auto-fails {criticalFailures} · process adherence {processAdherencePct}% · positive CSAT {positiveCsatPct}% · coaching live from week 2',
    chips: [
      { text: 'Micro Coaching deployed team-wide', className: 'chip-amber', dotColor: '#fbbf24' },
      { text: 'Auto-fails at {criticalFailures}, down from the week-1 peak', className: 'chip-green', dotColor: '#4ade80' },
      { text: 'Aggregate CSAT still lagging coaching uptake', className: 'chip-amber', dotColor: '#fbbf24' },
    ],
  },
  {
    headline:
      'Auto-fails tick back up this week. Continuation CSAT keeps climbing regardless, and the negative-CSAT-despite-good-process cell is the one to watch.',
    paragraphs: [
      'Auto-fail contacts rise to {criticalFailures} this week, up from week 2 but still below the week-1 peak. Continuation CSAT climbs anyway, which is a genuine early signal, not a contradiction: agents are opening more contacts by naming the dispute history even while the auto-fail count has not settled into a clean line yet.',
      'Across {total} contacts, process adherence is {processAdherencePct}% and resolution is {resolutionRatePct}%. Positive CSAT sits at {positiveCsatPct}%.',
      'Mean QA in the hero cell remains high at {meanQa}, which is the proof point: scorecards pass while the customer experience still fails until behaviour changes.',
    ],
    wow: 'Auto-fails {criticalFailures} · process adherence {processAdherencePct}% · positive CSAT {positiveCsatPct}% · hero-cell mean QA {meanQa}',
    chips: [
      { text: 'Auto-fails at {criticalFailures}, uneven not monotonic', className: 'chip-amber', dotColor: '#fbbf24' },
      { text: 'Hero cell still shows high QA ({meanQa})', className: 'chip-amber', dotColor: '#fbbf24' },
      { text: 'Continuation CSAT improving regardless', className: 'chip-green', dotColor: '#4ade80' },
    ],
  },
  {
    headline:
      'Auto-fails fall to {criticalFailures}, the lowest point of the period. CSAT keeps recovering as Micro Coaching settles into habit.',
    paragraphs: [
      'Process adherence ({processAdherencePct}%) and resolution ({resolutionRatePct}%) hold across {total} contacts. Positive CSAT is {positiveCsatPct}%.',
      'A contact can still pass every scorecard question and fail the customer when a cross-team dependency, not behaviour, is the blocker. The matrix is now separating those two problems.',
      'The coaching loop is visible in the data: detection in week 1, Micro Coaching from week 2, and continuation CSAT climbing every week since, even as auto-fail counts stay uneven.',
    ],
    wow: 'Auto-fails {criticalFailures} · process adherence {processAdherencePct}% · positive CSAT {positiveCsatPct}% · continuation recovery underway',
    chips: [
      { text: 'Auto-fails at their lowest point, {criticalFailures}', className: 'chip-green', dotColor: '#4ade80' },
      { text: 'Process gaps still drive residual negative CSAT', className: 'chip-amber', dotColor: '#fbbf24' },
      { text: 'Behaviour gap no longer the primary driver', className: 'chip-green', dotColor: '#4ade80' },
    ],
  },
  {
    headline:
      'Auto-fails close the period at {criticalFailures}, down from the week-1 peak but not a clean line. Continuation CSAT is the clearer win so far, and System Betterment notification timing remains an open, uncoached gap.',
    paragraphs: [
      'Week 5 closes the period with {criticalFailures} auto-fail contacts, down from the week-1 peak of 16 but not a smooth decline. Continuation-cohort CSAT is the cleaner result, up every week since coaching started. Remaining negative CSAT sits partly in System Betterment / Construction Project Notifications, a cross-team process gap, not a behavioural one.',
      'That is a different problem needing a process fix, not more coaching. Process adherence is {processAdherencePct}%, resolution {resolutionRatePct}%, and positive CSAT {positiveCsatPct}% across {total} contacts.',
      'Quality mining found the dispute-history gap in week 1, Micro Coaching from week 2 moved continuation CSAT up every week, and auto-fail volume stayed uneven - the two indicators the executive summary reports side by side rather than folding into one clean story. This demo uses illustrative, synthetic data.',
    ],
    wow: 'Auto-fails uneven across the period · process adherence {processAdherencePct}% · positive CSAT {positiveCsatPct}% · process-gap residual remains open',
    chips: [
      { text: 'Continuation CSAT up every week since coaching', className: 'chip-green', dotColor: '#4ade80' },
      { text: 'Residual negative CSAT includes a process gap, not just behaviour', className: 'chip-amber', dotColor: '#fbbf24' },
      { text: 'Per-contact QA would have missed the pattern', className: 'chip-red', dotColor: '#f87171' },
    ],
  },
]


const DEFAULT_OUTCOME =
  'This cell holds {pct}% of all {total} contacts this week ({count} contacts) with a mean quality score of {meanQa}. Dominant categories: {categories}.'

const HERO_OUTCOME =
  'These {count} contacts ({pct}% of all {total} contacts this week) resolved the issue and followed every process step, and still produced a negative rating. A high share are follow-up contacts on an already-open billing or rate-class dispute where the history went unacknowledged. Mean QA is {meanQa}, so per-contact scoring would pass most of these. Dominant categories: {categories}.'

export function outcomeSummaryTemplate(row, csatBand, behaviourBand) {
  if (row === 0 && csatBand === 'negative' && behaviourBand === 'poor') return HERO_OUTCOME
  return DEFAULT_OUTCOME
}

const DEFAULT_IMPROVEMENTS = [
  'Review the contacts in this cell for process gaps versus emotional register mismatches.',
  'Calibrate team leaders on how high QA can coexist with low CSAT on continuation contacts.',
  'Use the matrix cell as a coaching filter rather than sampling quality scores alone.',
]

const HERO_IMPROVEMENTS = [
  'Acknowledge what’s already on the account before running the process checklist on every continuation contact.',
  'Name ownership and a concrete route forward before closing, even when a billing review limits full resolution on the call.',
  'Match the customer register to the severity of the dispute, not only to the latest request.',
]

export function improvementOpportunities(row, csatBand, behaviourBand) {
  if (row === 0 && csatBand === 'negative' && behaviourBand === 'poor') return HERO_IMPROVEMENTS
  return DEFAULT_IMPROVEMENTS
}

const DEFAULT_ACTIONS = {
  contactCentre: [
    'Add this cell to the weekly team-leader calibration queue.',
    'Spot-check recent contacts for empathy and ownership language.',
    'Keep QA forms focused on process, and use the matrix for behavioural risk.',
  ],
  prevention: [
    'Surface open-dispute context in the agent desktop before the first reply.',
    'Reduce handoffs that strip account history from the next contact.',
    'Flag process-gap categories separately so coaching is not asked to fix a cross-team notification gap.',
  ],
}

const HERO_ACTIONS = {
  contactCentre: [
    'Deploy Card 1: start where they left off (Micro Coaching from week 2).',
    'Deploy Card 2: let the dispute set the tone, and Card 3: name who has it and when.',
    'Use Card 4: count the chasing, on repeat dispute contacts. Calibrate QA so auto-fails feed this coaching loop.',
  ],
  prevention: [
    'Auto-surface prior contacts on the same dispute in the agent workspace.',
    'Separate process-handoff outcomes from behavioural failures in reporting so leadership sees which lever to pull.',
    'Shorten the notification-timing gap on System Betterment work that forces customers back into continuation contacts.',
  ],
}

export function recommendedActions(row, csatBand, behaviourBand) {
  if (row === 0 && csatBand === 'negative' && behaviourBand === 'poor') return HERO_ACTIONS
  return DEFAULT_ACTIONS
}

export function interpolate(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = vars[key]
    return value == null ? '' : String(value)
  })
}

export const ROW_LABELS = [
  {
    lines: [
      { ok: true, text: 'Resolution Achieved' },
      { ok: true, text: 'Process Followed' },
    ],
  },
  {
    lines: [
      { ok: false, text: 'Resolution Not Achieved' },
      { ok: true, text: 'Process Followed' },
    ],
  },
  {
    lines: [
      { ok: true, text: 'Resolution Achieved' },
      { ok: false, text: 'Process Not Followed' },
    ],
  },
  {
    lines: [
      { ok: false, text: 'Resolution Not Achieved' },
      { ok: false, text: 'Process Not Followed' },
    ],
  },
]

export const CSAT_COLUMN_META = [
  { key: 'positive', label: 'Positive (4-5)', className: 'qa-col-positive' },
  { key: 'neutral', label: 'Neutral (3)', className: 'qa-col-neutral' },
  { key: 'negative', label: 'Negative (1-2)', className: 'qa-col-negative' },
]

export const FRUSTRATION_KEYWORDS = [
  'again',
  'still waiting',
  'already told',
  'exhausted',
  'stressed',
  'concerned',
  'frustrated',
  'unacceptable',
  'escalate',
]

/**
 * One-line definitions under the Quality Overview metric cards.
 *
 * "Call Resolution Rate" here is the share of contacts resolved *eventually*.
 * Executive's "First contact resolution" KPI is the share resolved on the
 * first attempt with no repeat. The two are different measures of different
 * things and will not match - with a 21.2% repeat contact rate, an ~80%
 * eventual-resolution rate and a ~68% first-contact-resolution rate are
 * consistent with each other. These sub-labels exist so neither page can be
 * read as quoting the same number twice.
 */
export const METRIC_CARD_NOTES = {
  processAdherence: 'Scorecard process steps followed',
  resolution: 'Resolved eventually · not the same as first-contact resolution',
  positiveCsat: 'CSAT 4 or 5',
}
