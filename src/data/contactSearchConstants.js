import { AGENT_SLUGS } from './agents'

export { AGENT_SLUGS }

export const Q_NAMES = {
  q1: 'Resolution',
  q2: 'Diagnosis',
  q3: 'Efficiency',
  q4: 'Verification',
  q5: 'Escalation',
  q6: 'Expectation Setting',
  q7: 'Communication',
  q8: 'Callback',
  q9: 'Closing the Loop',
  q10: 'Customer Appreciation',
  q11: 'Case Notes',
  q12: 'Internal Process',
  q13: 'Business Policy',
  q14: 'Compliance',
}

export const PASS_FAIL_QS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q11']

export const DEFAULT_FILTERS = {
  agent: 'all',
  source: 'all',
  queue: 'all',
  week: 'all',
  resolution: 'all',
  dateFrom: '2026-08-03',
  dateTo: '2026-09-06',
  scoreFilter: 'all',
  criticalOnly: false,
}

export const WEEK_BOUNDARIES = [
  { start: '2026-08-03', end: '2026-08-09' },
  { start: '2026-08-10', end: '2026-08-16' },
  { start: '2026-08-17', end: '2026-08-23' },
  { start: '2026-08-24', end: '2026-08-30' },
  { start: '2026-08-31', end: '2026-09-06' },
]

export const SORTABLE_FIELDS = [
  'contact_id',
  'agent_name',
  'call_date',
  'call_category',
  'qa_score',
  'contact_sequence',
]

/**
 * Critical-failure quick links on Contact Search. Every id, agent name, and
 * category below was checked against the generated contact index - each
 * one resolves to a real contact whose agent and category match its label.
 */
export const CF_QUICK_LINKS = [
  { callId: 'APX-000801', agent: 'Kagiso Radebe', label: 'Billing and fee dispute escalation sequence' },
  { callId: 'APX-000805', agent: 'Karabo Zulu', label: 'Account falls through the billing cracks' },
  { callId: 'APX-000625', agent: 'Sipho Nkosi', label: 'Auto-fail · Budget Billing (Equalization Plan) Enrollment & Adjustments' },
  { callId: 'APX-000703', agent: 'Vusi Jacobs', label: 'Auto-fail · System Betterment / Construction Project Notifications' },
]
