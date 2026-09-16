/** This demo uses illustrative, synthetic data - Apex Utilities has not shared operational data with QiQ. */
import { MICRO_COACHING_CARDS } from './agents'
import { CRITICAL_FAILURES, FIRST_VS_CONTINUATION, CONTINUATION_CSAT_RECOVERY, TREND as TREND_EXEC, WK_LABELS } from './executiveConstants'
import { formatAht } from '../utils/format'

export { WK_LABELS }
export const COACHING_WEEK_INDEX = 1

export const BEHAVIOUR_PILLAR = {
  clarity_of_communication: { first: 4.4, continuation: 3.6, label: 'Clarity of communication' },
  ownership_of_the_issue: { first: 4.2, continuation: 2.4, label: 'Ownership of the issue' },
  listening_and_responsiveness: { first: 4.3, continuation: 3.2, label: 'Listening and responsiveness' },
  professionalism_and_courtesy: { first: 4.6, continuation: 4.4, label: 'Professionalism and courtesy' },
  empathy_and_acknowledgement: { first: 4.3, continuation: 2.3, label: 'Empathy and acknowledgement' },
  managing_frustration: { first: 4.1, continuation: 2.5, label: 'Managing frustration' },
}

export const COACHING_EFFECT_CONTINUATION_CSAT = CONTINUATION_CSAT_RECOVERY.weekly
export const COACHING_EFFECT_CRITICAL_FAILURES = CRITICAL_FAILURES.weekly

export const MICRO_COACHING_ADOPTION = [
  { id: 'cc1', title: MICRO_COACHING_CARDS[0].title, deployed: 10, takenUp: 8, inProgress: 1, notTouched: 1 },
  { id: 'cc2', title: MICRO_COACHING_CARDS[1].title, deployed: 10, takenUp: 7, inProgress: 2, notTouched: 1 },
  { id: 'cc3', title: MICRO_COACHING_CARDS[2].title, deployed: 10, takenUp: 6, inProgress: 3, notTouched: 1 },
  { id: 'cc4', title: MICRO_COACHING_CARDS[3].title, deployed: 10, takenUp: 6, inProgress: 3, notTouched: 1 },
]

export const CCM_HERO = {
  headline: 'Continuation-cohort CSAT is recovering. Auto-fail QA outcomes have eased from their peak but have not settled into a clean line.',
  body: 'Per-contact QA sat at 87.4% team-wide and barely moved. Underneath it, 55 contacts auto-failed this period, most of them follow-ups on a billing or rate-class dispute that was already open. Coaching the whole team from week 2 moved continuation-cohort CSAT from 2.3 to 3.4. Auto-fail volume fell from a week-1 peak of 16 to 11 by week 5, but the path between (9, 11, 8, 11) is uneven, which is the honest signal that this is a real early result, not a solved problem.',
  paragraphs: [
    { lead: 'What we found', text: 'Follow-up contacts on billing and rate-class disputes pass QA at 88.0% and still collapse CSAT to 2.3, against 4.3 on the first contact - a gap per-contact scoring cannot see.' },
    { lead: 'Why the scorecard missed it', text: 'The scorecard judges each contact in isolation. It never asks whether this is the second or third time the customer has called about the same unresolved dispute.' },
    { lead: 'What we changed', text: 'Micro Coaching cards 1 and 2 (start where they left off, let the dispute set the tone) deployed team-wide from week 2, built from each agent’s own auto-fail evidence.' },
    { lead: 'What has not moved yet', text: 'Auto-fail contacts eased from their week-1 peak of 16 but sit at 11 in week 5, not a clean decline. Continuation CSAT is the clearer early win.' },
  ],
  firstVsContinuation: FIRST_VS_CONTINUATION,
}

export const COACHING_HEALTH_STATS = [
  { label: 'Micro Coaching cards deployed', value: '4', valueClass: '', sub: 'Per agent, from their own contacts' },
  { label: 'Agents taking up', value: '10/10', valueClass: 'val-amber', sub: 'Team-wide since week 2' },
  { label: 'Auto-fails W5', value: '11', valueClass: 'val-amber', sub: 'Down from 16 peak in week 1' },
  { label: 'Continuation QA', value: '88.0%', valueClass: 'val-amber', sub: 'Flat all period, CSAT recovering 2.3 → 3.4' },
]

export const HERO_CHIPS = [
  { text: 'Continuation CSAT 2.3 → 3.4 since coaching', className: 'chip-green', dotColor: '#4ade80' },
  { text: 'Ownership 4.2 → 2.4 on continuation', className: 'chip-red', dotColor: '#fca5a5' },
  { text: 'QA still 88.0% on continuation, auto-fails uneven', className: 'chip-amber', dotColor: '#fbbf24' },
]

export const HERO_STATS = [
  { value: '16 → 11', label: 'Auto-fails across the coaching period, uneven not monotonic' },
  { value: '88.0%', label: 'Continuation QA, flat all period' },
  { value: '2.3', label: 'CSAT vs 4.3 first contact' },
  { value: 'Week 2', label: 'Micro Coaching deployment start' },
  { value: '55', label: 'Auto-fail contacts found by quality mining, full period' },
]

export const QUALITY_SUMMARY = [
  { value: 'Sipho van der Merwe: 88.7% QA · 11 auto-fails', label: 'Highest auto-fail count on the team' },
  { value: 'Kagiso Radebe: 89.1% QA · 9 auto-fails', label: 'Same pattern, same coaching cards' },
  { value: 'Behaviour ownership 2.4', label: 'Biggest pillar gap on continuation' },
  { value: 'Micro Coaching uptake 10/10', label: 'Whole team on account-first opens since week 2' },
]

export const TREND = {
  aht: TREND_EXEC.aht,
  fcr: TREND_EXEC.fcr,
  csat: COACHING_EFFECT_CONTINUATION_CSAT,
  nps: [8, 9, 10, 10, 11],
  er: TREND_EXEC.esc,
}

export const T1_RESOLUTION = [75, 76, 77, 76, 75]
export const CF_WEEKLY = COACHING_EFFECT_CRITICAL_FAILURES
export const CF_BAR_COLORS = ['#c0392b', '#d97706', '#d97706', '#d97706', '#d97706']

export const COACHING_LEDGER_ROWS = [
  { agent: 'Sipho van der Merwe', issue: '11 auto-fails with QA 88.7%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Continuation CSAT trending up', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Kagiso Radebe', issue: '9 auto-fails with QA 89.1%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Continuation CSAT trending up', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Vusi Jacobs', issue: '7 auto-fails with QA 86.4%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Improving named owners on close', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Karabo Zulu', issue: '5 auto-fails with QA 87.3%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Uptake started on messaging', badges: [{ text: 'Watch', className: 'badge badge-amber' }] },
  { agent: 'Sipho Nkosi', issue: '5 auto-fails, first-contact strong', topic: 'Micro Coaching suite', deployed: 'Week 2', outcome: 'CSAT trending up', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Vusi Molefe', issue: 'Lowest auto-fail count on the team', topic: 'Peer coaching source', deployed: 'Week 2', outcome: 'Modelling account-first opens', badges: [{ text: 'Benchmark', className: 'badge badge-trophy' }] },
]

export const COACHING_LEDGER_SUMMARY = [
  { text: '6 agents in ledger', className: 'summary-chip' },
  { text: '3 action needed', className: 'summary-chip summary-chip-amber' },
  { text: '1 watch', className: 'summary-chip summary-chip-amber' },
  { text: '1 improving', className: 'summary-chip summary-chip-green' },
  { text: '1 benchmark', className: 'summary-chip summary-chip-trophy' },
]

export const PATTERN_CARDS = [
  {
    variant: 'red',
    title: 'Continuation failure invisible to per-contact QA',
    level: 'System level',
    body: 'CSAT 2.3 vs first-contact 4.3 while QA stays near 88%. Scorecards judge disputes in isolation. The account history is the instrument that sees the damage.',
    tags: [
      { text: 'CSAT -2.0', className: 'tag tag-red' },
      { text: 'QA flat', className: 'tag tag-amber' },
      { text: 'Beh -1.8', className: 'tag tag-red' },
    ],
  },
  {
    variant: 'amber',
    title: 'Billing & Fee Dispute contacts closed without a route forward',
    level: 'System level',
    body: '31% of Billing & Fee Dispute contacts close with no resolution path. Internal volume leads external Google review mentions by 9 days at correlation 0.69.',
    tags: [
      { text: 'ER elevated', className: 'tag tag-amber' },
      { text: '0.69 corr', className: 'tag tag-amber' },
      { text: '9-day lag', className: 'tag tag-amber' },
    ],
  },
  {
    variant: 'amber',
    title: 'Micro Coaching moves CSAT, auto-fails stay uneven',
    level: 'Team level - early result',
    body: 'After week-2 deployment, continuation-cohort CSAT rises every week, 2.3 to 3.4. Auto-fail QA outcomes eased from their week-1 peak of 16 but have not followed the same clean line, 9 → 11 → 8 → 11, which is the honest state of this intervention at week 5.',
    tags: [
      { text: 'CSAT +1.1', className: 'tag tag-green' },
      { text: '10/10 uptake', className: 'tag tag-amber' },
    ],
  },
  {
    variant: 'red',
    title: 'System Betterment notification timing is a process gap, not a behavioural one',
    level: 'System level - not coachable',
    body: '158 avoidable weekly contacts on construction notification timing, with only 61% of customers recalling advance notice. Will not respond to Micro Coaching.',
    tags: [
      { text: '158 avoidable', className: 'tag tag-amber' },
      { text: 'Not coachable', className: 'tag tag-red' },
    ],
  },
]

export const BEST_PRACTICE_CARDS = [
  {
    title: 'Open with what’s already on the account before the request',
    evidence: 'Evidence: continuation CSAT recovers when agents name the dispute history first · QA stays high either way',
    agents: 'Agents: Vusi Molefe modelling · Sipho van der Merwe and Kagiso Radebe coaching focus',
    rec: 'Recommendation: Make account-first open the default on contact_sequence > 1.',
  },
  {
    title: 'Never close a dispute without a named route forward',
    evidence: 'Evidence: Missing Bill / Account Reconciliation and Billing & Fee Dispute tails spike when closes leave customers without an owner or timeframe',
    agents: 'Agents: Vusi Jacobs coaching in progress',
    rec: 'Recommendation: Require owner + timeframe on every continuation close when a billing review blocks full resolution.',
  },
]

export function getMetricsDrawerSections() {
  return [
    {
      id: 'kpi-csat-drawer',
      label: 'CSAT',
      value: '3.4',
      valueClass: 'val-amber',
      sub: 'Target: 4.4',
      change: '-22.7% vs target',
      changeClass: 'chg-amber',
      series: TREND_EXEC.csat,
      format: 'csat',
      color: '#1a7a4a',
      note: 'Blended CSAT across all contacts. Micro Coaching is recovering the continuation cohort that pulls the blended figure down; the blended figure itself has not turned yet.',
    },
    {
      id: 'kpi-cf-drawer',
      label: 'Auto-Fail Contacts',
      value: '11',
      valueClass: 'val-amber',
      sub: 'Peak: 16 in week 1',
      change: 'Down from the peak, not a clean decline',
      changeClass: 'chg-amber',
      series: CRITICAL_FAILURES.weekly,
      format: 'whole',
      color: '#d97706',
      note: 'Leading indicator of coaching impact, alongside continuation CSAT. Has fallen from its peak but not settled yet.',
    },
    {
      id: 'kpi-rcr-drawer',
      label: 'Repeat Contact Rate',
      value: '21.2%',
      valueClass: 'val-red',
      sub: 'Target: 12%',
      change: 'Blended, all contacts',
      changeClass: 'chg-red',
      series: TREND_EXEC.rcr,
      format: 'pct',
      color: '#d97706',
      note: 'Population-wide KPI. Takes longer to turn than continuation CSAT after a cohort-level coaching fix.',
    },
    {
      id: 'kpi-esc-drawer',
      label: 'Escalation Rate',
      value: '7.2%',
      valueClass: 'val-amber',
      sub: 'Target: 4.0%',
      change: 'Billing/fee dispute and missing-bill drag',
      changeClass: 'chg-amber',
      series: TREND_EXEC.esc,
      format: 'pct',
      color: '#c0392b',
      note: 'Missing Bill / Account Reconciliation closures without a route forward keep escalation elevated.',
    },
    {
      id: 'kpi-aht-drawer',
      label: 'Average Handle Time',
      value: formatAht(380),
      valueClass: 'val-amber',
      sub: `Target: ${formatAht(320)}`,
      change: 'Voice + messaging blended',
      changeClass: 'chg-amber',
      series: TREND_EXEC.aht,
      format: 'aht',
      color: '#2a4fa8',
      note: 'First-contact AHT is longer than continuation as agents work through the full dispute or reconciliation.',
    },
    {
      id: 'kpi-fcr-drawer',
      label: 'First Contact Resolution',
      value: '68.5%',
      valueClass: 'val-red',
      sub: 'Target: 78%',
      change: 'Trending down across the period',
      changeClass: 'chg-red',
      series: TREND_EXEC.fcr,
      format: 'pct',
      color: '#1a7a4a',
      note: 'Blended FCR. Reconciliation resolution is not the same as dispute resolution.',
    },
    {
      id: 'kpi-transfer-drawer',
      label: 'Transfer Rate',
      value: '10.6%',
      valueClass: 'val-amber',
      sub: 'Target: 6%',
      change: 'Above target',
      changeClass: 'chg-amber',
      series: TREND_EXEC.transfer,
      format: 'pct',
      color: '#d97706',
      note: 'Transfers remain above target across the blended population.',
    },
    {
      id: 'kpi-nps-drawer',
      label: 'NPS',
      value: '14',
      valueClass: 'val-red',
      sub: 'Target: 35',
      change: 'Blended, all contacts',
      changeClass: 'chg-red',
      series: TREND_EXEC.nps,
      format: 'whole',
      color: '#2a4fa8',
      note: 'NPS tracks the same recovery lag as other population-wide experience metrics.',
    },
  ]
}
