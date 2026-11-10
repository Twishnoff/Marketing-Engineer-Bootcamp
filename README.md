# GTM Build Tracker: a 30-day template

A 30-day plan for a startup or growth marketer who wants to build GTM engineering skills and has not built anything themselves yet. You work through it with your own LLM (Claude, ChatGPT, Gemini or another), and this tracker shows where you are.

By the end you will have built and shipped, on a product of your own:

1. **Foundation and instrumentation.** A live page with a waitlist form, deployed from git by CI, with a tracked signup funnel.
2. **A CRM as the system of record.** Signups land in HubSpot populated, staged and scored, without you touching them.
3. **An enrichment and outbound loop.** Signal, enrich, prioritise, write, send, measure.
4. **A data layer.** Every source in one warehouse, a tested model layer, a dashboard, and a written campaign readout.

Plus four public write-ups and one case study, which are the proof a hiring manager reads.

## Where it comes from

This is the plan Tyler Wishnoff ran from October 12 to November 10, 2026, rewritten so someone else can follow it. Each day carries a "Lessons from previous runs" note: the workaround, the pricing-tier surprise or the mistake from that day, so you do not have to repeat it. The notes start with the first run, and people who finish the plan add their own.

- Original tracker: https://github.com/Twishnoff/GTM-Build-Tracker
- Write-up 1, instrumentation: https://www.linkedin.com/pulse/instrumenting-plg-funnel-from-scratch-tyler-wishnoff-gaihc/
- Write-up 2, the CRM: https://www.linkedin.com/pulse/hubspot-system-record-logic-tyler-wishnoff-b7zfc/
- Write-up 3, outbound: https://www.linkedin.com/pulse/you-wont-use-tool-built-why-should-i-tyler-wishnoff-hbbcc/
- Write-up 4, the data layer: https://www.linkedin.com/pulse/gtm-data-layer-team-one-tyler-wishnoff-4sxrc/

## How to start

1. Click **Use this template** (or fork the repo) and clone your copy.
2. Open your LLM in that folder, or paste in `START-HERE.md` and `plan.js`.
3. Say: "Read START-HERE.md and follow it."

Your LLM will interview you, adapt `plan.js` to your product and your calendar, and then work through each day with you. To see the tracker, open `index.html` in a browser, or turn on GitHub Pages for the repo so other people can follow along.

## What you build on

The plan needs something real to instrument. Pick one; `START-HERE.md` asks which.

| Path | What it is | Watch out for |
|---|---|---|
| **A waitlist page (default)** | A one-page site for a product idea, with a signup form. Day 2 builds it. | Nothing. This is the path the plan is written for. |
| **Your employer** | The company you work for. | Get written sign-off before you touch a production CRM or send from a company domain, and agree what you may publish. |
| **Your own product** | An app you already have. | Only if it already exists. Building one first is its own month. |

On any path, the plan stops short of emailing strangers unless you decide otherwise on Day 2. The default on Day 20 is to run the whole loop against your own inboxes, which still proves every part of the pipeline.

## Pace

The plan is about 130 hours.

- **30 days** at four to five hours a day. This is how it was first run, and it should go more smoothly for you, because several days in the first run went to finding the workarounds now written into the notes.
- **45 to 60 days** at two to three hours a day, if you work full time. Your LLM will spread the days across your calendar.

## Trials and costs

The first run cost about $105 in cash. Most tools stayed on a free tier or a 14-day trial. The trials only work if each one starts on the morning you first need it:

| Day | Start | Why then |
|---|---|---|
| 2 | Sending domain and mailboxes (paid, only for a real send) | The domain needs about 18 days before Day 20. |
| 11 | Zapier multi-step trial | Decide by its end whether to pay or cut the Zap to one step. |
| 15 | Clay trial | Fourteen days covers enrichment and the campaign. Copy prompts and formulas into the repo as you go. |
| 16 | Apollo trial | Export on the first day. The trial has row and search caps. |
| 18 | Sequence tool trial | Covers the send week, the bump and the final screenshots. |
| 21 | Check every trial's end date | Export or screenshot before each one lapses, not after. |

Tier and pricing details were true in late 2026. Have your LLM check them again before you plan a day around one.

## Files

- `index.html`: the tracker page. No build step.
- `plan.js`: your plan and your progress. This is the only file that changes day to day.
- `START-HERE.md`: instructions for your LLM.

## Passing it on

When you finish, add your own lessons to the days in `plan.js` and share your fork.
