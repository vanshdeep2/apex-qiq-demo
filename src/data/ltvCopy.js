/**
 * Apex Utilities is a one-sided (regulated monopoly, B2C) client - no
 * supply-side rows exist anywhere in this file.
 *
 * REFRAMED (per Vansh, 2026-09-15): Apex customers cannot switch gas
 * distributors - the Alberta Utilities Consumer Advocate confirms
 * distributor is set by location, not choice. Any "at risk of churning" /
 * "customers might leave" framing is factually wrong for this client,
 * unlike Rover/Kyndryl/BBB/Brooklinen, which all have real competitive
 * churn. So this panel uses avoidable cost-to-serve / relationship-quality-
 * risk language throughout, never churn or attrition language.
 *
 * churnUpliftPct (0.56%) is not a churn estimate - it was deliberately
 * solved backward from a real, directly-computed avoidable-repeat-contact
 * cost: 450 affected customer accounts/week x 52 weeks x 1 avoidable extra
 * contact x an assumed CA$6 blended agent-time cost/contact = CA$140,400/yr,
 * chosen so the app's existing computeLtvFinancials() formula
 * (cohortHitWeekly x churnUpliftPct% x demandSideLtv x 52) reproduces that
 * figure as its primary line. demandSideLtv (CA$1,080) is a modelled
 * average annual customer value (regulated distribution + fixed charges),
 * used only as the unit the formula scales against, not a churn-risk value.
 * Totals are computed at render/build time from story-spec.financial, never
 * hardcoded as a second number.
 */

export const LTV_DEFAULT_ASSUMPTION_TEXT =
  'This panel estimates avoidable cost-to-serve exposure, not churn risk - Apex customers cannot switch gas distributors, so no customer here is "at risk of leaving." Customer annual value of CA$1,080 is a modelled average (regulated distribution and fixed charges) used as the unit the estimate scales against. Avoidable-cost exposure uses 450 customer accounts/week newly showing the billing-dispute continuation pattern - about 2.8% of the ~16,000-account weekly population - at a 0.56% avoidable-cost rate on that cohort, solved backward from a directly computed CA$140,400/year in avoidable repeat-contact cost (450 accounts/week x 1 avoidable extra contact x an assumed CA$6 blended agent-time cost, x 52 weeks). Micro Coaching value protected is modelled on the same 450-account cohort at a 55% protection rate over the four coaching weeks (weeks 2-5), a deliberately conservative modelling assumption reflecting that auto-fail volume this period fell from its week-1 peak but has not settled into a clean line. All totals are computed live from these assumptions. Change a number and Recalculate to see them move. All figures are estimates, and this demo is illustrative - Apex Utilities has not shared operational data with QiQ.'

export const RISK_LINES = [
  {
    key: 'periodDemandRiskPrimary',
    title: 'Billing-dispute continuation cost-to-serve',
    label: '450 customer accounts/week · 0.56% avoidable-cost rate · CA$1,080 customer value · 5 weeks',
    description:
      'Customer accounts hit by a billing-dispute continuation failure this week carry avoidable repeat-contact cost, not churn risk - Apex customers cannot switch distributors. Per-contact QA still passes while CSAT collapses after the first contact. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Billing-dispute continuation',
    dotColor: '#c0392b',
  },
  {
    key: 'periodDemandRiskSecondary',
    title: 'Missing-bill / reconciliation tail',
    label: 'Low volume (3.0% of contacts) · disproportionate severity · 5 weeks',
    description:
      'Missing Bill / Account Reconciliation Issues is a small share of contacts, but a mishandled reconciliation call routes straight to an escalation and, on the record, to public reviews. A QA sample sized for the average never reaches this tail. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Missing-bill tail',
    dotColor: '#d9534f',
  },
  {
    key: 'periodDemandRiskTertiary',
    title: 'System Betterment notification gap',
    label: '256 contacts weekly · 158 avoidable · 5 weeks',
    description:
      'System Betterment / Construction Project Notifications contacts closed without adequate advance notice drive avoidable repeat contact and, per the external-review correlation on the billing-dispute side, the same pattern of public sentiment risk. Figure shown for the current 5-week reporting window.',
    legendLabel: 'System Betterment notification gap',
    dotColor: '#e8806f',
  },
]

/** Combined cost-to-serve lines for the single risk card / drawer. Customer-side only - Apex is one-sided. */
export const AT_RISK_LINES = RISK_LINES.map((line) => ({ ...line, valueClass: line.valueClass ?? 'val-red' }))

/** Colour key for the at-risk donut. Single side - Apex has no supply-side equivalent. */
export const AT_RISK_SIDE_LEGEND = [{ label: 'Customer annual value', color: '#c0392b' }]

/**
 * Micro Coaching CAD slices that sum to periodProtected (same relative
 * weights as the at-risk donut). Estimate of avoidable cost protected by the
 * continuation-cohort CSAT recovery so far (2.3 → 3.4 since week 2); this
 * is a partial, early result, not a cleared cost - the auto-fail count has
 * fallen from its week-1 peak but has not settled into a clean line (see
 * executiveConstants.CRITICAL_FAILURES).
 */
export const COACHING_VALUE_LINES = [
  {
    key: 'periodDemandProtectedPrimary',
    title: 'Billing-dispute continuation cost-to-serve',
    label: 'Share of 5-week avoidable cost protected by coaching',
    description:
      'Largest share of Micro Coaching value protected in the current 5-week window. Mirrors the billing-dispute-continuation weight used on the at-risk donut. Estimate, partial result - auto-fail volume has not fallen to zero.',
    legendLabel: 'Billing-dispute continuation',
    dotColor: '#1a7a4a',
    format: 'usd',
  },
  {
    key: 'periodDemandProtectedSecondary',
    title: 'Missing-bill / reconciliation tail',
    label: '12% of base protected value (same weight as at-risk) · 5 weeks',
    description:
      'Value protected on missing-bill-related continuation cost after coaching in the current 5-week window. Estimate, presentation split of the period total.',
    legendLabel: 'Missing-bill tail',
    dotColor: '#228b5a',
    format: 'usd',
  },
  {
    key: 'periodDemandProtectedTertiary',
    title: 'System Betterment notification gap',
    label: '10% of base protected value (same weight as at-risk) · 5 weeks',
    description:
      'Value protected on System-Betterment-related continuation cost after coaching in the current 5-week window. Estimate, presentation split of the period total. The notification-timing gap itself remains a process/product gap - coaching addresses the continuation-contact tone, not the notification timing itself.',
    legendLabel: 'System Betterment notification gap',
    dotColor: '#4ade80',
    format: 'usd',
  },
]

/**
 * Section / panel headings and the assumption inputs. Deliberately titled
 * around cost-to-serve, not "LTV" or "churn" - Apex is a regulated
 * monopoly and customers cannot switch distributors, so churn language
 * would be factually wrong here.
 */
export const LTV_SECTION_TITLE = 'Avoidable Cost-to-Serve Exposure · 5-Week Period'
export const AT_RISK_TITLE = 'Avoidable cost-to-serve exposure'
export const AT_RISK_RISK_SUBTITLE =
  'Modelled avoidable repeat-contact cost in the current 5-week window from continuation failure on customer accounts - not churn risk. Apex customers cannot switch gas distributors, so no dollar figure here represents customers leaving. Apex is a one-sided (B2C) book - there is no supply-side population, so no supply-side exposure is modelled or shown. Estimate, in Canadian dollars.'

/**
 * Assumption inputs behind every figure on the cost-to-serve cards. Editable
 * at runtime through "View / edit assumptions" on Executive.
 *
 * demandSideLtv / cohortHitWeekly / churnUpliftPct come from
 * story-spec.json's `financial` block (1080 / 450 / 0.56).
 *
 * churnUpliftPct is deliberately a small, non-standard-looking number - it
 * was solved backward from a real, directly-computed avoidable-cost figure
 * (~CA$140,400/year), not a churn estimate. See story-spec.json's
 * `financial._note` for the full derivation. Do not "round" it or relabel
 * it as a churn rate.
 *
 * coachingCohortWeekly is set to the same 450-account cohort the cost
 * model uses - deliberately not a wider invented population.
 * coachingProtectionPct is 55%, a conservative modelling assumption: Apex's
 * auto-fail trend fell from its week-1 peak but has not settled into a
 * clean line (16 -> 9 -> 11 -> 8 -> 11), so crediting a higher protection
 * rate would overstate the result. It is a modelling assumption, NOT an
 * Apex-sourced figure, and the in-app assumption text says so.
 *
 * NOTE: no supplySideLtv / supplyAbandoningWeekly keys - this is a
 * one-sided client and the model omits the supply term entirely.
 */
export const LTV_ASSUMPTION_DEFAULTS = {
  demandSideLtv: 1080,
  cohortHitWeekly: 450,
  churnUpliftPct: 0.56,
  coachingCohortWeekly: 450,
  coachingProtectionPct: 55,
}

/**
 * UI label overrides for the financial panel (read by app/src/utils/ltvLabels.js).
 * The template defaults say "Customer LTV at risk" / "LTV protected" / "Total
 * LTV impact" - churn framing that is factually wrong for a regulated
 * monopoly, so every label is replaced with cost-to-serve language here.
 * unitValueFormat 'whole' shows CA$1,080 instead of the rounded CA$1k.
 */
export const LTV_UI_LABELS = {
  unitValueLabel: 'Customer annual value',
  unitValueFormat: 'whole',
  sectionSublabel:
    'Shows avoidable cost-to-serve exposure and value already protected by Micro Coaching · Estimate · Adjust assumptions using view / edit assumptions',
  riskCardLabel: 'Avoidable cost-to-serve exposure',
  annualisedRiskLabel: 'Annualised avoidable cost',
  coachingCardLabel: 'Avoidable cost protected by Micro Coaching · Customers',
  annualisedProtectedLabel: 'Annualised protected',
  netEyebrow: 'Total cost-to-serve impact surfaced this period',
  netSub: 'Avoidable cost-to-serve exposure + Micro Coaching value protected · 5 weeks · Estimate',
  coachingDrawerTitle: 'Avoidable cost protected by Micro Coaching · Customers',
  coachingDrawerSubtitle:
    'CAD avoidable cost protected in the current 5-week window after Micro Coaching went live in week 2, split across the same continuation categories as the cost-to-serve exposure. Estimate.',
  riskDrawerAnnualisedLabel: 'Annualised avoidable cost',
  assumptionsTitle: 'Cost-to-Serve Assumptions',
  assumptionsSubtitle: 'Adjust cost-to-serve inputs. Click Recalculate to update figures on the page.',
}

/** Field list for the assumptions modal. Customer-side only. */
export const LTV_ASSUMPTION_FIELDS = [
  { id: 'demandSideLtv', label: 'Customer annual value (CA$)', step: 10 },
  { id: 'cohortHitWeekly', label: 'Customer accounts hit by continuation failure / week', step: 1 },
  { id: 'churnUpliftPct', label: 'Avoidable-cost rate on cohort (%)', step: 0.01 },
  { id: 'coachingCohortWeekly', label: 'Customer accounts reached by coaching / week', step: 1 },
  { id: 'coachingProtectionPct', label: 'Micro Coaching protection rate (%)', step: 1 },
]
