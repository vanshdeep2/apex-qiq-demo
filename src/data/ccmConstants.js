/** This demo uses illustrative, synthetic data - Apex Utilities has not shared operational data with QiQ. */
import { MICRO_COACHING_CARDS } from './agents'
import { AGENT_METRICS, FLAGGED_AGENT_SLUGS } from './agentMetrics'
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
  headline: 'Continuation-cohort CSAT is recovering. Auto-fail QA outcomes relapsed in week 3 before falling, so the decline is only two weeks old.',
  body: 'Per-contact QA sat at 87.4% team-wide and barely moved. Underneath it, 50 contacts auto-failed this period, most of them follow-ups on a billing or rate-class dispute that was already open. Coaching the whole team from week 2 moved continuation-cohort CSAT from 2.0 to 2.9. Auto-fails went 14, 12, back to 14 in week 3, then 8 and 2, which is the honest signal that this is a real early result, not a solved problem.',
  paragraphs: [
    { lead: 'What we found', text: 'Follow-up contacts on billing and rate-class disputes pass QA at 88.0% and still collapse CSAT to 2.3, against 4.3 on the first contact - a gap per-contact scoring cannot see.' },
    { lead: 'Why the scorecard missed it', text: 'The scorecard judges each contact in isolation. It never asks whether this is the second or third time the customer has called about the same unresolved dispute.' },
    { lead: 'What we changed', text: 'Micro Coaching cards 1 and 2 (start where they left off, let the dispute set the tone) deployed team-wide from week 2, built from each agent’s own auto-fail evidence.' },
    { lead: 'What has not moved yet', text: 'Auto-fail contacts were back at their week-1 level (14) in week 3 and only fell after that, to 2 in week 5. Two good weeks is not yet a trend. Continuation CSAT is the clearer early win.' },
  ],
  firstVsContinuation: FIRST_VS_CONTINUATION,
}

export const COACHING_HEALTH_STATS = [
  { label: 'Micro Coaching cards deployed', value: '4', valueClass: '', sub: 'Per agent, from their own contacts' },
  { label: 'Agents taking up', value: '10/10', valueClass: 'val-amber', sub: 'Team-wide since week 2' },
  { label: 'Auto-fails W5', value: String(CRITICAL_FAILURES.currentWeek), valueClass: 'val-amber', sub: `Down from ${CRITICAL_FAILURES.peakWeek} in weeks 1 and 3` },
  { label: 'Continuation QA', value: '88.0%', valueClass: 'val-amber', sub: 'Flat all period, CSAT recovering 2.0 → 2.9' },
]

export const HERO_CHIPS = [
  { text: 'Continuation CSAT 2.0 → 2.9 since coaching', className: 'chip-green', dotColor: '#4ade80' },
  { text: 'Ownership 4.2 → 2.4 on continuation', className: 'chip-red', dotColor: '#fca5a5' },
  { text: 'QA still 88.0% on continuation, auto-fails uneven', className: 'chip-amber', dotColor: '#fbbf24' },
]

export const HERO_STATS = [
  { value: `${CRITICAL_FAILURES.weekly[0]} → ${CRITICAL_FAILURES.currentWeek}`, label: 'Auto-fails across the coaching period, uneven not monotonic' },
  { value: '88.0%', label: 'Continuation QA, flat all period' },
  { value: '2.3', label: 'CSAT vs 4.3 first contact' },
  { value: 'Week 2', label: 'Micro Coaching deployment start' },
  { value: String(CRITICAL_FAILURES.totalThisPeriod), label: 'Auto-fail contacts found by quality mining, full period' },
]

const TOP_A = AGENT_METRICS[FLAGGED_AGENT_SLUGS[0]]
const TOP_B = AGENT_METRICS[FLAGGED_AGENT_SLUGS[1]]

export const QUALITY_SUMMARY = [
  { value: `${TOP_A.name}: ${TOP_A.qaScore.toFixed(1)}% QA · ${TOP_A.criticalFailures} auto-fails`, label: TOP_B.criticalFailures === TOP_A.criticalFailures ? 'Joint-highest auto-fail count on the team' : 'Highest auto-fail count on the team' },
  { value: `${TOP_B.name}: ${TOP_B.qaScore.toFixed(1)}% QA · ${TOP_B.criticalFailures} auto-fails`, label: 'Same pattern, same coaching cards' },
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

/**
 * Ledger rows read counts, series and trend text from AGENT_METRICS (the
 * dataset), so they cannot go stale when the contacts are regenerated.
 * Same thresholds as teamleadConstants.statusOf (8+ auto-fails = Action Needed,
 * 5+ = Watch), so the ledger badge always agrees with the agent matrix.
 */
function ledgerAgent(slug) {
  const m = AGENT_METRICS[slug]
  const s = m.criticalFailureSeries
  return {
    m,
    agent: m.name,
    issue: `${m.criticalFailures} auto-fails with QA ${m.qaScore.toFixed(1)}%`,
    series: `Auto-fails ${s.join(' · ')}`,
    trend: s[4] < s[0] ? 'week 5 below week 1' : s[4] === s[0] ? 'week 5 level with week 1' : 'week 5 above week 1',
  }
}

const ledgerStatus = (m) =>
  m.criticalFailures >= 8
    ? { badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true }
    : m.criticalFailures >= 5
      ? { badges: [{ text: 'Watch', className: 'badge badge-amber' }] }
      : { badges: [{ text: 'Improving', className: 'badge badge-green' }] }

const LEDGER_TOP = FLAGGED_AGENT_SLUGS.slice(0, 4).map(ledgerAgent)
const LEDGER_IMPROVING = ledgerAgent('sipho-nkosi')
const LOWEST_CF = Math.min(...Object.values(AGENT_METRICS).map((x) => x.criticalFailures))
const LEDGER_BENCH = ledgerAgent(
  Object.keys(AGENT_METRICS)
    .filter((slug) => AGENT_METRICS[slug].criticalFailures === LOWEST_CF)
    .sort((x, y) => AGENT_METRICS[y].continuationCsat - AGENT_METRICS[x].continuationCsat)[0],
)

export const COACHING_LEDGER_ROWS = [
  ...LEDGER_TOP.map((L) => ({
    agent: L.agent,
    issue: L.issue,
    topic: 'Start Where They Left Off',
    deployed: 'Week 2 - Micro Coaching card 1',
    outcome: `${L.series}, ${L.trend}`,
    ...ledgerStatus(L.m),
  })),
  { agent: LEDGER_IMPROVING.agent, issue: `${LEDGER_IMPROVING.m.criticalFailures} auto-fails, first-contact strong`, topic: 'Micro Coaching suite', deployed: 'Week 2', outcome: `Weekly CSAT ${LEDGER_IMPROVING.m.csatSeries[0].toFixed(2)} → ${LEDGER_IMPROVING.m.csatSeries[4].toFixed(2)}`, badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: LEDGER_BENCH.agent, issue: `${Object.values(AGENT_METRICS).filter((x) => x.criticalFailures === LOWEST_CF).length > 1 ? 'Joint-lowest' : 'Lowest'} auto-fail count on the team (${LOWEST_CF})`, topic: 'Peer coaching source', deployed: 'Week 2', outcome: 'Modelling account-first opens', badges: [{ text: 'Benchmark', className: 'badge badge-trophy' }] },
]

export const COACHING_LEDGER_SUMMARY = [
  { text: `${COACHING_LEDGER_ROWS.length} agents in ledger`, className: 'summary-chip' },
  { text: `${COACHING_LEDGER_ROWS.filter((r) => r.badges.some((b) => b.text === 'Action Needed')).length} action needed`, className: 'summary-chip summary-chip-amber' },
  { text: `${COACHING_LEDGER_ROWS.filter((r) => r.badges.some((b) => b.text === 'Watch')).length} watch`, className: 'summary-chip summary-chip-amber' },
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
    body: 'After week-2 deployment, continuation-cohort CSAT rises every week, 2.0 to 2.9. Auto-fail QA outcomes did not follow the same clean line: 14 → 12 → 14 → 8 → 2, back to the week-1 level in week 3 before falling, which is the honest state of this intervention at week 5.',
    tags: [
      { text: 'CSAT +0.9', className: 'tag tag-green' },
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
    agents: `Agents: ${LEDGER_BENCH.agent} modelling · ${TOP_A.name} and ${TOP_B.name} coaching focus`,
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
      value: TREND_EXEC.csat[4].toFixed(1),
      valueClass: 'val-amber',
      sub: 'Target: 4.4 · week 5',
      change: `${(((TREND_EXEC.csat[4] - 4.4) / 4.4) * 100).toFixed(1)}% vs target`,
      changeClass: 'chg-amber',
      series: TREND_EXEC.csat,
      format: 'csat',
      color: '#1a7a4a',
      note: 'Blended CSAT across all contacts. It sat around 3.7 for four weeks and lifts only in week 5, as the continuation cohort that pulls it down recovers under Micro Coaching.',
    },
    {
      id: 'kpi-cf-drawer',
      label: 'Auto-Fail Contacts',
      value: String(CRITICAL_FAILURES.currentWeek),
      valueClass: 'val-amber',
      sub: `Peak: ${CRITICAL_FAILURES.peakWeek} in weeks 1 and 3`,
      change: 'Falling since week 3, not yet a settled trend',
      changeClass: 'chg-amber',
      series: CRITICAL_FAILURES.weekly,
      format: 'whole',
      color: '#d97706',
      note: 'Leading indicator of coaching impact, alongside continuation CSAT. Relapsed to its week-1 level in week 3 and has fallen since; two weeks is not yet a settled trend.',
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
