/**
 * Sourced from clients/apex-utilities/story-spec.json. Population, KPI,
 * driver, and financial figures are direct field lookups from the spec or
 * the qiq-dataset-builder output (agent_metrics.json / contact_extract.json)
 * - nothing here is a second, independently-authored number. Weekly trend
 * shapes for aht/fcr/escalation/transfer/nps are illustrative interpolations
 * that end exactly on the current blended KPI value from story-spec.json;
 * csat and repeat-contact-rate weekly shapes are copied directly from
 * story-spec.kpis.fiveWeekTrend. This demo uses illustrative, synthetic
 * data - Apex Utilities has not shared operational data with QiQ.
 */

export const LIVE_LABEL = 'Live · 5-week window'
export const CALLS_PILL = '16,000 contacts analysed'
export const EXTRACT_NOTE =
  'Contact Search carries an 800-record working extract of the 16,000-contact population.'

export const PERIOD_LABEL = '3 Aug - 6 Sep 2026'
export const WK_LABELS = ['3-9 Aug', '10-16 Aug', '17-23 Aug', '24-30 Aug', '31 Aug-6 Sep']
export const WK5 = WK_LABELS

export const POPULATION = {
  weeklyTotal: 3200,
  weeks: 5,
  estimatedPopulation: 16000,
  extractSize: 800,
  voiceShare: 58.0,
  messagingShare: 42.0,
  firstContacts: 2432,
  continuationContacts: 768,
  continuationShare: 24.0,
}

export const KPIS = {
  aht: { voice: 480, messaging: 260, blended: 380, target: 320 },
  fcr: { voice: 71.0, messaging: 66.0, blended: 68.5, target: 80.0 },
  escalation: { voice: 9.5, messaging: 5.5, blended: 7.2, target: 4.0 },
  csat: { voice: 4.0, messaging: 3.7, blended: 3.85, target: 4.4 },
  nps: { voice: 18, messaging: 10, blended: 14, target: 35 },
  rcr: { voice: 19.0, messaging: 23.0, blended: 21.2, target: 12.0 },
  transfer: { voice: 14.0, messaging: 8.0, blended: 10.6, target: 6.0 },
}

/** Aliases for healthScore.js (component contract). */
export const ACTUAL_AHT = KPIS.aht.blended
export const FCR = KPIS.fcr.blended
export const ESC_RATE = KPIS.escalation.blended
export const TR_RATE = KPIS.transfer.blended
export const RCR_RATE = KPIS.rcr.blended
export const ER_TARGET = KPIS.escalation.target
export const TR_TARGET = KPIS.transfer.target
export const RCR_TARGET = KPIS.rcr.target
export const CSAT = KPIS.csat.blended

export const DEFAULTS = {
  targetAht: KPIS.aht.target,
  costPerMin: 0.35,
  escMultiplier: 1.5,
  weeklyCalls: POPULATION.weeklyTotal,
}

/**
 * Blended CSAT slides gently across the period (story-spec.kpis.fiveWeekTrend.csat).
 * Do not draw a recovery curve here: population-level CSAT has not turned yet.
 * The metric that does respond to coaching so far is the continuation-cohort
 * CSAT curve (see COACHING_EFFECT_CSAT in ccmConstants, sourced from
 * story-spec.coaching.effectSeriesCsat).
 */
export const FIVE_WEEK_TREND = {
  weeks: WK_LABELS,
  csat: [4.1, 3.9, 3.8, 3.7, 3.6],
  rcr: [17.5, 19.0, 20.5, 21.8, 22.6],
  // Illustrative interpolation ending on KPIS.escalation.blended (7.2) - not a
  // separately sourced weekly figure, story-spec only carries the current value.
  escalation: [5.4, 6.0, 6.5, 6.9, 7.2],
}

/**
 * aht, fcr, transfer and nps below are illustrative interpolations that end
 * exactly on the current blended KPI value from story-spec.json, so week 5
 * always reconciles. They are not separately sourced weekly figures.
 */
export const TREND = {
  csat: FIVE_WEEK_TREND.csat,
  rcr: FIVE_WEEK_TREND.rcr,
  esc: FIVE_WEEK_TREND.escalation,
  aht: [350, 360, 368, 374, 380],
  fcr: [74.0, 72.3, 70.9, 69.6, 68.5],
  transfer: [8.8, 9.4, 9.9, 10.3, 10.6],
  nps: [22, 19, 17, 15, 14],
}

/**
 * The Micro Coaching intervention story. Deployed from week 2
 * (story-spec.coaching.appliedFromWeek), the same field every module reads.
 * CSAT on the coached cohort is the metric that has started to move; the
 * blended, population-wide KPIs above take longer to turn, which is
 * expected for a 3,200-contact/week population.
 */
export const COACHING_WEEK_INDEX = 1 // week 2, 0-indexed

/**
 * Team-wide critical/auto-fail QA outcomes, summed by week across all ten
 * agents in agentMetrics.js (criticalFailureSeries). Week 1 is the worst
 * week, not a clean decline into coaching - the honest finding is that
 * continuation CSAT is recovering (see coaching.effectSeriesCsat) while
 * auto-fail volume, though down from its week-1 peak, has not settled into
 * a clean downward line. Reported as-is, not smoothed into a success curve.
 */
export const CRITICAL_FAILURES = {
  weekly: [16, 9, 11, 8, 11],
  totalThisPeriod: 55,
  currentWeek: 11,
  peakWeek: 16,
  category:
    'Auto-fail outcomes concentrated on follow-up contacts on rate-class and billing/fee disputes opened without acknowledging the prior contact, and Start/Stop/Move/Payment contacts closed without a named next step',
}

/**
 * Continuation-cohort CSAT since coaching started, copied directly from
 * story-spec.coaching.effectSeriesCsat - not computed here.
 */
export const CONTINUATION_CSAT_RECOVERY = {
  weekly: [2.3, 2.5, 2.8, 3.1, 3.4],
  startValue: 2.3,
  currentValue: 3.4,
}

/** story-spec.firstVsContinuation.qaScorecardPct.continuation, direct field lookup, no computation. */
export const CONTINUATION_QA_WEEKLY = [88.0, 88.0, 88.0, 88.0, 88.0]

/**
 * Real figure from story-spec.storylines[0].stats: Rate Class / Bill Impact
 * Questions and Billing & Fee Dispute Escalations are two standalone
 * categories that combine to 34.0% of weekly volume - reported together
 * because Apex's real Google reviews evidence shows they're the same
 * underlying pattern (billing/fee disagreements that escalate into
 * complaints about agent tone and policy rigidity), not because they're one
 * category.
 */
export const EMPATHY_GAP_STAT = {
  category: 'Rate Class / Bill Impact Questions + Billing & Fee Dispute Escalations',
  categoryVolume: 1088,
  affectedCount: 316, // 29% repeat-contact rate on this cohort (storylines[2].stats), illustrative not separately sourced
  affectedSharePct: 29.0,
}

/** story-spec.firstVsContinuation, direct field lookup, no computation. */
export const FIRST_VS_CONTINUATION = {
  csat: { first: 4.3, continuation: 2.3 },
  ahtSeconds: { first: 340, continuation: 260 },
  behaviourScore: { first: 4.3, continuation: 2.6 },
  qaScorecardPct: { first: 92.0, continuation: 88.0 },
  processAdherencePct: { first: 95, continuation: 90 },
  resolutionRatePct: { first: 88, continuation: 75 },
}

/**
 * Population-level QA-outcome-by-CSAT-band matrix. Rows are illustrative
 * distributions consistent with story-spec's first/continuation resolution
 * and process-adherence percentages, and sum to POPULATION.weeklyTotal
 * (3,200). Not a directly sourced field - flagged as an inference in the
 * stage-4 handover note.
 */
export const QUALITY_OUTCOME_MATRIX = {
  overallQaAveragePct: 87.4,
  rows: [
    { label: 'Followed + Resolved', high: 1560, med: 460, low: 420 },
    { label: 'Followed + Not Resolved', high: 90, med: 190, low: 260 },
    { label: 'Not Followed + Resolved', high: 70, med: 50, low: 40 },
    { label: 'Not Followed + Not Resolved', high: 10, med: 20, low: 30 },
  ],
  headlineCell: {
    label: 'Followed + Resolved + Low CSAT',
    contacts: 420,
    shareOfTotalPct: 13.1,
    continuationShareOfCellPct: 64,
    qaAveragePct: 88.0,
  },
}

/**
 * REFRAMED (per Vansh, 2026-09-15): Apex is a regulated monopoly, so
 * "churn" language is factually wrong here - customers cannot switch
 * distributors. churnUpliftPct (0.56) is deliberately solved backward from
 * a real, directly-computed avoidable-repeat-contact-cost figure
 * (~CA$140,400/year), not a churn estimate. See ltvCopy.js for the
 * cost-to-serve framing and story-spec.financial._note for the full
 * derivation. Totals are computed at render/build time from these inputs,
 * never hardcoded as a second number.
 */
export const FINANCIAL_ESTIMATES = {
  demandSideLtv: 1080,
  cohortHitWeekly: 450,
  churnUpliftPct: 0.56,
}

export const OVERALL_QA_PCT = 87.4

export const PERIOD_WEEKS = 5
export const REPEAT_CONTACTS = 768
export const UNNECESSARY_ESCALATIONS = Math.round(POPULATION.weeklyTotal * (ESC_RATE / 100))

/**
 * Weekly taxonomy from story-spec.json drivers.
 */
export const DRIVER_ROWS = [
  { name: 'Rate Class / Bill Impact Questions (Phase 2 Change)', volume: 576, share: 18.0, fcr: 60, aht: 410, esc: 10 },
  { name: 'Billing & Fee Dispute Escalations', volume: 512, share: 16.0, fcr: 51, aht: 460, esc: 17 },
  { name: 'Start / Stop / Move / Payment / Account Access', volume: 448, share: 14.0, fcr: 82, aht: 270, esc: 2 },
  { name: 'Budget Billing (Equalization Plan) Enrollment & Adjustments', volume: 416, share: 13.0, fcr: 63, aht: 360, esc: 9 },
  { name: 'Estimated vs. Actual Meter Read Disputes', volume: 320, share: 10.0, fcr: 66, aht: 370, esc: 7 },
  { name: 'System Betterment / Construction Project Notifications', volume: 256, share: 8.0, fcr: 55, aht: 310, esc: 9 },
  { name: 'General Gas Safety & Appliance Questions (Non-Emergency)', volume: 224, share: 7.0, fcr: 88, aht: 280, esc: 1 },
  { name: 'Other / Miscellaneous', volume: 192, share: 6.0, fcr: 79, aht: 260, esc: 3 },
  { name: 'Gas Emergency / No-Heat / Leak Response', volume: 160, share: 5.0, fcr: 91, aht: 520, esc: 3 },
  { name: 'Missing Bill / Account Reconciliation Issues', volume: 96, share: 3.0, fcr: 41, aht: 540, esc: 24 },
]

export const CROSS_KPI_PATTERNS = [
  {
    label: 'Cross-KPI Pattern 1',
    headline: 'Billing and fee disputes escalate on top of an already-strained rate-change season',
    body: 'First-contact CSAT 4.3 vs continuation 2.3 while QA barely moves, 92.0% to 88.0%. Per-contact scorecards cannot see the dispute history.',
    rootCause:
      'Rate Class / Bill Impact Questions (18.0%) and Billing & Fee Dispute Escalations (16.0%) combine to 34.0% of weekly volume, and this is not a hypothesis - it is independently evidenced on Apex’s own public Google Business Profile (2.5 stars, 52 reviews): a customer billed CA$3,143 in fees against CA$488 of actual gas use, a vacant-property customer charged a daily distribution fee for zero usage, and recurring complaints describing phone agents as rude or unhelpful when these disputes come up. One customer’s dispute sequence shows the pattern directly - a first contact scoring CSAT 4 and QA 92%, then three follow-ups scoring CSAT 2, 1, and 1 while QA still held at 85-88%. Micro Coaching card 1 (start where they left off) and card 2 (let the dispute set the tone) were deployed from week 2. Auto-fail QA outcomes have fallen from a week-1 peak of 16 to 11 by week 5, uneven rather than clean, while continuation-cohort CSAT has moved every week, 2.3 to 3.4.',
    trend: {
      title: 'Continuation-cohort CSAT · 5-week',
      weeks: WK_LABELS,
      data: [2.3, 2.5, 2.8, 3.1, 3.4],
      color: '#2a4fa8',
      coachingWeekIndex: 1,
    },
    driversTable: {
      columns: ['Signal', 'Detail'],
      rows: [
        { a: 'Combined driver', b: 'Rate Class / Bill Impact + Billing & Fee Dispute · 34.0% of weekly volume, 1,088 contacts' },
        { a: 'Coaching deployed', b: 'Week 2, cards 1 and 2 (open with the account, let the dispute set the tone) to all ten agents' },
        { a: 'Auto-fail outcomes', b: '16 → 9 → 11 → 8 → 11 across the period, uneven, not a clean decline' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 2',
    headline: 'A missed billing cycle: passes QA, then CSAT collapses on the back-bill',
    body: 'Only 3.0% of contacts (Missing Bill / Account Reconciliation), but the sharpest single CSAT collapse in the taxonomy - the lowest FCR (41%) and highest escalation rate (24%) of any driver.',
    rootCause:
      'This pattern is grounded directly in a real Google review: eight months with no bill sent, service then cut off for non-payment, followed by an unexplained CA$1,800 back-bill. The first contact scored CSAT 3 and QA 90% - the agent confirmed the gap existed. The second and third contacts, once the CA$1,800 figure landed, scored CSAT 1 with QA still at 84-86%. This is a register and route-forward gap, not a process failure on the reconciliation itself - the number was accurate, but nothing in the first contact set the customer up for what was coming. At 3% of contacts, a QA sample sized for the average will rarely see this tail.',
    trend: {
      title: 'Missing-bill incident CSAT · contact sequence',
      weeks: ['Contact 1', 'Contact 2', 'Contact 3'],
      data: [3, 1, 1],
      color: '#c0392b',
    },
    driversTable: {
      columns: ['Contact', 'Detail'],
      rows: [
        { a: 'Contact 1 · gap confirmed', b: 'CSAT 3 · QA 90% · voice' },
        { a: 'Contact 2 · CA$1,800 bill lands', b: 'CSAT 1 · QA 84% · voice' },
        { a: 'Contact 3 · customer follows up', b: 'CSAT 1 · QA 86% · messaging' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 3',
    headline: 'Fee-dispute contact volume leads a rise in Google review mentions of fees and policy',
    body: 'Internal fee-dispute volume spikes first (correlation 0.69). Google review mentions tagged ‘fees’ and ‘policy’ on Apex’s own Business Profile follow 9 days later.',
    rootCause:
      'Billing & Fee Dispute Escalations contacts closing with no resolution path sit at 31%, and repeat contact rate on this cohort is 29% against a 21.2% overall average - customers calling back because the dispute was never actually settled. The same theme is corroborated externally: Apex’s own 2.5-star, 52-review Google Business Profile carries ‘fees’ and ‘policy’ among its topic tags, and review mentions of fee/policy complaints rose from 1 to 4 in the same week the internal contact spike began, 9 days behind it. The weekly mention counts are modelled, scaled to the small size of a 52-review profile rather than a high-volume consumer brand’s review corpus - the rating and the theme tags are real, the week-by-week cadence is not.',
    trend: {
      title: 'External fee/policy mentions · this week vs prior',
      weeks: ['Prior week', 'This week'],
      data: [1, 4],
      color: '#c0392b',
    },
    driversTable: {
      columns: ['Signal', 'Detail'],
      rows: [
        { a: 'Internal', b: '31% closed with no resolution path · 29% repeat contact rate on this cohort' },
        { a: 'External mentions', b: '4 this week, up from 1 the week prior' },
        { a: 'Correlation and lag', b: '0.69 correlation · external mentions lag the internal spike by 9 days' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 4',
    headline: 'System Betterment construction notifications: a process gap, not a behavioural one',
    body: '256 System Betterment contacts weekly; 158 are avoidable, created by a notification-timing gap between engineering and customer comms, not by agent behaviour.',
    rootCause:
      'This is a cross-team coordination gap between engineering scheduling, customer notifications, and the contact centre, grounded in Apex’s confirmed 2025 System Betterment Program work in the Towns of High Level and Hanna and Sturgeon County. Only 61% of customers recall receiving advance notice before a crew arrived, and the average gap between a notice going out and work starting is 4.2 days - often too short to register before a crew shows up. It will not respond to Micro Coaching - this is the storyline that keeps the rest of the demo honest, and it stays open here, not folded into a coaching win.',
    trend: {
      title: 'System Betterment · weekly contact volume',
      weeks: WK_LABELS,
      data: [244, 250, 261, 268, 256],
      color: '#d97706',
    },
    driversTable: {
      columns: ['Item', 'Detail'],
      rows: [
        { a: 'Root cause', b: 'Notification timing gap between engineering scheduling and customer comms' },
        { a: 'Avoidable volume', b: '158 weekly contacts, 61% of this driver' },
        { a: 'Owner', b: 'Engineering scheduling + customer communications, not agent behaviour - not a coaching fix' },
      ],
    },
  },
]

export const HERO_CHIPS = [
  {
    text: 'CSAT 2.3 on follow-up vs 4.3 first contact',
    className: 'chip-red',
    dotColor: '#fca5a5',
  },
  {
    text: 'QA still 88.0% on follow-up contacts',
    className: 'chip-amber',
    dotColor: '#fbbf24',
  },
  {
    text: 'Team QA averages 87.4% - looks healthy',
    className: 'chip-green',
    dotColor: '#4ade80',
  },
]

/**
 * Briefing header + hero narrative. This is exactly the content
 * qiq-content-writer generates per client (see qiq-story-architect's Step 5,
 * "hero narrative arc"). This demo uses illustrative, synthetic data.
 */
export const BRIEFING_TITLE = 'Apex Utilities Intelligence Briefing'

export const HERO_CONTENT = {
  subtitleSuffix: 'Quality scoring said this period was fine. It was not, and this is where the two views separate.',
  eyebrow: 'QiQ Weekly Intelligence · Week 5 of 5',
  headline: 'The bill disputes were already a problem. The rate change just landed on top of them.',
  paragraphs: [
    'Billing and fee disputes, including the wave of Rate Class / Bill Impact Questions triggered by the August 1 Phase 2 rate restructuring, are 34% of Apex’s weekly contact volume combined, and independently evidenced on Apex’s own public Google reviews: a 2.5-star profile with recurring complaints about disproportionate fees and rude phone handling, not a hypothesis. Most of these contacts start as a first call that resolves cleanly - first-contact CSAT is 4.3. The pattern breaks on the callback: continuation CSAT for the same customers drops to 2.3, and repeat-contact rate for this cohort has climbed from 17.5% to 22.6% over five weeks.',
    'Micro Coaching targeting clarity-of-communication and ownership on repeat contacts was applied from week 2; continuation CSAT begins recovering (2.3 to 3.4 by week 5). Two things this doesn’t fix: the rare but severe case of an account falling through the billing cracks entirely (one real customer went 8 months unbilled, then received an unexplained CA$1,800 back-bill), and the System Betterment construction-notification gap, a cross-team process issue between engineering scheduling and customer comms that behavioural coaching alone won’t close. One genuine bright spot worth keeping in the story: Apex’s field emergency-response team is already a strength, not a weakness - the same public reviews that complain about billing separately praise named technicians for fast, professional gas-leak response. The damage is concentrated in the phone/billing side of the house, not the field side.',
  ],
  /**
   * The one-line "what actually moved" summary under the hero narrative.
   */
  wow:
    'Continuation-cohort CSAT 2.3 → 3.4 since coaching · continuation QA held flat at 88.0% throughout · auto-fail contacts 16 → 9 → 11 → 8 → 11, down from the week-1 peak but not a clean line',
  /**
   * The "how to read these charts" note above the KPI grid.
   */
  readingNote:
    'Micro Coaching deployed in week 2, marked on every chart below. Continuation-cohort CSAT responds directly to coaching and has climbed every week since. Auto-fail contacts fell from their week-1 peak but have not settled into a clean downward line, still 11 in week 5. The rest are blended, population-wide KPIs across all 3,200 weekly contacts; they are flat or still deteriorating, which is what four weeks of coaching on a specific agent cohort should look like at this stage. Judge the intervention on continuation CSAT now, and on auto-fails and repeat contact rate next quarter.',
}

/**
 * Per-tile labels and framing for the Operations Snapshot KPI grid.
 */
export const KPI_TILE_META = {
  csat: { label: 'CSAT', colour: 'amber' },
  criticalFailures: {
    label: 'Auto-fail contacts',
    target: 'Peak: 16 in week 1',
    changeText: 'W1 16 → W5 11. Down from the peak, not a clean decline',
    varianceDirection: 'down',
    colour: 'amber',
    drillLabel: 'View auto-fail contacts →',
  },
  rcr: { label: 'Repeat contact rate', changeText: 'Blended, all contacts', colour: 'red' },
  escalation: {
    label: 'Escalation rate',
    changeText: 'Billing/fee dispute and missing-bill drag',
    colour: 'amber',
  },
  aht: { label: 'AHT', changeText: 'Voice + messaging blended', colour: 'green' },
  // Labelled "first contact" deliberately: this is the share of contacts
  // resolved on the FIRST attempt with no repeat. It is a different measure
  // from Quality Overview's "Call Resolution Rate", which is the share of
  // contacts resolved eventually. Both are correct and they do not agree by
  // design - see qualityConstants.METRIC_CARD_NOTES.
  fcr: {
    label: 'First contact resolution',
    changeText: 'Resolved on first attempt, no repeat · dispute-resolution drag',
    colour: 'red',
  },
  transfer: { label: 'Transfer rate', changeText: 'Above target', colour: 'amber' },
  nps: { label: 'NPS', changeText: 'Blended, all contacts', colour: 'amber' },
}

/**
 * Root-cause analysis + performance drivers per KPI, shown in the metric
 * drill-down modal.
 */
export const METRIC_ROOT_CAUSE = {
  csat: {
    rootCause:
      'Blended CSAT is being pulled down by follow-up contacts on Rate Class / Bill Impact Questions and Billing & Fee Dispute Escalations. Customers reaching a second agent on the same unresolved dispute rate the experience 2.3 on average, against 4.3 on the first contact, because the agent has no visibility into what already happened.',
    drivers: [
      { a: 'Rate Class / Bill Impact + Billing & Fee Dispute', b: 'Continuation contacts scoring 2.3 CSAT vs 4.3 on first contact' },
      { a: 'Missing Bill / Account Reconciliation', b: '31% of Billing & Fee Dispute contacts closed with no resolution path for the customer' },
      { a: 'Micro Coaching', b: 'Continuation-cohort CSAT 2.3 → 3.4 since week 2 · auto-fails down from peak but still uneven' },
    ],
  },
  rcr: {
    rootCause:
      'Contacts that pass every scorecard question and still leave the customer unresolved come back within the week. The repeat is concentrated in Billing & Fee Dispute Escalations and Rate Class / Bill Impact Questions, where the first contact explains the charge but not to the customer’s satisfaction.',
    drivers: [
      { a: 'Rate Class / Bill Impact + Billing & Fee Dispute', b: 'Largest combined driver at 34.0% of weekly volume' },
      { a: 'Billing & Fee Dispute Escalations', b: '29% repeat contact rate on this cohort vs 21.2% overall' },
      { a: 'Missing Bill / Account Reconciliation Issues', b: 'Smaller volume, highest escalation rate at 24%' },
    ],
  },
  escalation: {
    rootCause:
      'Escalations concentrate on Missing Bill / Account Reconciliation Issues (24% escalation rate) and Billing & Fee Dispute Escalations (17%), where customers push past first-line replies once a dispute or a surprise bill has already damaged trust.',
    drivers: [
      { a: 'Missing Bill / Account Reconciliation Issues', b: '24% escalation rate, the highest of any category' },
      { a: 'Billing & Fee Dispute Escalations', b: '17% escalation rate, second highest' },
      { a: 'Rate Class / Bill Impact Questions', b: '10% escalation rate, driven by the August rate-class change' },
    ],
  },
  aht: {
    rootCause:
      'Handle time runs longest on gas-emergency response, which requires a full safety protocol, and on Missing Bill / Account Reconciliation Issues, where agents have to manually reconstruct an unbilled account history.',
    drivers: [
      { a: 'Gas Emergency / No-Heat / Leak Response', b: 'Highest AHT driver, avg 520s, by design given the safety protocol' },
      { a: 'Missing Bill / Account Reconciliation Issues', b: 'avg 540s' },
      { a: 'Billing & Fee Dispute Escalations', b: 'avg 460s' },
    ],
  },
  fcr: {
    rootCause:
      'FCR drops hardest in categories where the agent needs a billing-team review or a case investigation before they can close the loop with the customer on the first attempt.',
    drivers: [
      { a: 'Missing Bill / Account Reconciliation Issues', b: '41% FCR, requires a full account reconciliation before resolving' },
      { a: 'Billing & Fee Dispute Escalations', b: '51% FCR, often depends on a billing-team fee review' },
      { a: 'Rate Class / Bill Impact Questions', b: '60% FCR, depends on the rate-class determination' },
    ],
  },
  transfer: {
    rootCause:
      'Transfers cluster where the first agent cannot action the request themselves - fee waivers, rate-class corrections, and reconciliation cases all sit with a billing specialist team rather than the frontline.',
    drivers: [
      { a: 'Billing & Fee Dispute Escalations', b: 'Routed to the billing specialist team for fee review' },
      { a: 'Missing Bill / Account Reconciliation Issues', b: 'Routed for a full account reconciliation' },
      { a: 'System Betterment / Construction Project Notifications', b: 'Routed to engineering scheduling for confirmation' },
    ],
  },
  nps: {
    rootCause:
      'Detractors concentrate around the same two patterns driving CSAT down: follow-up contacts handled with no acknowledgement of the prior dispute, and Missing Bill / Account Reconciliation cases that land as a surprise.',
    drivers: [
      { a: 'Continuation contacts', b: 'Lowest-scoring group at 2.3 CSAT, direct target of Micro Coaching' },
      { a: 'Missing Bill / Account Reconciliation Issues', b: 'A surprise back-bill is the sharpest single detractor pattern found in research' },
      { a: 'System Betterment / Construction Project Notifications', b: 'Process gap, not addressed by coaching, stays a detractor source' },
    ],
  },
}
