/**
 * Content-writer output for Apex Utilities (qiq-content-writer stage 4).
 * Numeric fields (volume, aht/fcr/csat/qa series, behaviour pillars, critical
 * failures) are copied directly from clients/apex-utilities/contacts/agent_metrics.json,
 * the qiq-dataset-builder output - not authored here. qaSeries and firstQa are
 * the two fields agent_metrics.json does not carry per-agent; qaSeries is
 * derived deterministically from each agent's own ahtSeries (not randomised),
 * and firstQa is each agent's continuationQa plus the team-wide first/continuation
 * QA gap from story-spec.json (92.0 - 88.0 = 4.0 pts).
 *
 * role/team: every agent reports to Palesa Mahlangu (the single team lead named in
 * agents.js notes). wordCount = words across personalNote..encouragingClose;
 * estimatedDurationSeconds = round(wordCount x 0.4) and the pack totals sum the
 * cards, the same reading-time method as prior client packs (added by
 * qiq-demo-audit: the Agent page reads these directly).
 *
 * coachingPack cards follow the Micro Coaching card contract: title,
 * personalNote (this agent's own numbers), positiveOpening (omitted where not
 * supported or on short cards), coachingFocus, practicalGuidance ("sounds
 * like: ..."), miniChallenge, encouragingClose (omitted on short cards).
 * say_unspoken is not part of the rotation for Apex (one-sided client, per
 * story-spec.coaching.topics) - every pack below draws from the remaining
 * four topics only, in the priority order qiq-dataset-builder already ranked
 * (severity + customer risk + this agent's own count). No agent-facing string
 * references any internal record identifier, conversation log, quality
 * percentage, or system name.
 * This demo uses illustrative, synthetic data - Apex Utilities has not shared
 * operational data with QiQ.
 */

export const WK_LABELS = ["W1", "W2", "W3", "W4", "W5"]
export const COACHING_WEEK_INDEX = 1 // week 2, 0-indexed

export const AGENT_METRICS = {
  "kagiso-radebe": {
    "name": "Kagiso Radebe",
    "slug": "kagiso-radebe",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 105,
    "firstContacts": 83,
    "continuationContacts": 22,
    "ahtSeconds": 334,
    "fcrPct": 81.0,
    "csat": 3.87,
    "firstCsat": 4.33,
    "continuationCsat": 2.14,
    "qaScore": 89.1,
    "continuationQa": 86.8,
    "ahtSeries": [
      347,
      326,
      326,
      334,
      340
    ],
    "fcrSeries": [
      72.7,
      78.3,
      90.9,
      88.2,
      76.2
    ],
    "csatSeries": [
      3.5,
      3.74,
      3.86,
      4.29,
      4.05
    ],
    "processAdherencePct": 92.4,
    "resolutionRatePct": 81.0,
    "criticalFailures": 9,
    "criticalFailureSeries": [
      3,
      2,
      1,
      1,
      2
    ],
    "empathy": 3.79,
    "behaviourFirst": {
      "clarity": 4.36,
      "ownership": 4.11,
      "listening": 4.22,
      "professionalism": 4.33,
      "empathy": 4.18,
      "managing_frustration": 4.14
    },
    "behaviourContinuation": {
      "clarity": 3.47,
      "ownership": 2.61,
      "listening": 3.21,
      "professionalism": 4.12,
      "empathy": 2.29,
      "managing_frustration": 2.35
    },
    "qaSeries": [
      89.0,
      89.2,
      89.2,
      89.1,
      89.1
    ],
    "firstQa": 90.8,
    "coachingPack": {
      "packId": "pack-apex-kagiso-radebe",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 105 contacts, starting with 12 follow-up or dispute contacts opened without picking up the prior context, mostly on Start / Stop / Move / Payment / Account Access and Rate Class / Bill Impact Questions (Phase 2 Change).",
      "packReason": "Built from your own contacts this period, 30 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 192,
      "packWordCount": 479,
      "cards": [
        {
          "cardId": "CARD-KAGISO-RADEBE-1",
          "wordCount": 141,
          "estimatedDurationSeconds": 56,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Start / Stop / Move / Payment / Account Access",
          "personalNote": "12 of your 22 follow-up contacts this period (54.5%) mostly on Start / Stop / Move / Payment / Account Access and Rate Class / Bill Impact Questions (Phase 2 Change).",
          "positiveOpening": "Your first-contact work is solid \u2014 4.33 CSAT there, well ahead of the 2.14 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "12 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-KAGISO-RADEBE-2",
          "wordCount": 118,
          "estimatedDurationSeconds": 47,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Rate Class / Bill Impact Questions (Phase 2 Change)",
          "personalNote": "6 of your 105 contacts this period (5.7%) closed without a named next step, mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and Billing & Fee Dispute Escalations.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.33 CSAT there, well ahead of the 2.14 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "6 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-KAGISO-RADEBE-3",
          "wordCount": 123,
          "estimatedDurationSeconds": 49,
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Dispute Set the Tone \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "10 of your 105 contacts this period (9.5%) were disputes or fee complaints, mostly on Billing & Fee Dispute Escalations.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.33 CSAT there, well ahead of the 2.14 average on follow-ups.",
          "coachingFocus": "A billing or fee dispute is not a routine account question \u2014 match your tone to how frustrated the customer actually is, not to the length of the call.",
          "practicalGuidance": "Sounds like: \u201cI understand a CA$600 adjustment landing with no warning is frustrating \u2014 let's go through exactly where that number came from.\u201d",
          "miniChallenge": "On your next two dispute or fee-complaint contacts, name the customer's frustration in your own words before you explain the charge.",
          "encouragingClose": "Naming the frustration first is usually what gets a dispute call to de-escalate.",
          "_severity": "high",
          "_metric": "10 contacts flagged for let the dispute set the tone"
        },
        {
          "cardId": "CARD-KAGISO-RADEBE-4",
          "wordCount": 97,
          "estimatedDurationSeconds": 39,
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 Billing and fee disputes escalate on top of an already-strained rate-change season",
          "personalNote": "2 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Billing and fee disputes escalate on top of an already-strained rate-change season.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "2 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "karabo-zulu": {
    "name": "Karabo Zulu",
    "slug": "karabo-zulu",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 66,
    "firstContacts": 49,
    "continuationContacts": 17,
    "ahtSeconds": 320,
    "fcrPct": 81.8,
    "csat": 3.73,
    "firstCsat": 4.33,
    "continuationCsat": 2.0,
    "qaScore": 87.3,
    "continuationQa": 81.5,
    "ahtSeries": [
      324,
      313,
      311,
      313,
      340
    ],
    "fcrSeries": [
      75.0,
      86.7,
      84.6,
      76.9,
      84.6
    ],
    "csatSeries": [
      3.58,
      3.53,
      4.0,
      2.92,
      4.62
    ],
    "processAdherencePct": 98.5,
    "resolutionRatePct": 81.8,
    "criticalFailures": 5,
    "criticalFailureSeries": [
      2,
      1,
      1,
      1,
      0
    ],
    "empathy": 3.59,
    "behaviourFirst": {
      "clarity": 3.95,
      "ownership": 4.12,
      "listening": 4.1,
      "professionalism": 4.34,
      "empathy": 4.05,
      "managing_frustration": 3.97
    },
    "behaviourContinuation": {
      "clarity": 3.58,
      "ownership": 2.39,
      "listening": 2.93,
      "professionalism": 4.14,
      "empathy": 2.26,
      "managing_frustration": 2.59
    },
    "qaSeries": [
      87.3,
      87.4,
      87.4,
      87.4,
      87.3
    ],
    "firstQa": 85.5,
    "coachingPack": {
      "packId": "pack-apex-karabo-zulu",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 66 contacts, starting with 12 follow-up or dispute contacts opened without picking up the prior context, mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and Start / Stop / Move / Payment / Account Access.",
      "packReason": "Built from your own contacts this period, 22 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 193,
      "packWordCount": 483,
      "cards": [
        {
          "cardId": "CARD-KARABO-ZULU-1",
          "wordCount": 141,
          "estimatedDurationSeconds": 56,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Rate Class / Bill Impact Questions (Phase 2 Change)",
          "personalNote": "12 of your 17 follow-up contacts this period (70.6%) mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and Start / Stop / Move / Payment / Account Access.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.33 CSAT there, well ahead of the 2.00 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "12 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-KARABO-ZULU-2",
          "wordCount": 125,
          "estimatedDurationSeconds": 50,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Rate Class / Bill Impact Questions (Phase 2 Change)",
          "personalNote": "7 of your 66 contacts this period (10.6%) closed without a named next step, mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and An account falls through the billing cracks, then lands a CA$1,800 surprise.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.33 CSAT there, well ahead of the 2.00 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "7 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-KARABO-ZULU-3",
          "wordCount": 124,
          "estimatedDurationSeconds": 50,
          "priorityRank": 3,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Count the Chasing \u00b7 Rate Class / Bill Impact Questions (Phase 2 Change)",
          "personalNote": "2 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and An account falls through the billing cracks, then lands a CA$1,800 surprise.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.33 CSAT there, well ahead of the 2.00 average on follow-ups.",
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "2 contacts flagged for count the chasing"
        },
        {
          "cardId": "CARD-KARABO-ZULU-4",
          "wordCount": 93,
          "estimatedDurationSeconds": 37,
          "priorityRank": 4,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "short",
          "title": "Let the Dispute Set the Tone \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "1 of your 66 contacts this period (1.5%) were disputes or fee complaints, mostly on Billing & Fee Dispute Escalations.",
          "positiveOpening": null,
          "coachingFocus": "A billing or fee dispute is not a routine account question \u2014 match your tone to how frustrated the customer actually is, not to the length of the call.",
          "practicalGuidance": "Sounds like: \u201cI understand a CA$600 adjustment landing with no warning is frustrating \u2014 let's go through exactly where that number came from.\u201d",
          "miniChallenge": "On your next two dispute or fee-complaint contacts, name the customer's frustration in your own words before you explain the charge.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "1 contacts flagged for let the dispute set the tone"
        }
      ]
    }
  },
  "lerato-ndlovu": {
    "name": "Lerato Ndlovu",
    "slug": "lerato-ndlovu",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 88,
    "firstContacts": 68,
    "continuationContacts": 20,
    "ahtSeconds": 318,
    "fcrPct": 90.9,
    "csat": 3.81,
    "firstCsat": 4.25,
    "continuationCsat": 2.3,
    "qaScore": 88.1,
    "continuationQa": 83.2,
    "ahtSeries": [
      308,
      327,
      335,
      312,
      313
    ],
    "fcrSeries": [
      86.4,
      81.2,
      94.1,
      92.3,
      100.0
    ],
    "csatSeries": [
      3.91,
      3.88,
      3.94,
      4.0,
      3.4
    ],
    "processAdherencePct": 97.7,
    "resolutionRatePct": 90.9,
    "criticalFailures": 5,
    "criticalFailureSeries": [
      3,
      0,
      0,
      0,
      2
    ],
    "empathy": 3.76,
    "behaviourFirst": {
      "clarity": 4.32,
      "ownership": 4.18,
      "listening": 4.27,
      "professionalism": 4.44,
      "empathy": 4.18,
      "managing_frustration": 4.16
    },
    "behaviourContinuation": {
      "clarity": 3.63,
      "ownership": 2.49,
      "listening": 3.04,
      "professionalism": 4.32,
      "empathy": 2.33,
      "managing_frustration": 2.52
    },
    "qaSeries": [
      88.2,
      88.0,
      87.9,
      88.2,
      88.1
    ],
    "firstQa": 87.2,
    "coachingPack": {
      "packId": "pack-apex-lerato-ndlovu",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 88 contacts, starting with 14 follow-up or dispute contacts opened without picking up the prior context, mostly on Start / Stop / Move / Payment / Account Access and Estimated vs. Actual Meter Read Disputes.",
      "packReason": "Built from your own contacts this period, 17 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 3,
      "estimatedPackDurationSeconds": 138,
      "packWordCount": 345,
      "cards": [
        {
          "cardId": "CARD-LERATO-NDLOVU-1",
          "wordCount": 138,
          "estimatedDurationSeconds": 55,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Start / Stop / Move / Payment / Account Access",
          "personalNote": "14 of your 20 follow-up contacts this period (70.0%) mostly on Start / Stop / Move / Payment / Account Access and Estimated vs. Actual Meter Read Disputes.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.25 CSAT there, well ahead of the 2.30 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "14 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-LERATO-NDLOVU-2",
          "wordCount": 109,
          "estimatedDurationSeconds": 44,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 System Betterment / Construction Project Notifications",
          "personalNote": "1 of your 88 contacts this period (1.1%) closed without a named next step, mostly on System Betterment / Construction Project Notifications.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.25 CSAT there, well ahead of the 2.30 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "1 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-LERATO-NDLOVU-3",
          "wordCount": 98,
          "estimatedDurationSeconds": 39,
          "priorityRank": 3,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 Estimated vs. Actual Meter Read Disputes",
          "personalNote": "2 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Estimated vs. Actual Meter Read Disputes and System Betterment / Construction Project Notifications.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "2 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "naledi-nkosi": {
    "name": "Naledi Nkosi",
    "slug": "naledi-nkosi",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 77,
    "firstContacts": 58,
    "continuationContacts": 19,
    "ahtSeconds": 316,
    "fcrPct": 88.3,
    "csat": 3.78,
    "firstCsat": 4.22,
    "continuationCsat": 2.42,
    "qaScore": 88.7,
    "continuationQa": 83.5,
    "ahtSeries": [
      316,
      326,
      341,
      306,
      311
    ],
    "fcrSeries": [
      80.0,
      90.9,
      90.9,
      85.2,
      94.4
    ],
    "csatSeries": [
      3.3,
      3.91,
      3.73,
      3.85,
      3.89
    ],
    "processAdherencePct": 98.7,
    "resolutionRatePct": 88.3,
    "criticalFailures": 4,
    "criticalFailureSeries": [
      1,
      0,
      2,
      0,
      1
    ],
    "empathy": 3.7,
    "behaviourFirst": {
      "clarity": 4.27,
      "ownership": 4.25,
      "listening": 4.36,
      "professionalism": 4.47,
      "empathy": 4.2,
      "managing_frustration": 4.09
    },
    "behaviourContinuation": {
      "clarity": 3.57,
      "ownership": 2.27,
      "listening": 3.15,
      "professionalism": 4.26,
      "empathy": 2.19,
      "managing_frustration": 2.55
    },
    "qaSeries": [
      88.7,
      88.6,
      88.5,
      88.8,
      88.7
    ],
    "firstQa": 87.5,
    "coachingPack": {
      "packId": "pack-apex-naledi-nkosi",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 77 contacts, starting with 16 follow-up or dispute contacts opened without picking up the prior context, mostly on Start / Stop / Move / Payment / Account Access and System Betterment / Construction Project Notifications.",
      "packReason": "Built from your own contacts this period, 26 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 3,
      "estimatedPackDurationSeconds": 143,
      "packWordCount": 358,
      "cards": [
        {
          "cardId": "CARD-NALEDI-NKOSI-1",
          "wordCount": 138,
          "estimatedDurationSeconds": 55,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Start / Stop / Move / Payment / Account Access",
          "personalNote": "16 of your 19 follow-up contacts this period (84.2%) mostly on Start / Stop / Move / Payment / Account Access and System Betterment / Construction Project Notifications.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.22 CSAT there, well ahead of the 2.42 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "16 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-NALEDI-NKOSI-2",
          "wordCount": 118,
          "estimatedDurationSeconds": 47,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Budget Billing (Equalization Plan) Enrollment & Adjustments",
          "personalNote": "5 of your 77 contacts this period (6.5%) closed without a named next step, mostly on Budget Billing (Equalization Plan) Enrollment & Adjustments and Gas Emergency / No-Heat / Leak Response.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.22 CSAT there, well ahead of the 2.42 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "5 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-NALEDI-NKOSI-3",
          "wordCount": 102,
          "estimatedDurationSeconds": 41,
          "priorityRank": 3,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 Start / Stop / Move / Payment / Account Access",
          "personalNote": "5 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Start / Stop / Move / Payment / Account Access and System Betterment / Construction Project Notifications.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "5 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "nomsa-khumalo": {
    "name": "Nomsa Khumalo",
    "slug": "nomsa-khumalo",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 94,
    "firstContacts": 76,
    "continuationContacts": 18,
    "ahtSeconds": 320,
    "fcrPct": 85.1,
    "csat": 3.95,
    "firstCsat": 4.3,
    "continuationCsat": 2.44,
    "qaScore": 85.5,
    "continuationQa": 82.4,
    "ahtSeries": [
      329,
      304,
      342,
      308,
      319
    ],
    "fcrSeries": [
      81.8,
      66.7,
      92.3,
      100.0,
      88.0
    ],
    "csatSeries": [
      4.14,
      4.28,
      3.85,
      3.31,
      4.0
    ],
    "processAdherencePct": 94.7,
    "resolutionRatePct": 85.1,
    "criticalFailures": 4,
    "criticalFailureSeries": [
      0,
      1,
      0,
      2,
      1
    ],
    "empathy": 3.92,
    "behaviourFirst": {
      "clarity": 4.19,
      "ownership": 4.23,
      "listening": 4.1,
      "professionalism": 4.44,
      "empathy": 4.25,
      "managing_frustration": 4.05
    },
    "behaviourContinuation": {
      "clarity": 3.4,
      "ownership": 2.33,
      "listening": 3.02,
      "professionalism": 4.28,
      "empathy": 2.53,
      "managing_frustration": 2.26
    },
    "qaSeries": [
      85.4,
      85.7,
      85.3,
      85.6,
      85.5
    ],
    "firstQa": 86.4,
    "coachingPack": {
      "packId": "pack-apex-nomsa-khumalo",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 94 contacts, starting with 8 follow-up or dispute contacts opened without picking up the prior context, mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
      "packReason": "Built from your own contacts this period, 18 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 191,
      "packWordCount": 477,
      "cards": [
        {
          "cardId": "CARD-NOMSA-KHUMALO-1",
          "wordCount": 138,
          "estimatedDurationSeconds": 55,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Rate Class / Bill Impact Questions (Phase 2 Change)",
          "personalNote": "8 of your 18 follow-up contacts this period (44.4%) mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.30 CSAT there, well ahead of the 2.44 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "8 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-NOMSA-KHUMALO-2",
          "wordCount": 120,
          "estimatedDurationSeconds": 48,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Missing Bill / Account Reconciliation Issues",
          "personalNote": "4 of your 94 contacts this period (4.3%) closed without a named next step, mostly on Missing Bill / Account Reconciliation Issues and Start / Stop / Move / Payment / Account Access.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.30 CSAT there, well ahead of the 2.44 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "4 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-NOMSA-KHUMALO-3",
          "wordCount": 119,
          "estimatedDurationSeconds": 48,
          "priorityRank": 3,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Count the Chasing \u00b7 Rate Class / Bill Impact Questions (Phase 2 Change)",
          "personalNote": "4 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and General Gas Safety & Appliance Questions (Non-Emergency).",
          "positiveOpening": "Your first-contact work is solid \u2014 4.30 CSAT there, well ahead of the 2.44 average on follow-ups.",
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "4 contacts flagged for count the chasing"
        },
        {
          "cardId": "CARD-NOMSA-KHUMALO-4",
          "wordCount": 100,
          "estimatedDurationSeconds": 40,
          "priorityRank": 4,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "short",
          "title": "Let the Dispute Set the Tone \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "2 of your 94 contacts this period (2.1%) were disputes or fee complaints, mostly on Billing & Fee Dispute Escalations and Missing Bill / Account Reconciliation Issues.",
          "positiveOpening": null,
          "coachingFocus": "A billing or fee dispute is not a routine account question \u2014 match your tone to how frustrated the customer actually is, not to the length of the call.",
          "practicalGuidance": "Sounds like: \u201cI understand a CA$600 adjustment landing with no warning is frustrating \u2014 let's go through exactly where that number came from.\u201d",
          "miniChallenge": "On your next two dispute or fee-complaint contacts, name the customer's frustration in your own words before you explain the charge.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "2 contacts flagged for let the dispute set the tone"
        }
      ]
    }
  },
  "sipho-nkosi": {
    "name": "Sipho Nkosi",
    "slug": "sipho-nkosi",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 56,
    "firstContacts": 41,
    "continuationContacts": 15,
    "ahtSeconds": 318,
    "fcrPct": 78.6,
    "csat": 3.68,
    "firstCsat": 4.22,
    "continuationCsat": 2.2,
    "qaScore": 85.6,
    "continuationQa": 86.6,
    "ahtSeries": [
      327,
      309,
      322,
      289,
      349
    ],
    "fcrSeries": [
      100.0,
      93.3,
      69.2,
      80.0,
      50.0
    ],
    "csatSeries": [
      3.62,
      3.53,
      3.77,
      3.8,
      3.7
    ],
    "processAdherencePct": 94.6,
    "resolutionRatePct": 78.6,
    "criticalFailures": 5,
    "criticalFailureSeries": [
      0,
      1,
      2,
      0,
      2
    ],
    "empathy": 3.67,
    "behaviourFirst": {
      "clarity": 4.33,
      "ownership": 4.21,
      "listening": 4.13,
      "professionalism": 4.36,
      "empathy": 4.19,
      "managing_frustration": 4.1
    },
    "behaviourContinuation": {
      "clarity": 3.55,
      "ownership": 2.41,
      "listening": 3.34,
      "professionalism": 4.43,
      "empathy": 2.25,
      "managing_frustration": 2.5
    },
    "qaSeries": [
      85.5,
      85.7,
      85.6,
      85.9,
      85.6
    ],
    "firstQa": 90.6,
    "coachingPack": {
      "packId": "pack-apex-sipho-nkosi",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 56 contacts, starting with 11 follow-up or dispute contacts opened without picking up the prior context, mostly on Budget Billing (Equalization Plan) Enrollment & Adjustments and System Betterment / Construction Project Notifications.",
      "packReason": "Built from your own contacts this period, 14 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 3,
      "estimatedPackDurationSeconds": 138,
      "packWordCount": 344,
      "cards": [
        {
          "cardId": "CARD-SIPHO-NKOSI-1",
          "wordCount": 135,
          "estimatedDurationSeconds": 54,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Budget Billing (Equalization Plan) Enrollment & Adjustments",
          "personalNote": "11 of your 15 follow-up contacts this period (73.3%) mostly on Budget Billing (Equalization Plan) Enrollment & Adjustments and System Betterment / Construction Project Notifications.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.22 CSAT there, well ahead of the 2.20 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "11 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-SIPHO-NKOSI-2",
          "wordCount": 117,
          "estimatedDurationSeconds": 47,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Estimated vs. Actual Meter Read Disputes",
          "personalNote": "2 of your 56 contacts this period (3.6%) closed without a named next step, mostly on Estimated vs. Actual Meter Read Disputes and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.22 CSAT there, well ahead of the 2.20 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "2 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-SIPHO-NKOSI-3",
          "wordCount": 92,
          "estimatedDurationSeconds": 37,
          "priorityRank": 3,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 Budget Billing (Equalization Plan) Enrollment & Adjustments",
          "personalNote": "1 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "1 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "sipho-van-der-merwe": {
    "name": "Sipho van der Merwe",
    "slug": "sipho-van-der-merwe",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 100,
    "firstContacts": 71,
    "continuationContacts": 29,
    "ahtSeconds": 313,
    "fcrPct": 81.0,
    "csat": 3.56,
    "firstCsat": 4.14,
    "continuationCsat": 2.14,
    "qaScore": 88.7,
    "continuationQa": 85.5,
    "ahtSeries": [
      326,
      300,
      290,
      321,
      324
    ],
    "fcrSeries": [
      72.0,
      100.0,
      84.2,
      85.0,
      68.4
    ],
    "csatSeries": [
      3.88,
      3.18,
      3.21,
      3.5,
      3.89
    ],
    "processAdherencePct": 96.0,
    "resolutionRatePct": 81.0,
    "criticalFailures": 11,
    "criticalFailureSeries": [
      3,
      2,
      2,
      2,
      2
    ],
    "empathy": 3.84,
    "behaviourFirst": {
      "clarity": 4.29,
      "ownership": 4.2,
      "listening": 4.23,
      "professionalism": 4.58,
      "empathy": 4.44,
      "managing_frustration": 4.09
    },
    "behaviourContinuation": {
      "clarity": 3.53,
      "ownership": 2.46,
      "listening": 3.12,
      "professionalism": 4.19,
      "empathy": 2.38,
      "managing_frustration": 2.49
    },
    "qaSeries": [
      88.6,
      88.8,
      88.9,
      88.6,
      88.7
    ],
    "firstQa": 89.5,
    "coachingPack": {
      "packId": "pack-apex-sipho-van-der-merwe",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 100 contacts, starting with 18 follow-up or dispute contacts opened without picking up the prior context, mostly on Billing & Fee Dispute Escalations and Start / Stop / Move / Payment / Account Access.",
      "packReason": "Built from your own contacts this period, 43 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 188,
      "packWordCount": 471,
      "cards": [
        {
          "cardId": "CARD-SIPHO-VAN-DER-MERWE-1",
          "wordCount": 137,
          "estimatedDurationSeconds": 55,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "18 of your 29 follow-up contacts this period (62.1%) mostly on Billing & Fee Dispute Escalations and Start / Stop / Move / Payment / Account Access.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.14 CSAT there, well ahead of the 2.14 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "18 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-SIPHO-VAN-DER-MERWE-2",
          "wordCount": 119,
          "estimatedDurationSeconds": 48,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "13 of your 100 contacts this period (13.0%) closed without a named next step, mostly on Billing & Fee Dispute Escalations and Start / Stop / Move / Payment / Account Access.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.14 CSAT there, well ahead of the 2.14 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "13 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-SIPHO-VAN-DER-MERWE-3",
          "wordCount": 123,
          "estimatedDurationSeconds": 49,
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Dispute Set the Tone \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "11 of your 100 contacts this period (11.0%) were disputes or fee complaints, mostly on Billing & Fee Dispute Escalations.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.14 CSAT there, well ahead of the 2.14 average on follow-ups.",
          "coachingFocus": "A billing or fee dispute is not a routine account question \u2014 match your tone to how frustrated the customer actually is, not to the length of the call.",
          "practicalGuidance": "Sounds like: \u201cI understand a CA$600 adjustment landing with no warning is frustrating \u2014 let's go through exactly where that number came from.\u201d",
          "miniChallenge": "On your next two dispute or fee-complaint contacts, name the customer's frustration in your own words before you explain the charge.",
          "encouragingClose": "Naming the frustration first is usually what gets a dispute call to de-escalate.",
          "_severity": "high",
          "_metric": "11 contacts flagged for let the dispute set the tone"
        },
        {
          "cardId": "CARD-SIPHO-VAN-DER-MERWE-4",
          "wordCount": 92,
          "estimatedDurationSeconds": 37,
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 Budget Billing (Equalization Plan) Enrollment & Adjustments",
          "personalNote": "1 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "1 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "vusi-jacobs": {
    "name": "Vusi Jacobs",
    "slug": "vusi-jacobs",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 64,
    "firstContacts": 46,
    "continuationContacts": 18,
    "ahtSeconds": 321,
    "fcrPct": 89.1,
    "csat": 3.78,
    "firstCsat": 4.35,
    "continuationCsat": 2.33,
    "qaScore": 86.4,
    "continuationQa": 81.6,
    "ahtSeries": [
      294,
      313,
      329,
      324,
      347
    ],
    "fcrSeries": [
      80.0,
      94.4,
      86.7,
      90.9,
      90.0
    ],
    "csatSeries": [
      3.1,
      4.0,
      3.67,
      3.73,
      4.3
    ],
    "processAdherencePct": 100.0,
    "resolutionRatePct": 89.1,
    "criticalFailures": 7,
    "criticalFailureSeries": [
      2,
      2,
      2,
      1,
      0
    ],
    "empathy": 3.77,
    "behaviourFirst": {
      "clarity": 4.33,
      "ownership": 4.28,
      "listening": 4.17,
      "professionalism": 4.56,
      "empathy": 4.33,
      "managing_frustration": 4.04
    },
    "behaviourContinuation": {
      "clarity": 3.8,
      "ownership": 2.39,
      "listening": 3.3,
      "professionalism": 4.51,
      "empathy": 2.31,
      "managing_frustration": 2.44
    },
    "qaSeries": [
      86.7,
      86.5,
      86.3,
      86.4,
      86.4
    ],
    "firstQa": 85.6,
    "coachingPack": {
      "packId": "pack-apex-vusi-jacobs",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 64 contacts, starting with 14 follow-up or dispute contacts opened without picking up the prior context, mostly on Start / Stop / Move / Payment / Account Access and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
      "packReason": "Built from your own contacts this period, 20 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 194,
      "packWordCount": 485,
      "cards": [
        {
          "cardId": "CARD-VUSI-JACOBS-1",
          "wordCount": 139,
          "estimatedDurationSeconds": 56,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Start / Stop / Move / Payment / Account Access",
          "personalNote": "14 of your 18 follow-up contacts this period (77.8%) mostly on Start / Stop / Move / Payment / Account Access and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.35 CSAT there, well ahead of the 2.33 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "14 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-VUSI-JACOBS-2",
          "wordCount": 120,
          "estimatedDurationSeconds": 48,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Budget Billing (Equalization Plan) Enrollment & Adjustments",
          "personalNote": "2 of your 64 contacts this period (3.1%) closed without a named next step, mostly on Budget Billing (Equalization Plan) Enrollment & Adjustments and Rate Class / Bill Impact Questions (Phase 2 Change).",
          "positiveOpening": "Your first-contact work is solid \u2014 4.35 CSAT there, well ahead of the 2.33 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "2 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-VUSI-JACOBS-3",
          "wordCount": 123,
          "estimatedDurationSeconds": 49,
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Dispute Set the Tone \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "2 of your 64 contacts this period (3.1%) were disputes or fee complaints, mostly on Billing & Fee Dispute Escalations.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.35 CSAT there, well ahead of the 2.33 average on follow-ups.",
          "coachingFocus": "A billing or fee dispute is not a routine account question \u2014 match your tone to how frustrated the customer actually is, not to the length of the call.",
          "practicalGuidance": "Sounds like: \u201cI understand a CA$600 adjustment landing with no warning is frustrating \u2014 let's go through exactly where that number came from.\u201d",
          "miniChallenge": "On your next two dispute or fee-complaint contacts, name the customer's frustration in your own words before you explain the charge.",
          "encouragingClose": "Naming the frustration first is usually what gets a dispute call to de-escalate.",
          "_severity": "medium",
          "_metric": "2 contacts flagged for let the dispute set the tone"
        },
        {
          "cardId": "CARD-VUSI-JACOBS-4",
          "wordCount": 103,
          "estimatedDurationSeconds": 41,
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 Start / Stop / Move / Payment / Account Access",
          "personalNote": "2 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Start / Stop / Move / Payment / Account Access and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "2 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "vusi-molefe": {
    "name": "Vusi Molefe",
    "slug": "vusi-molefe",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 87,
    "firstContacts": 62,
    "continuationContacts": 25,
    "ahtSeconds": 306,
    "fcrPct": 81.6,
    "csat": 3.7,
    "firstCsat": 4.18,
    "continuationCsat": 2.52,
    "qaScore": 86.2,
    "continuationQa": 81.9,
    "ahtSeries": [
      307,
      321,
      307,
      290,
      303
    ],
    "fcrSeries": [
      83.3,
      84.2,
      57.1,
      95.0,
      81.2
    ],
    "csatSeries": [
      3.33,
      4.16,
      3.43,
      3.5,
      4.06
    ],
    "processAdherencePct": 92.0,
    "resolutionRatePct": 81.6,
    "criticalFailures": 2,
    "criticalFailureSeries": [
      1,
      0,
      1,
      0,
      0
    ],
    "empathy": 3.7,
    "behaviourFirst": {
      "clarity": 4.25,
      "ownership": 4.27,
      "listening": 4.3,
      "professionalism": 4.35,
      "empathy": 4.21,
      "managing_frustration": 4.15
    },
    "behaviourContinuation": {
      "clarity": 3.67,
      "ownership": 2.44,
      "listening": 3.16,
      "professionalism": 4.29,
      "empathy": 2.42,
      "managing_frustration": 2.52
    },
    "qaSeries": [
      86.2,
      86.0,
      86.2,
      86.4,
      86.2
    ],
    "firstQa": 85.9,
    "coachingPack": {
      "packId": "pack-apex-vusi-molefe",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 87 contacts, starting with 15 follow-up or dispute contacts opened without picking up the prior context, mostly on Missing Bill / Account Reconciliation Issues and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
      "packReason": "Built from your own contacts this period, 30 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 192,
      "packWordCount": 480,
      "cards": [
        {
          "cardId": "CARD-VUSI-MOLEFE-1",
          "wordCount": 135,
          "estimatedDurationSeconds": 54,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Missing Bill / Account Reconciliation Issues",
          "personalNote": "15 of your 25 follow-up contacts this period (60.0%) mostly on Missing Bill / Account Reconciliation Issues and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.18 CSAT there, well ahead of the 2.52 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "15 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-VUSI-MOLEFE-2",
          "wordCount": 115,
          "estimatedDurationSeconds": 46,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Missing Bill / Account Reconciliation Issues",
          "personalNote": "7 of your 87 contacts this period (8.0%) closed without a named next step, mostly on Missing Bill / Account Reconciliation Issues and Billing & Fee Dispute Escalations.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.18 CSAT there, well ahead of the 2.52 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "7 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-VUSI-MOLEFE-3",
          "wordCount": 130,
          "estimatedDurationSeconds": 52,
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Dispute Set the Tone \u00b7 Missing Bill / Account Reconciliation Issues",
          "personalNote": "5 of your 87 contacts this period (5.7%) were disputes or fee complaints, mostly on Missing Bill / Account Reconciliation Issues and Billing & Fee Dispute Escalations.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.18 CSAT there, well ahead of the 2.52 average on follow-ups.",
          "coachingFocus": "A billing or fee dispute is not a routine account question \u2014 match your tone to how frustrated the customer actually is, not to the length of the call.",
          "practicalGuidance": "Sounds like: \u201cI understand a CA$600 adjustment landing with no warning is frustrating \u2014 let's go through exactly where that number came from.\u201d",
          "miniChallenge": "On your next two dispute or fee-complaint contacts, name the customer's frustration in your own words before you explain the charge.",
          "encouragingClose": "Naming the frustration first is usually what gets a dispute call to de-escalate.",
          "_severity": "medium",
          "_metric": "5 contacts flagged for let the dispute set the tone"
        },
        {
          "cardId": "CARD-VUSI-MOLEFE-4",
          "wordCount": 100,
          "estimatedDurationSeconds": 40,
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 General Gas Safety & Appliance Questions (Non-Emergency)",
          "personalNote": "3 of your contacts this period were from a customer who had already reached out about the same issue, mostly on General Gas Safety & Appliance Questions (Non-Emergency) and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "3 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "zanele-radebe": {
    "name": "Zanele Radebe",
    "slug": "zanele-radebe",
    "role": "Customer Support Agent",
    "team": "Palesa Mahlangu",
    "volume": 70,
    "firstContacts": 56,
    "continuationContacts": 14,
    "ahtSeconds": 330,
    "fcrPct": 85.7,
    "csat": 3.97,
    "firstCsat": 4.36,
    "continuationCsat": 2.43,
    "qaScore": 87.1,
    "continuationQa": 85.6,
    "ahtSeries": [
      344,
      332,
      345,
      311,
      308
    ],
    "fcrSeries": [
      92.9,
      91.7,
      94.4,
      81.2,
      60.0
    ],
    "csatSeries": [
      3.93,
      4.5,
      4.33,
      3.44,
      3.6
    ],
    "processAdherencePct": 94.3,
    "resolutionRatePct": 85.7,
    "criticalFailures": 3,
    "criticalFailureSeries": [
      1,
      0,
      0,
      1,
      1
    ],
    "empathy": 3.71,
    "behaviourFirst": {
      "clarity": 4.28,
      "ownership": 4.17,
      "listening": 4.27,
      "professionalism": 4.48,
      "empathy": 4.09,
      "managing_frustration": 4.18
    },
    "behaviourContinuation": {
      "clarity": 3.57,
      "ownership": 2.4,
      "listening": 3.12,
      "professionalism": 4.4,
      "empathy": 2.21,
      "managing_frustration": 2.46
    },
    "qaSeries": [
      87.0,
      87.1,
      86.9,
      87.3,
      87.1
    ],
    "firstQa": 89.6,
    "coachingPack": {
      "packId": "pack-apex-zanele-radebe",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 70 contacts, starting with 10 follow-up or dispute contacts opened without picking up the prior context, mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and Start / Stop / Move / Payment / Account Access.",
      "packReason": "Built from your own contacts this period, 20 across these patterns, where a small change in how you opened or closed would have made the contact easier for the customer.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 192,
      "packWordCount": 481,
      "cards": [
        {
          "cardId": "CARD-ZANELE-RADEBE-1",
          "wordCount": 141,
          "estimatedDurationSeconds": 56,
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off \u00b7 Rate Class / Bill Impact Questions (Phase 2 Change)",
          "personalNote": "10 of your 14 follow-up contacts this period (71.4%) mostly on Rate Class / Bill Impact Questions (Phase 2 Change) and Start / Stop / Move / Payment / Account Access.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.36 CSAT there, well ahead of the 2.43 average on follow-ups.",
          "coachingFocus": "When a customer is calling back about a dispute, rate question, or account issue that's already open, say what you can see has already happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \u201cI can see you were in touch last week about the rate-class change on your account \u2014 let me pick this up from there rather than starting over.\u201d",
          "miniChallenge": "On your next three follow-up contacts, open by naming what you can already see on the account before asking a new question.",
          "encouragingClose": "Customers push back less when they feel remembered, not restarted.",
          "_severity": "high",
          "_metric": "10 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-ZANELE-RADEBE-2",
          "wordCount": 116,
          "estimatedDurationSeconds": 46,
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeatContactRate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "standard",
          "title": "Name Who Has It and When \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "4 of your 70 contacts this period (5.7%) closed without a named next step, mostly on Billing & Fee Dispute Escalations and Budget Billing (Equalization Plan) Enrollment & Adjustments.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.36 CSAT there, well ahead of the 2.43 average on follow-ups.",
          "coachingFocus": "Before closing a dispute or rate-question contact you can't fully resolve on the call, name who owns the next step and when the customer will hear back.",
          "practicalGuidance": "Sounds like: \u201cOur billing team will review this and get back to you by Thursday \u2014 I'm noting that on your account right now.\u201d",
          "miniChallenge": "On your next two unresolved contacts, name a specific team and a specific day before you end the call.",
          "encouragingClose": null,
          "_severity": "high",
          "_metric": "4 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-ZANELE-RADEBE-3",
          "wordCount": 123,
          "estimatedDurationSeconds": 49,
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Dispute Set the Tone \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "4 of your 70 contacts this period (5.7%) were disputes or fee complaints, mostly on Billing & Fee Dispute Escalations.",
          "positiveOpening": "Your first-contact work is solid \u2014 4.36 CSAT there, well ahead of the 2.43 average on follow-ups.",
          "coachingFocus": "A billing or fee dispute is not a routine account question \u2014 match your tone to how frustrated the customer actually is, not to the length of the call.",
          "practicalGuidance": "Sounds like: \u201cI understand a CA$600 adjustment landing with no warning is frustrating \u2014 let's go through exactly where that number came from.\u201d",
          "miniChallenge": "On your next two dispute or fee-complaint contacts, name the customer's frustration in your own words before you explain the charge.",
          "encouragingClose": "Naming the frustration first is usually what gets a dispute call to de-escalate.",
          "_severity": "medium",
          "_metric": "4 contacts flagged for let the dispute set the tone"
        },
        {
          "cardId": "CARD-ZANELE-RADEBE-4",
          "wordCount": 101,
          "estimatedDurationSeconds": 40,
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeatContactRate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing \u00b7 Billing & Fee Dispute Escalations",
          "personalNote": "2 of your contacts this period were from a customer who had already reached out about the same issue, mostly on Billing & Fee Dispute Escalations and Start / Stop / Move / Payment / Account Access.",
          "positiveOpening": null,
          "coachingFocus": "When a customer says they've already called about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \u201cYou're right, this is your second call on the equalization adjustment \u2014 thanks for staying on it, let's get this closed today.\u201d",
          "miniChallenge": "On your next two contacts where the customer mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "_severity": "medium",
          "_metric": "2 contacts flagged for count the chasing"
        }
      ]
    }
  }
}

export const TEAM_AGGREGATES = {
  "totalContacts": 807,
  "qaScore": 87.39,
  "csat": 3.78,
  "firstCsat": 4.27,
  "continuationCsat": 2.29,
  "ahtSeconds": 320,
  "fcrPct": 84.3,
  "criticalFailuresTotal": 55,
  "agentsWithCriticalFailures": 10
}

export const AGENT_METRIC_ORDER = [
  "kagiso-radebe",
  "karabo-zulu",
  "lerato-ndlovu",
  "naledi-nkosi",
  "nomsa-khumalo",
  "sipho-nkosi",
  "sipho-van-der-merwe",
  "vusi-jacobs",
  "vusi-molefe",
  "zanele-radebe"
]

/** Ranked by critical failures, then by CSAT ascending. */
export const FLAGGED_AGENT_SLUGS = [
  "sipho-van-der-merwe",
  "kagiso-radebe",
  "vusi-jacobs",
  "karabo-zulu"
]

export const CARD_SHAPE_LABELS = {
  standard: 'Standard',
  situation_led: 'Situation-led',
  short: 'Short',
  technique_first: 'Technique-first',
}

export const CONTENT_TYPE_LABELS = {
  knowledge_check: 'Knowledge check',
  scenario_example: 'Scenario',
  trigger_action_reminder: 'Trigger and action',
}
