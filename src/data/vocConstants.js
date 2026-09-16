/**
 * Cross-VOC page constants from story-spec.json. Apex is one-sided (B2C
 * utility) - "customer" for the demand side, "service request" for the
 * transaction, no supply-side content anywhere. This demo uses illustrative,
 * synthetic contact-centre data, but the external VOC below is real: Apex
 * Utilities Inc.'s own Google Business Profile (2.5 stars, 52 reviews, 10
 * read in full), found via a Google Search knowledge-panel listing. Storyline
 * 4 (System Betterment / Construction Project Notifications) is
 * coachable: false in story-spec.json - nothing below implies Micro Coaching
 * resolved or will resolve it. It stays an open process gap.
 */

/**
 * External review aggregate shown on Executive. Field names are generic
 * (platform / rating / label / reviewCount) so the page component does not
 * have to know which review site a given client is rated on.
 */
export const EXTERNAL_VOC = {
  platform: 'Google Business Profile',
  rating: 2.5,
  ratingScale: 5,
  label: 'Apex Utilities Inc. · Leduc, AB',
  reviewCount: 52,
  source: 'Google Business Profile knowledge panel for "Apex Utilities Inc.", reached via Google Search',
}

export const INTERNAL_VOC_STRIP = [
  {
    id: 'billing-fee-disputes',
    title: 'Rate Class / Bill Impact + Billing & Fee Dispute Escalations',
    theme: 'A billing or fee dispute opens cleanly, then the follow-up call, once the dispute is still unresolved, is handled as a fresh question rather than a continuation',
    volumeNote: 'Rate Class / Bill Impact Questions and Billing & Fee Dispute Escalations combine to 34.0% of weekly contacts, the largest pattern in the taxonomy',
    workaround: 'Customers calling back repeatedly and re-explaining the same dispute from scratch each time, because nothing on the account shows it was already raised.',
    evidence: 'One customer’s dispute sequence produces a first contact scoring CSAT 4 and QA 92%, then follow-up contacts scoring CSAT 2, 1, and 1 while QA still holds at 85-88%. The scorecard cannot see the second contact is the same unresolved dispute.',
    action: 'Micro Coaching card 1 (start where they left off) and card 2 (let the dispute set the tone) deployed to the whole team from week 2. Continuation-cohort CSAT has moved every week since, 2.3 to 3.4. Auto-fail outcomes are down from their week-1 peak of 16 to 11 by week 5, not yet a clean decline - a real early result, not a closed case.',
  },
  {
    id: 'missing-bill',
    title: 'Missing Bill / Account Reconciliation Issues',
    theme: 'An account falls through the billing cracks entirely for months, then lands a large back-bill with no advance warning on the call that delivers it',
    volumeNote: 'Missing Bill / Account Reconciliation Issues is only 3.0% of contacts, disproportionate severity - lowest FCR (41%) and highest escalation rate (24%) in the taxonomy',
    workaround: 'Customers disputing the reconciliation directly with a second and third call rather than accepting the corrected balance on the first explanation.',
    evidence: 'Grounded directly in a real Google review: eight months unbilled, service cut for non-payment, then an unexplained CA$1,800 back-bill. The first contact scores CSAT 3 and QA 90%; once the CA$1,800 figure lands, the next two contacts score CSAT 1 with QA still at 84-86%.',
    action: 'A named-owner-and-timeframe standard for reconciliation cases is queued for review (see Actions below). This is a rare but severe pattern - Micro Coaching addresses the tone of the delivery, not the billing gap itself.',
  },
  {
    id: 'system-betterment',
    title: 'System Betterment / Construction Project Notifications',
    theme: 'A construction crew arrives on a street before the resident has registered the advance notice, or before one reached them at all',
    volumeNote: 'System Betterment / Construction Project Notifications is 8.0% of contacts; 158 of 256 weekly contacts are avoidable',
    workaround: 'Customers calling the contact centre directly to ask about a crew already working outside, rather than the notification reaching them first.',
    evidence: 'Only 61% of customers recall receiving advance notice before a crew arrived, and the average gap between a notice going out and work starting is 4.2 days - grounded in Apex’s confirmed 2025 System Betterment Program work in the Towns of High Level and Hanna and Sturgeon County.',
    action: 'A notification-timing review between engineering scheduling and customer comms is queued for deployment (see Actions below). This is a process and coordination gap, not addressed by Micro Coaching.',
  },
  {
    id: 'field-response-strength',
    title: 'Gas Emergency / No-Heat / Leak Response is a genuine strength',
    theme: 'The field/dispatch side of Apex’s business is already working well, in direct contrast to the phone/billing side',
    volumeNote: 'Gas Emergency / No-Heat / Leak Response carries the highest FCR (91%) and one of the lowest escalation rates (3%) in the taxonomy',
    workaround: 'None - this is the pattern worth protecting, not fixing.',
    evidence: 'Two of the ten Google reviews read in full are 5-star praise naming individual field technicians by name for a fast, professional gas-leak response. The damage found in this research is concentrated in the phone/billing side of the house, not the field side.',
    action: 'No coaching or process action needed here - flagged so the rest of this briefing reads as an honest account of where Apex is strong, not only where it is struggling.',
  },
  {
    id: 'intent',
    title: 'Customers Escalating Past the First Line',
    theme: 'Customers pushing past a first-line reply once a billing dispute or an unbilled-account correction has already cost them trust',
    volumeNote: 'Escalation rate 7.2% blended vs 4.0% target',
    workaround: 'Customers asking directly for a supervisor or threatening to file a complaint with the Alberta Utilities Commission when the standard explanation doesn’t land.',
    evidence: 'Escalation rate is highest on Missing Bill / Account Reconciliation (24%) and Billing & Fee Dispute Escalations (17%), the two drivers where a customer is most exposed to a charge they did not expect and cannot independently verify.',
    action: 'Tracked alongside the billing-dispute and missing-bill fixes above. As route-forward closes become standard, escalations driven by dead-end first-line replies are expected to ease.',
  },
]

export const EXTERNAL_VOC_STRIP = [
  {
    id: 'rude-staff',
    title: 'Rude or Unhelpful Call-Centre Staff',
    summary: 'Recurring across 4 of 10 reviews read, both as the direct subject of the review and as an aside inside billing complaints.',
    evidence: '"Every time I call the customer service number to get help with my account I always encounter a rude service agent that acts as though I am inconveniencing them." (Google review, M L, 1 star) · "This is by far the rudest, most incompetent customer service I have ever dealt with. They lie to you." (Google review, Jules Sommer, 1 star)',
    action: 'Directly corroborates the billing/fee dispute register-matching gap above - Micro Coaching card 2 (let the dispute set the tone) targets this pattern.',
  },
  {
    id: 'billing-fees',
    title: 'Billing and Fee Disputes',
    summary: 'Recurring across 4 of 10 reviews read, often with specific dollar figures.',
    evidence: '"I have used $488 worth of gas and been charged $3143 in fees!!! 86.5% of the bills are fees. That\'s unacceptable." (Google review, Jules Sommer, 1 star) · "Despite 0 GJ usage for a vacant property, they bill out 1.567/day for distribution charge." (Google review, Mike Kruger, 1 star)',
    action: 'The single best-evidenced pattern in this research - anchors storyline 1 directly, alongside the real August 1 Phase 2 rate-change trigger.',
  },
  {
    id: 'budget-billing',
    title: 'Budget Billing (Equalization Plan) Confusion',
    summary: 'Directly evidenced, not just FAQ-inferred - a customer describes the plan changing without notice three times in one year.',
    evidence: '"they are the ones that set it up, change it without notice or consultation then drop a 600 dollar bill on you saying you aren\'t paying enough" (Google review, Ken Neuts, 1 star)',
    action: 'Corroborates the internal Budget Billing driver (13.0% of weekly volume) - flagged for a proactive recalculation-notice fix, tracked alongside the billing-dispute work.',
  },
  {
    id: 'missing-bill-review',
    title: 'Missing Bills, Then a Surprise Back-Bill',
    summary: 'One detailed account: eight months with no bill sent, then an unexplained CA$1,800 lump-sum bill after service was cut.',
    evidence: '"They did not send us bills for 8 months ... now they sent us after a month of inquiry a $1800 plus bill!!!" (Google review, Marianne Volk, 1 star)',
    action: 'Directly grounds storyline 2 (An account falls through the billing cracks). Rare, but the sharpest single CSAT collapse of any pattern found in this research.',
  },
  {
    id: 'field-response',
    title: 'Field Emergency Response Is a Genuine Strength',
    summary: 'A positive finding, not a complaint - 2 of 10 reviews read are 5-star praise naming individual field technicians for fast, professional gas-leak response.',
    evidence: '"Someone called me within minutes letting me know a tech would arrive within 30 mins. John and Layla ... went above and beyond." (Google review, Alana Shilleto, 5 stars)',
    action: 'Worth protecting, not fixing - the contrast with the phone/billing side is part of the story, not incidental to it.',
  },
]

/**
 * Issues that show up in both the internal contact data and the external
 * Google Business Profile signal, shown together on Executive as one
 * clickable card.
 */
export const COMBINED_VOC_ISSUES = {
  title: "Issues found in both signals, and what we're doing about them",
  items: [
    {
      id: 'billing-fee-disputes',
      title: 'Rate Class / Bill Impact + Billing & Fee Dispute Escalations',
      summary: 'Internal spike leads external fee/policy review mentions by 9 days at 0.69 correlation.',
      internal: '1,088 combined weekly contacts (34.0% of volume), 31% of Billing & Fee Dispute contacts closed with no resolution path, ownership behaviour scoring 2.4 on continuation. Root cause is disputed fees and rate-class confusion landing on top of the August 1 Phase 2 change.',
      external: 'External mentions of fee/policy complaints rose from 1 to 4 in the same week, 9 days after the internal spike began, and are corroborated by two direct quoted reviews describing disproportionate fees.',
      action: 'Micro Coaching cards 1 and 2 deployed team-wide from week 2 (see below). A billing-team fee-review fast-path for disputes over a threshold is queued for deployment (see Actions).',
      status: 'CSAT recovering · auto-fails down from peak but uneven · live team-wide since week 2',
    },
    {
      id: 'missing-bill',
      title: 'Missing Bill / Account Reconciliation Issues',
      summary: 'A rare but severe pattern, directly corroborated by a real customer account of an 8-month billing gap and a CA$1,800 back-bill.',
      internal: '96 Missing Bill / Account Reconciliation contacts weekly, 41% FCR (lowest in the taxonomy), 24% escalation rate (highest in the taxonomy).',
      external: 'External reviews name the same failure mode directly: eight months with no bill sent, followed by an unexplained CA$1,800 lump-sum bill after service was cut.',
      action: 'A named-owner-and-timeframe standard for reconciliation cases is queued for review. Micro Coaching addresses the tone of the delivery call, not the underlying billing gap.',
      status: 'Open · process review queued · coaching addresses tone only',
    },
    {
      id: 'system-betterment',
      title: 'System Betterment / Construction Project Notifications',
      summary: 'A process gap between engineering scheduling and customer comms - explicitly not addressed by coaching.',
      internal: '256 System Betterment contacts weekly, 158 avoidable, only 61% of customers recall advance notice, average 4.2-day gap between notice and work start.',
      external: 'Grounded in Apex’s confirmed 2025 System Betterment Program work in the Towns of High Level and Hanna and Sturgeon County - not directly evidenced in the reviews read, but a real, dated operational fact.',
      action: 'This is the storyline that keeps the rest of the demo honest: it will not respond to Micro Coaching. A notification-timing standard between engineering and customer comms is queued for review and stays open until it ships.',
      status: 'Open · process fix required · not a coaching item',
    },
  ],
}

export const SIGNAL_RECONCILIATION = [
  {
    title: 'Rate Class / Bill Impact + Billing & Fee Dispute Escalations',
    internal: 'Internal spike: 1,088 combined contacts this week, 31% of Billing & Fee Dispute contacts closed with no resolution path.',
    external: 'External mentions of fee/policy complaints rose from 1 to 4 in the same week.',
    meaning: 'Internal leads external by 9 days at correlation 0.69. The instruments agree; timing differs.',
  },
  {
    title: 'Missing Bill / Account Reconciliation',
    internal: 'Internal volume is low at 3.0% of contacts.',
    external: 'External severity is disproportionate: a CA$1,800 back-bill is the sharpest single CSAT collapse found in this research.',
    meaning: 'A QA sample sized for the average never reaches this tail. Low volume is not low risk.',
  },
  {
    title: 'System Betterment construction notifications',
    internal: 'Internal volume is meaningful at 8.0% of contacts, 158 of them avoidable.',
    external: 'Not directly evidenced in the reviews read, but corroborated by Apex’s own confirmed 2025 program schedule.',
    meaning: 'This is the one signal that agrees on process cause and volume - and the one that will not move with coaching.',
  },
]

export const RISK_REGISTER = [
  {
    risk: 'Continuation failure on billing and rate-class disputes',
    evidence: 'First-contact CSAT 4.3 vs continuation 2.3; QA still 88.0% on continuation',
    confidence: '90%',
    owner: 'CCM + Team Leads',
  },
  {
    risk: 'Billing & Fee Dispute contacts closed without a route forward',
    evidence: '31% of Billing & Fee Dispute contacts closed with no resolution path; external mention lag 9 days',
    confidence: '85%',
    owner: 'Billing specialist team',
  },
  {
    risk: 'Missing-bill / reconciliation tail invisible to QA sampling',
    evidence: '3.0% contact share vs 24% escalation rate, the highest of any category',
    confidence: '84%',
    owner: 'Billing operations + Quality',
  },
  {
    risk: 'System Betterment notification timing has no single owner',
    evidence: '8.0% of contacts, 158 avoidable weekly, 61% advance-notice recall - not addressable by coaching',
    confidence: '82%',
    owner: 'Engineering scheduling + Customer communications',
  },
]

export const ACTION_AGENDA = [
  {
    rank: 1,
    title: 'Billing-team fee-review fast-path for disputes over a threshold',
    detail: 'Route disputed-fee contacts above a set dollar threshold directly to a billing specialist on the first call, so customers stop needing repeat calls to get a resolution.',
    estimateLabel: 'Estimate',
  },
  {
    rank: 2,
    title: 'Keep the four Micro Coaching cards mandatory team-wide',
    detail: 'Start where they left off, let the dispute set the tone, name who has it and when, count the chasing.',
    estimateLabel: null,
  },
  {
    rank: 3,
    title: 'Named-owner-and-timeframe standard for reconciliation cases',
    detail: 'No Missing Bill / Account Reconciliation close without a named owner and a timeframe when a balance correction is involved.',
    estimateLabel: null,
  },
  {
    rank: 4,
    title: 'Notification-timing review for System Betterment construction work',
    detail: 'Process fix between engineering scheduling and customer communications - explicitly not a coaching fix.',
    estimateLabel: null,
  },
]

/**
 * Storyline 3 - internal signal leads external. Modelled/illustrative
 * weekly mention counts scaled to the small size of a 52-review profile;
 * the rating and topic tags are real.
 */
export const STORYLINE_3 = {
  correlation: 0.69,
  lagDays: 9,
  internalContacts: 1088,
}

/**
 * Storyline 4 is coachable: false in story-spec.json. No coaching-outcome
 * language appears here or anywhere else this storyline is referenced.
 */
export const STORYLINE_4 = {
  contactsWeekly: 256,
  avoidableContactsWeekly: 158,
  advanceNoticeRecallPct: 61,
  avgDaysBetweenNoticeAndWorkStart: 4.2,
  coachable: false,
}

/**
 * Detail behind each Executive "Actions" card, keyed by id and shown in the
 * centred drill-down modal when a card is clicked.
 */
export const ACTION_DETAILS = {
  'decide-scale-coaching': {
    tone: 'red',
    type: 'System',
    chip: 'CSAT 2.3 → 3.4',
    category: 'Decide now',
    title: 'Keep Micro Coaching mandatory for every agent on continuation contacts',
    summary:
      'All ten agents carried auto-fails on the same pattern, so the start-where-they-left-off and let-the-dispute-set-the-tone cards were rolled out team-wide from week 2, not held to the agents who surfaced it first. The decision now is to keep it a standing requirement, not a one-off pilot.',
    rationale:
      'Sipho van der Merwe carried the most auto-fails on the team, with Kagiso Radebe and Vusi Jacobs close behind. All three scored close to the team QA average while CSAT sat well below it on the same contacts. The underlying pattern, treating a follow-up dispute contact as a fresh call, showed up across the whole team, so the fix was built team-wide from the start.',
    owner: 'CCM + Team Leads',
    timeline: 'Live team-wide since week 2, this decision is whether it stays a permanent standard',
    impact: 'Continuation-cohort CSAT already 2.3 → 3.4 across the team. Keeping it mandatory is what holds that line as dispute volume grows through the rate-change season; auto-fail volume has fallen from its week-1 peak but has not settled into a clean line yet, which is the reason to keep it running rather than declare it done.',
    kpis: ['CSAT', 'Auto-fail contacts', 'Continuation contacts'],
  },
  'decide-billing-fastpath': {
    tone: 'amber',
    type: 'Process',
    chip: '31% closed with no route',
    category: 'Decide now',
    title: 'No Billing & Fee Dispute close without a named owner and timeframe',
    summary:
      'Set a process standard: a Billing & Fee Dispute Escalation contact cannot be marked resolved unless the closing note names who owns the next step and by when.',
    rationale:
      '31% of Billing & Fee Dispute contacts close with no resolution path for the customer. Internal mentions of fee/policy complaints lead the same complaint on Apex’s Google reviews by 9 days at 0.69 correlation. A named-owner standard closes that loop before it reaches a public review.',
    owner: 'Billing specialist team',
    timeline: 'Process standard proposed for new closures from week 6, alongside the fee-review fast-path',
    impact: 'Expected to reduce the external-review lag on fee/policy complaints and cut the 29% repeat contact rate on this cohort.',
    kpis: ['Escalation rate', 'Repeat contact rate', 'External VOC'],
  },
  'ready-fee-fastpath': {
    tone: 'amber',
    chip: '512 contacts/wk',
    category: 'Ready to execute',
    title: 'Billing-team fee-review fast-path for disputes over a threshold',
    summary:
      'Route disputed-fee contacts above a set dollar threshold directly to a billing specialist on the first call, instead of a frontline agent explaining a charge they cannot adjust.',
    rationale:
      '512 Billing & Fee Dispute Escalations contacts weekly, and the two real quoted Google reviews naming specific dollar figures show the pattern is not edge-case - it is the single best-evidenced complaint in this research.',
    owner: 'Billing specialist team',
    timeline: 'Ready to scope, awaiting go-ahead',
    impact: 'Modelled to reduce the 29% repeat contact rate on this cohort and shorten the 9-day lag before the same gap surfaces in public reviews.',
    kpis: ['FCR', 'Repeat contact rate', 'External VOC'],
  },
  'ready-coaching-scale': {
    tone: 'amber',
    chip: 'High',
    category: 'Ready to execute',
    title: 'Extend the route-forward standard to Missing Bill / Account Reconciliation closures',
    summary:
      'The same root cause, a customer left without a named next step, shows up hardest on Missing Bill / Account Reconciliation closures. The route-forward card already in the pack is the next application.',
    rationale:
      'Continuation-contact coaching is live team-wide and moving CSAT. Missing Bill / Account Reconciliation Issues carries its own version of the same gap at the highest escalation rate in the taxonomy (24%) and the lowest FCR (41%).',
    owner: 'CCM + Team Leads',
    timeline: 'Card content follows the same production format already validated on the current pack; ready to build once prioritised',
    impact: 'High expected impact on Missing Bill CSAT and the 24% escalation rate on that driver, the measure the current pack does not fully touch.',
    kpis: ['CSAT', 'Escalation rate'],
  },
  'ready-notification-timing': {
    tone: 'amber',
    chip: '158 avoidable/wk',
    category: 'Ready to execute',
    title: 'Notification-timing review for System Betterment construction work',
    summary:
      'System Betterment / Construction Project Notifications contacts crop up when advance notice doesn’t reach a customer before a crew arrives. Set a minimum lead time and confirm delivery before crews are scheduled. This is explicitly not a coaching fix - storyline 4 is coachable: false.',
    rationale:
      'Only 61% of customers recall receiving advance notice, and the average gap between notice and work start is 4.2 days - often too short to register. This is grounded in Apex’s own confirmed 2025 program work.',
    owner: 'Engineering scheduling + Customer communications',
    timeline: 'Can start immediately, no engineering redesign needed, but requires cross-team process agreement',
    impact: 'Directly addresses the 158 weekly avoidable contacts on this driver; will not move CSAT on this category through coaching, only through the process fix.',
    kpis: ['FCR', 'Repeat contact rate', 'External VOC'],
  },
  'watch-auto-fails': {
    tone: 'amber',
    category: 'Watch next week',
    title: 'Auto-fail contacts and continuation CSAT trend',
    summary: 'Confirm auto-fail volume keeps trending down from its week-1 peak and continuation CSAT keeps climbing now that coaching is standard across the whole team.',
    rationale:
      'CSAT has been recovering since week 2; auto-fail volume fell from its week-1 peak of 16 to 11 by week 5, but the path between is uneven (9, 11, 8, 11). The real test is whether auto-fails settle into a clean decline as coaching moves from a new habit to routine practice.',
    owner: 'CCM + Team Leads',
    timeline: 'Reviewed weekly',
    impact: 'A cleaner auto-fail trend here is the leading confirmation that the coaching fix is holding at team-wide scale, not just moving the metric that responds fastest.',
    kpis: ['Auto-fail contacts', 'CSAT'],
  },
  'watch-csat': {
    tone: 'amber',
    category: 'Watch next week',
    title: 'Blended CSAT vs target',
    summary: 'Population-wide CSAT is still below target while the continuation cohort recovers. Expect this gap to close gradually as the fix compounds week over week.',
    rationale:
      'Blended CSAT averages across all 3,200 weekly contacts. Continuation contacts, the ones coaching directly targets, are only 24% of that volume. It is expected to lag the continuation-contact recovery by design - this is the population-level metric that should move as more weeks of coaching accumulate.',
    owner: 'CCM + Team Leads',
    timeline: 'Reviewed weekly, expected to start closing gradually',
    impact: 'Primary population-level success measure for the coaching effort once enough weeks have accumulated.',
    kpis: ['CSAT'],
  },
  'watch-system-betterment': {
    tone: 'red',
    category: 'Watch next week',
    title: 'System Betterment notification volume, unresolved by coaching',
    summary: '256 System Betterment contacts weekly, 158 of them avoidable, stay open until the notification-timing fix ships. This is the storyline that keeps the rest of the demo honest.',
    rationale:
      'No coaching intervention touches this driver. Volume is expected to hold flat or rise as construction work continues until a minimum notice-lead-time standard is in place.',
    owner: 'Engineering scheduling + Customer communications',
    timeline: 'Loss compounds weekly until the notification-timing fix above is agreed and shipped',
    impact: 'Directly avoidable only by the process fix, not by any coaching or QA intervention.',
    kpis: ['FCR', 'Repeat contact rate'],
  },
}

/**
 * Column order for the Executive "Actions" board.
 */
export const ACTION_BOARD_COLUMNS = ['Decide now', 'Ready to execute', 'Watch next week']
