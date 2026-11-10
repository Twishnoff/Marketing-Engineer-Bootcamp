// Your plan. index.html reads this file; you or your LLM edit it.
// start: the ISO date of Day 1 (for example "2027-01-11"). Leave null to preview from today.
// A day's date is start + (day - 1) unless the day has its own "date" (use that to spread the plan over 45 to 60 days).
// Tick a task with "done": true. Push one to another date with "moved": "YYYY-MM-DD".
// Tick a tool by setting "usedDay" to the day you first used it for real.
window.PLAN = {
 "title": "GTM Engineer",
 "owner": "",
 "start": null,
 "updated": "",
 "days": [
  {
   "id": "d01",
   "day": 1,
   "title": "Tools and the dev loop",
   "goal": "Work from a local clone and merge a pull request you made yourself.",
   "tasks": [
    {
     "id": "d01-1",
     "text": "Install Git, GitHub CLI and VS Code; create a GitHub repo for your waitlist page and clone it",
     "done": false
    },
    {
     "id": "d01-2",
     "text": "Learn the six commands you will use every day: status, checkout -b, add, commit, push, pull (90 minutes max, with your LLM as tutor)",
     "done": false
    },
    {
     "id": "d01-3",
     "text": "Make one trivial change on a branch, push it, open a pull request, merge it",
     "done": false
    },
    {
     "id": "d01-4",
     "text": "Start docs/tradeoffs.md: one line per decision (what you built, bought or skipped, and why)",
     "done": false
    },
    {
     "id": "d01-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Cut every new branch from a freshly pulled main. After a squash merge, a branch cut from the old feature branch replays its commits into the next pull request. This went wrong on three separate days in the first run.",
    "The trade-offs note looks optional on Day 1. By Day 27 it is the raw material for the case study and for most interview answers."
   ]
  },
  {
   "id": "d02",
   "day": 2,
   "title": "The waitlist page and the sending decision",
   "goal": "A one-page site with a waitlist form is live, and you have decided whether a real send is in scope.",
   "tasks": [
    {
     "id": "d02-1",
     "text": "Write the page: who it is for, the one problem it solves, a waitlist form (email plus one or two fields)",
     "done": false
    },
    {
     "id": "d02-2",
     "text": "Deploy it as a static site (GitHub Pages or Cloudflare Pages) from your repo",
     "done": false
    },
    {
     "id": "d02-3",
     "text": "Decide now: will you send cold email to real people on Day 20, or stop at your own seed inboxes? Write the decision in the trade-offs note",
     "done": false
    },
    {
     "id": "d02-4",
     "text": "Only if a real send is in scope: buy a secondary sending domain, create two mailboxes, set SPF, DKIM and DMARC today",
     "done": false
    },
    {
     "id": "d02-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "A sending domain needs about 18 days of age and real mail before the first cold send, which is why this decision sits on Day 2 and not Day 18.",
    "Never send cold email from your main domain. It carries your site, your forms and every address a recruiter or customer sees.",
    "Skip automated warm-up services. A blocklist that flags domains warmed by those services exists, and listings are hard to undo. Warm with real one-to-one mail to people who reply.",
    "A brand-new Microsoft 365 tenant can block outbound mail for several days (bounce code 5.7.708). Test sends against an Outlook address, not only Gmail, before you trust the mailbox."
   ]
  },
  {
   "id": "d03",
   "day": 3,
   "title": "Form handler and CI deploys",
   "goal": "A push to main deploys a Worker that receives your form, with no manual deploy step.",
   "tasks": [
    {
     "id": "d03-1",
     "text": "Write a Cloudflare Worker that accepts the form POST, validates it and stores the signup (KV is enough)",
     "done": false
    },
    {
     "id": "d03-2",
     "text": "Run it locally with wrangler dev and submit the form against it",
     "done": false
    },
    {
     "id": "d03-3",
     "text": "GitHub Actions workflow: pull requests build, merges to main deploy; Cloudflare token and account ID as repo secrets",
     "done": false
    },
    {
     "id": "d03-4",
     "text": "Smoke test after deploy (health route returns 200, a bad request returns 4xx) and branch protection on main",
     "done": false
    },
    {
     "id": "d03-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Keep secrets outside the repo and outside any synced folder (OneDrive, Dropbox). Add secret file patterns to .gitignore before the first one exists.",
    "Set Worker secrets by piping from a file. Pasting at the hidden prompt stored an empty string twice in the first run.",
    "Give every Worker a /health route that reports which secrets are set (never their values). The next misconfiguration becomes a browser tab instead of a failing webhook."
   ]
  },
  {
   "id": "d04",
   "day": 4,
   "title": "Event taxonomy",
   "goal": "A written list of the events that define activation, before any tracking code.",
   "tasks": [
    {
     "id": "d04-1",
     "text": "Create a PostHog project (free tier) and read its event naming guide (60 minutes max)",
     "done": false
    },
    {
     "id": "d04-2",
     "text": "Write docs/analytics-events.md: every event, where it fires, the properties each one carries",
     "done": false
    },
    {
     "id": "d04-3",
     "text": "Add a short follow-up step after signup (role, company domain, biggest problem) and name its events",
     "done": false
    },
    {
     "id": "d04-4",
     "text": "Define 'activated' in one sentence, for example: signed up and completed the follow-up within 7 days",
     "done": false
    },
    {
     "id": "d04-5",
     "text": "Create your Apollo free account today so any account review is finished before Day 16",
     "done": false
    },
    {
     "id": "d04-6",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Ask for the company domain in the follow-up step. Most signups use personal email, so without that field there is nothing to enrich on Day 15. The first run lost half a day to this.",
    "Decide on Day 4 how you will mark test accounts (a property or an email pattern). Nearly every early account will be yours, and you will need to filter them out of every query later."
   ]
  },
  {
   "id": "d05",
   "day": 5,
   "title": "Instrument the page",
   "goal": "Browser events from your page reach PostHog and match the written contract.",
   "tasks": [
    {
     "id": "d05-1",
     "text": "Add the PostHog snippet; fire the signup and follow-up events from the page",
     "done": false
    },
    {
     "id": "d05-2",
     "text": "CI check: a script fails the build if any event name in the code is missing from docs/analytics-events.md",
     "done": false
    },
    {
     "id": "d05-3",
     "text": "Walk the funnel yourself on a fresh email address and confirm each event in PostHog's live view",
     "done": false
    },
    {
     "id": "d05-4",
     "text": "Draw the lead path as a Mermaid flowchart in the README (form, event, CRM write-back, alert)",
     "done": false
    },
    {
     "id": "d05-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Turn autocapture and session replay off until you need them. A short list of named events is easier to reason about and to defend in an interview."
   ]
  },
  {
   "id": "d06",
   "day": 6,
   "title": "Server-side events and the funnel",
   "goal": "The Worker reports signups itself, and one dashboard shows the funnel.",
   "tasks": [
    {
     "id": "d06-1",
     "text": "Send a server-side event from the Worker when a signup is stored",
     "done": false
    },
    {
     "id": "d06-2",
     "text": "Build the funnel in PostHog: pageview, signup started, signup completed, follow-up completed",
     "done": false
    },
    {
     "id": "d06-3",
     "text": "Add a second insight: signups per week by source",
     "done": false
    },
    {
     "id": "d06-4",
     "text": "Say your current activation rate as a number, even if the sample is only you",
     "done": false
    },
    {
     "id": "d06-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Set $geoip_disable on server-side events, or every person's location becomes the Cloudflare edge that handled the request.",
    "Client events and server events will disagree at first. Finding out why is the kind of bug this job is about."
   ]
  },
  {
   "id": "d07",
   "day": 7,
   "title": "Write-up 1",
   "goal": "Publish a short post on instrumenting a funnel from scratch, and bank the week.",
   "tasks": [
    {
     "id": "d07-1",
     "text": "Write about 600 words: the taxonomy, why those events, the funnel chart, what surprised you",
     "done": false
    },
    {
     "id": "d07-2",
     "text": "Two screenshots: the CI deploy log and the funnel",
     "done": false
    },
    {
     "id": "d07-3",
     "text": "Publish where your audience is (LinkedIn first, then your blog or portfolio)",
     "done": false
    },
    {
     "id": "d07-4",
     "text": "Plan check: anything undone from Days 1 to 6 gets a slot on Day 8 morning, nothing else carries",
     "done": false
    },
    {
     "id": "d07-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Write it in your own voice. If your LLM drafts passages, rewrite them before publishing. For later posts, ask it to point out problems rather than supply replacement sentences."
   ]
  },
  {
   "id": "d08",
   "day": 8,
   "title": "Data model",
   "goal": "Decide what the CRM should know about a signup, and create it from code.",
   "tasks": [
    {
     "id": "d08-1",
     "text": "Close out any Week 1 leftovers (2 hours max)",
     "done": false
    },
    {
     "id": "d08-2",
     "text": "Design the contact properties (one prefix for all of them) and a property group",
     "done": false
    },
    {
     "id": "d08-3",
     "text": "Decide contact properties versus a custom object; write the trade-off down",
     "done": false
    },
    {
     "id": "d08-4",
     "text": "Create the properties through the HubSpot API from a script committed to the repo, so the schema is reproducible",
     "done": false
    },
    {
     "id": "d08-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "HubSpot's legacy private apps can no longer be created. The credential for your own portal is a Service Key.",
    "Whenever you rotate a key, update every place it lives: the Worker secret, your local secrets file and the CI secret. In the first run a key rotated in one place broke the scheduled warehouse run a week later."
   ]
  },
  {
   "id": "d09",
   "day": 9,
   "title": "Write-back from the Worker",
   "goal": "A new signup appears as a HubSpot contact within a minute, without you touching it.",
   "tasks": [
    {
     "id": "d09-1",
     "text": "Add a sync Worker that consumes a Cloudflare Queue; it is the only Worker that holds the HubSpot key",
     "done": false
    },
    {
     "id": "d09-2",
     "text": "The form Worker only enqueues; the sync Worker upserts the contact by email and sets your properties",
     "done": false
    },
    {
     "id": "d09-3",
     "text": "Make it idempotent: the same message twice must not double-count anything",
     "done": false
    },
    {
     "id": "d09-4",
     "text": "Verify on your own test signup",
     "done": false
    },
    {
     "id": "d09-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Set the queue consumer to one message at a time if it reads a counter, adds to it and writes it back. Otherwise two messages can interleave.",
    "HubSpot accepts datetimes as epoch milliseconds and returns them as ISO strings. Comparing the two without converting fails silently."
   ]
  },
  {
   "id": "d10",
   "day": 10,
   "title": "Lifecycle stages",
   "goal": "Lifecycle stage moves by itself as a signup does more.",
   "tasks": [
    {
     "id": "d10-1",
     "text": "Map HubSpot's lifecycle stages to your waitlist states, in your own words",
     "done": false
    },
    {
     "id": "d10-2",
     "text": "Put the rules in the sync Worker as small pure functions with tests",
     "done": false
    },
    {
     "id": "d10-3",
     "text": "Stages only move forward, and never past a stage a human set by hand",
     "done": false
    },
    {
     "id": "d10-4",
     "text": "Walk a fresh signup from the first stage to the activated stage and watch it move",
     "done": false
    },
    {
     "id": "d10-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Before planning a day around a HubSpot feature, check which tier it needs. Workflows, score properties, Sequences and custom reports all needed a Professional tier in late 2026. The first run rewrote three days after finding this out.",
    "The framing that came out of it: the CRM is the system of record, not the system of logic. The rules live in code, and the cost is a deploy to change a rule."
   ]
  },
  {
   "id": "d11",
   "day": 11,
   "title": "Lead score and one Zap",
   "goal": "A score that ranks signups, and one automation that acts on it.",
   "tasks": [
    {
     "id": "d11-1",
     "text": "Compute a score as a plain number property in the sync Worker (points for each step, capped)",
     "done": false
    },
    {
     "id": "d11-2",
     "text": "Daily cron on the Worker: decay the score after a period with no activity",
     "done": false
    },
    {
     "id": "d11-3",
     "text": "Build one Zap: score crosses your threshold, then a Slack post, a HubSpot task and a row in a sheet",
     "done": false
    },
    {
     "id": "d11-4",
     "text": "Trigger it with a test contact and confirm all three actions fire",
     "done": false
    },
    {
     "id": "d11-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Multi-step Zaps, Code steps and Webhooks steps need a paid Zapier plan. The trial is 14 days from when you first use them, so decide on Day 11 whether you will pay or cut the Zap back to one step.",
    "Zapier's sample record can hide a field if the sample contact has it empty. Pick a real, filled-in contact as the sample.",
    "This is the one place in the month where buying beat building: a trigger plus three SaaS actions is what a glue tool is for."
   ]
  },
  {
   "id": "d12",
   "day": 12,
   "title": "A webhook back into your system",
   "goal": "The CRM can change your system, not only read from it.",
   "tasks": [
    {
     "id": "d12-1",
     "text": "Add an endpoint on your Worker that changes a signup's state (for example, marks it invited)",
     "done": false
    },
    {
     "id": "d12-2",
     "text": "Trigger it from a property change in HubSpot, through a Zap that signs the request",
     "done": false
    },
    {
     "id": "d12-3",
     "text": "Verify the signature on every call; reject anything unsigned or stale, and fail closed if the secret is missing",
     "done": false
    },
    {
     "id": "d12-4",
     "text": "Run the loop end to end: change the property in HubSpot, confirm the state changed",
     "done": false
    },
    {
     "id": "d12-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "This is the first cut if the week runs long. Keep the manual version and move on.",
    "Send a stable ID, not an email address, in the webhook body, so there is no lookup to get wrong."
   ]
  },
  {
   "id": "d13",
   "day": 13,
   "title": "Reporting and reconciliation",
   "goal": "PostHog and HubSpot agree on signups, and you know why if they do not.",
   "tasks": [
    {
     "id": "d13-1",
     "text": "Build a dashboard from the free-tier standard reports (contacts by stage, created by day, by source)",
     "done": false
    },
    {
     "id": "d13-2",
     "text": "Write a re-runnable script that compares counts per person across PostHog and HubSpot",
     "done": false
    },
    {
     "id": "d13-3",
     "text": "Fix whatever the comparison finds; decide whether to seed history from before the sync existed",
     "done": false
    },
    {
     "id": "d13-4",
     "text": "Review every real contact by hand: are the properties right, is anything missing",
     "done": false
    },
    {
     "id": "d13-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "HubSpot's search index lags writes by about a minute. A check that runs straight after a write reports records as missing, and a create-if-not-found can make duplicates. Look records up by a unique ID property instead.",
    "Custom reports were a paid feature. A warehouse in Week 4 covers what the free reports cannot."
   ]
  },
  {
   "id": "d14",
   "day": 14,
   "title": "Write-up 2",
   "goal": "Publish a post on product signals in the CRM.",
   "tasks": [
    {
     "id": "d14-1",
     "text": "Write-up with the data model, the score logic and one automation screenshot",
     "done": false
    },
    {
     "id": "d14-2",
     "text": "Trade-offs note: properties versus custom object, queue versus direct calls, score in code versus a paid score property, Zapier versus a Worker",
     "done": false
    },
    {
     "id": "d14-3",
     "text": "Trial planning for Week 3: Clay starts tomorrow morning, Apollo on Day 16, the sequence tool on Day 18. Do not start any of them early",
     "done": false
    },
    {
     "id": "d14-4",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Each 14-day trial should start on the morning of the day you first need it. A trial started a few days early ends in the middle of the campaign."
   ]
  },
  {
   "id": "d15",
   "day": 15,
   "title": "Enrichment",
   "goal": "Every new signup is enriched by company domain, scored for fit and written back to the CRM.",
   "tasks": [
    {
     "id": "d15-1",
     "text": "Start the Clay trial; build a table fed by a webhook when a signup's company domain is set",
     "done": false
    },
    {
     "id": "d15-2",
     "text": "Columns: enrich company, a B2B or B2C classifier, a count of the roles you care about, an ICP score formula",
     "done": false
    },
    {
     "id": "d15-3",
     "text": "ICP score: hard gates (a zero disqualifies) and points that only rank; write the weights down",
     "done": false
    },
    {
     "id": "d15-4",
     "text": "Write the enrichment back to the HubSpot company and the score to the contact",
     "done": false
    },
    {
     "id": "d15-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Clay's trial capped tables at 50 rows, so a prospect list has to be split across tables.",
    "Clay's HubSpot source polled once a day at most. A webhook source gives near-real-time rows.",
    "Copy your prompts, formulas and column settings into the repo as you build them. After the trial lapsed, export was gated and the first run had to transcribe them from screenshots."
   ]
  },
  {
   "id": "d16",
   "day": 16,
   "title": "Account sourcing",
   "goal": "A list of target accounts and verified contacts built by a repeatable process, not by hand.",
   "tasks": [
    {
     "id": "d16-1",
     "text": "Define the play in one paragraph: who, why now, the offer, the ask. Name it <target>-<intent>-<yyyy-mm>",
     "done": false
    },
    {
     "id": "d16-2",
     "text": "Source accounts in Apollo with saved filters; export on the first day of the trial",
     "done": false
    },
    {
     "id": "d16-3",
     "text": "Run the sourced domains through the same Clay columns, so prospects and signups get the same score",
     "done": false
    },
    {
     "id": "d16-4",
     "text": "Find and verify one contact per company; check that the email domain matches the company",
     "done": false
    },
    {
     "id": "d16-5",
     "text": "Push the list to HubSpot as a static segment with a play property",
     "done": false
    },
    {
     "id": "d16-6",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Apollo's free tier had no funding filters. The 14-day Professional trial (no card) had them, but capped bulk selection at 25 rows and hit a daily search limit: the first run exported 107 of 432 matching accounts before it stopped.",
    "Email validation passes addresses at a contact's previous employer. A domain-match check plus a hand review of mismatches caught eight of those.",
    "Write the Apollo filters into the repo. The saved search is the only record once the trial ends."
   ]
  },
  {
   "id": "d17",
   "day": 17,
   "title": "The message",
   "goal": "One first-touch email you would be willing to receive.",
   "tasks": [
    {
     "id": "d17-1",
     "text": "Decide between per-contact drafts and one template; write down why",
     "done": false
    },
    {
     "id": "d17-2",
     "text": "Write the email: the one problem your sourcing filter guarantees they have, what you offer, one ask",
     "done": false
    },
    {
     "id": "d17-3",
     "text": "Keep tokens to first name and company; clean the company-name field before any send",
     "done": false
    },
    {
     "id": "d17-4",
     "text": "Name the win before launch: what result would count, and what reply rate you expect",
     "done": false
    },
    {
     "id": "d17-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Personalisation built from public data (name, company, funding round) is what everyone else is sending, and it reads as automated. The first run dropped 92 per-contact drafts for one template that named a real problem.",
    "Company names from a data provider carry suffixes and taglines ('(YC W24)', 'Inc.', a whole slogan). Three emails went out with them in the first run. Strip by script, then read every name by hand.",
    "Leave 'I see you just raised' out. Use recency as a list filter, not as copy."
   ]
  },
  {
   "id": "d18",
   "day": 18,
   "title": "Sending infrastructure",
   "goal": "A sending setup that will not damage your domain, and a sequence that is built and tested.",
   "tasks": [
    {
     "id": "d18-1",
     "text": "Deliverability check: test sends land in the inbox at Gmail and Outlook, no blocklist hits, SPF, DKIM and DMARC pass",
     "done": false
    },
    {
     "id": "d18-2",
     "text": "Pick the sender and start its trial today; write the trade-off down",
     "done": false
    },
    {
     "id": "d18-3",
     "text": "Build the sequence with every step it will ever have (first email and the bump) before enrolling anyone",
     "done": false
    },
    {
     "id": "d18-4",
     "text": "Unsubscribe link on, postal address in the signature, a do-not-contact segment, a send window in business hours",
     "done": false
    },
    {
     "id": "d18-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "HubSpot Sequences needed Sales Hub Professional. Starter did not include it. The 14-day trial started on Day 18 covered the send week, the bump and the final screenshots.",
    "Add the bump step before the first enrollment. In the first run it was added afterwards, and 11 contacts had to be unenrolled and re-enrolled, which left the performance tab double-counting them.",
    "A script that sends through the mailbox API is free, but its sends do not exist in the CRM unless you log them. Keeping the record won over saving the trial."
   ]
  },
  {
   "id": "d19",
   "day": 19,
   "title": "Reply handling",
   "goal": "Replies are triaged automatically, and nothing goes out without a person approving it.",
   "tasks": [
    {
     "id": "d19-1",
     "text": "Classify replies: interested, not now, wrong person, unsubscribe, out of office. Rules first, a model for the rest",
     "done": false
    },
    {
     "id": "d19-2",
     "text": "Interested: create a deal with the context a seller needs and post to Slack",
     "done": false
    },
    {
     "id": "d19-3",
     "text": "Unsubscribe: suppress everywhere. Wrong person: draft a reply that a human approves from Slack",
     "done": false
    },
    {
     "id": "d19-4",
     "text": "Test with five fake replies per class from a throwaway contact; record the pass rate",
     "done": false
    },
    {
     "id": "d19-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "HubSpot's conversation webhook covered the shared team inbox only. For a personal inbox, the signal was a change to the contact property hs_sales_email_last_replied.",
    "This is the heaviest build day of the month. The cut-down version (classify, set a property, post to Slack) is enough to tell the story.",
    "Build it before the first send, not after. No reply should arrive before triage exists."
   ]
  },
  {
   "id": "d20",
   "day": 20,
   "title": "Launch gate",
   "goal": "The whole loop runs end to end: send, open, reply, triage, record.",
   "tasks": [
    {
     "id": "d20-1",
     "text": "Default path: enroll your own seed inboxes (Gmail, Outlook, one colleague) and run a reply of each class through triage",
     "done": false
    },
    {
     "id": "d20-2",
     "text": "Real-send path, only if you decided so on Day 2 and every gate passes: domain aged with real mail, inbox placement clean, bounces under 2% on test sends, list verified, unsubscribe working",
     "done": false
    },
    {
     "id": "d20-3",
     "text": "Real-send path: ramp over four days (for example 10, 20, 30, the rest), each batch enrolled the evening before and gated on the previous day's bounces and complaints",
     "done": false
    },
    {
     "id": "d20-4",
     "text": "Capture the numbers you will need later: sent, delivered, opened, replied, by day and by score band",
     "done": false
    },
    {
     "id": "d20-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Stopping at seed inboxes is a complete project. You have still built and proven every part of the pipeline.",
    "Start with your lowest-scored contacts. Day one of a real send is a deliverability test, so the best prospects should wait for a clean first day.",
    "Schedule sends a few minutes off the hour. Round-time sends look automated.",
    "The first run sent 89 emails and got 37% opens and no replies. The sample was always too small to conclude much. The pipeline was the point, and a documented miss with a next test is still a strong exhibit."
   ]
  },
  {
   "id": "d21",
   "day": 21,
   "title": "Write-up 3",
   "goal": "Publish a post on the outbound loop, and start the data exports.",
   "tasks": [
    {
     "id": "d21-1",
     "text": "Write-up: the play, the sourcing logic, the message decision, the deliverability setup; state your bet and promise the numbers next week",
     "done": false
    },
    {
     "id": "d21-2",
     "text": "Trade-offs note: Clay versus scripting providers yourself, the sender choice, auto-send versus a review queue",
     "done": false
    },
    {
     "id": "d21-3",
     "text": "Write export scripts for your signup store, PostHog and HubSpot (newline-delimited JSON), and run them once",
     "done": false
    },
    {
     "id": "d21-4",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "State the bet before the results exist. It makes the next post honest whichever way the numbers go."
   ]
  },
  {
   "id": "d22",
   "day": 22,
   "title": "Warehouse and loaders",
   "goal": "Your signup store, PostHog and HubSpot land in one warehouse you can query.",
   "tasks": [
    {
     "id": "d22-1",
     "text": "Create a BigQuery project with one raw dataset per source",
     "done": false
    },
    {
     "id": "d22-2",
     "text": "Load the three exports by hand once; SELECT COUNT(*) on each",
     "done": false
    },
    {
     "id": "d22-3",
     "text": "Turn on PostHog's own batch export to BigQuery",
     "done": false
    },
    {
     "id": "d22-4",
     "text": "Campaign check: replies, bounces, domain health",
     "done": false
    },
    {
     "id": "d22-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "PostHog's BigQuery export fails until billing is enabled on the Google Cloud project. The free-trial credit covers this volume; set a small monthly budget alert on the same day.",
    "Keep test records in the source systems and filter them in SQL. Deleting them breaks the reconciliation."
   ]
  },
  {
   "id": "d23",
   "day": 23,
   "title": "SQL day",
   "goal": "Answer five questions in plain SQL before any modelling tool.",
   "tasks": [
    {
     "id": "d23-1",
     "text": "Do the three sources agree per person? Where they differ, find out why",
     "done": false
    },
    {
     "id": "d23-2",
     "text": "Order and timing of the first session: signup, follow-up, how long between them",
     "done": false
    },
    {
     "id": "d23-3",
     "text": "Activation by source and by ICP score band",
     "done": false
    },
    {
     "id": "d23-4",
     "text": "Outreach results by score band and by step",
     "done": false
    },
    {
     "id": "d23-5",
     "text": "Keep every query in the repo with a one-line interpretation",
     "done": false
    },
    {
     "id": "d23-6",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Choose questions your data can answer today. The first run replaced its planned five because they assumed outside users and replies that did not exist yet, and kept the originals for later with an 'empty until' note.",
    "With a handful of accounts, most of them yours, read the results as a test of the pipeline and not as findings about users."
   ]
  },
  {
   "id": "d24",
   "day": 24,
   "title": "dbt models and a schedule",
   "goal": "The raw tables become a small, tested model layer that rebuilds itself daily.",
   "tasks": [
    {
     "id": "d24-1",
     "text": "dbt Core project: staging views, then a few marts (contacts, companies, daily funnel, outreach)",
     "done": false
    },
    {
     "id": "d24-2",
     "text": "Tests on keys and accepted values; generate the docs and commit the lineage graph",
     "done": false
    },
    {
     "id": "d24-3",
     "text": "A scheduled GitHub Actions workflow: export, load, dbt build",
     "done": false
    },
    {
     "id": "d24-4",
     "text": "Point the Day 23 queries at the models",
     "done": false
    },
    {
     "id": "d24-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "This is the first cut if the week runs long. Plain SQL in the repo answers the interview question; dbt is a bonus.",
    "GitHub's scheduled workflows fired six to seven hours late. Moving the cron off the hour did not fix it. What worked: a Zapier schedule that calls the workflow's dispatch endpoint, with the cron kept as a fallback.",
    "Do not classify a follow-up email by a 'Re:' in its subject. A threaded bump kept the original subject, so every bump was counted as a first touch until the model numbered each contact's emails in send order."
   ]
  },
  {
   "id": "d25",
   "day": 25,
   "title": "Dashboard and campaign readout",
   "goal": "One dashboard on the warehouse, and a written verdict on the campaign.",
   "tasks": [
    {
     "id": "d25-1",
     "text": "Looker Studio on the marts: a campaign page and a funnel page",
     "done": false
    },
    {
     "id": "d25-2",
     "text": "Write the readout: what was sent, what happened, cost in cash and in hours",
     "done": false
    },
    {
     "id": "d25-3",
     "text": "State the verdict: what you would expand and what you would stop",
     "done": false
    },
    {
     "id": "d25-4",
     "text": "Post the scheduled run's result to Slack, success or failure",
     "done": false
    },
    {
     "id": "d25-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Looker Studio sums a rate that was already divided. Ship counts to the dashboard and compute rates there.",
    "The Slack step caught a real failure within an hour of being added in the first run. Add it when you add the schedule, not a week later.",
    "A dashboard on the warehouse outlives any single CRM trial and survives a change of CRM."
   ]
  },
  {
   "id": "d26",
   "day": 26,
   "title": "Write-up 4 and the architecture diagram",
   "goal": "Publish the data-layer post and draw the whole system on one page.",
   "tasks": [
    {
     "id": "d26-1",
     "text": "Write-up: why a warehouse at this size, what the model layer bought you, the campaign numbers you promised",
     "done": false
    },
    {
     "id": "d26-2",
     "text": "Architecture diagram of the full stack, readable at a glance",
     "done": false
    },
    {
     "id": "d26-3",
     "text": "Trade-offs note for the week",
     "done": false
    },
    {
     "id": "d26-4",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Redraw the README flowchart from Day 5 to match the diagram. A stale diagram is worse than none."
   ]
  },
  {
   "id": "d27",
   "day": 27,
   "title": "The case study",
   "goal": "One page a hiring manager can read in five minutes.",
   "tasks": [
    {
     "id": "d27-1",
     "text": "Headline that names the thing you built",
     "done": false
    },
    {
     "id": "d27-2",
     "text": "The problem, framed as capability: what used to take several roles and what you delivered alone",
     "done": false
    },
    {
     "id": "d27-3",
     "text": "Three or four trade-offs chosen by theme (cost, portability, low upkeep), not by day",
     "done": false
    },
    {
     "id": "d27-4",
     "text": "Results stated honestly, with the links to the four write-ups and the repos",
     "done": false
    },
    {
     "id": "d27-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Lead with the system and the judgment calls. Small counts undersell the work; say what the system can do and what you would test next."
   ]
  },
  {
   "id": "d28",
   "day": 28,
   "title": "Close the trials and update your materials",
   "goal": "Nothing is lost when the trials end, and your profile points at the proof.",
   "tasks": [
    {
     "id": "d28-1",
     "text": "Before each trial ends: export what you can, screenshot what you cannot, and write settings and prompts into the repo",
     "done": false
    },
    {
     "id": "d28-2",
     "text": "Decide pay or lapse for each tool, and write one line on why",
     "done": false
    },
    {
     "id": "d28-3",
     "text": "Resume and LinkedIn: a project block with numbers you will stand behind, and the stack on the skills line",
     "done": false
    },
    {
     "id": "d28-4",
     "text": "Pin the case study where a visitor sees it first",
     "done": false
    },
    {
     "id": "d28-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Check trial end dates on Day 21, not Day 28. Two exports in the first run were already gated by lapsed plans.",
    "Take the sequence performance screenshots after the last bump has gone out. The per-step view does not survive the trial and is not in the warehouse.",
    "A contact export contains real people's email addresses. Keep it out of every repo."
   ]
  },
  {
   "id": "d29",
   "day": 29,
   "title": "Tell the story",
   "goal": "Five answers you can give in under two minutes each, with numbers.",
   "tasks": [
    {
     "id": "d29-1",
     "text": "A pipeline program you built from the ground up",
     "done": false
    },
    {
     "id": "d29-2",
     "text": "A trade-off behind something you built, bought or simplified",
     "done": false
    },
    {
     "id": "d29-3",
     "text": "How you check quality and handle errors in an AI workflow",
     "done": false
    },
    {
     "id": "d29-4",
     "text": "What you would expand and what you would stop",
     "done": false
    },
    {
     "id": "d29-5",
     "text": "What you would need from sales before launch",
     "done": false
    },
    {
     "id": "d29-6",
     "text": "Say each one out loud once",
     "done": false
    },
    {
     "id": "d29-7",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "When a question has a number in it, the number comes first, then the mechanism.",
    "Rehearse one answer at a time and change one thing per pass. A long list of fixes mostly teaches you to second-guess yourself."
   ]
  },
  {
   "id": "d30",
   "day": 30,
   "title": "Ship it and pass it on",
   "goal": "The month is public, and the next step is written down.",
   "tasks": [
    {
     "id": "d30-1",
     "text": "Make sure the tracker, the repos and the case study are public and linked to each other",
     "done": false
    },
    {
     "id": "d30-2",
     "text": "Write down one test for the next month: the assumption, what would count as a result, when you will check",
     "done": false
    },
    {
     "id": "d30-3",
     "text": "If you are job hunting: send a batch of applications with these materials and treat the response as that test",
     "done": false
    },
    {
     "id": "d30-4",
     "text": "Add your own lessons to this plan and share your fork",
     "done": false
    },
    {
     "id": "d30-5",
     "text": "Update the tracker (tick tasks in plan.js, commit, push)",
     "done": false
    }
   ],
   "lessons": [
    "Decide what counts as a result before you look. It keeps a quiet first week from being read as a verdict."
   ]
  }
 ],
 "tools": [
  {
   "group": "Build & deploy",
   "id": "git",
   "name": "Git & GitHub",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "gh",
   "name": "GitHub CLI",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "vscode",
   "name": "VS Code",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "workers",
   "name": "Cloudflare Workers / wrangler",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "cfqueue",
   "name": "Cloudflare Queues & KV",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "actions",
   "name": "GitHub Actions (CI)",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "mermaid",
   "name": "Mermaid diagrams",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "llm",
   "name": "An LLM API",
   "usedDay": null
  },
  {
   "group": "Product analytics",
   "id": "posthog",
   "name": "PostHog",
   "usedDay": null
  },
  {
   "group": "CRM & automation",
   "id": "hs-props",
   "name": "HubSpot properties",
   "usedDay": null
  },
  {
   "group": "CRM & automation",
   "id": "hs-api",
   "name": "HubSpot API & webhooks",
   "usedDay": null
  },
  {
   "group": "CRM & automation",
   "id": "hs-seq",
   "name": "HubSpot Sequences",
   "usedDay": null
  },
  {
   "group": "CRM & automation",
   "id": "zapier",
   "name": "Zapier",
   "usedDay": null
  },
  {
   "group": "CRM & automation",
   "id": "slack",
   "name": "Slack app or webhook",
   "usedDay": null
  },
  {
   "group": "Outbound & deliverability",
   "id": "mailboxes",
   "name": "Sending domain & mailboxes",
   "usedDay": null
  },
  {
   "group": "Outbound & deliverability",
   "id": "dns",
   "name": "DNS: SPF / DKIM / DMARC",
   "usedDay": null
  },
  {
   "group": "Outbound & deliverability",
   "id": "mxtoolbox",
   "name": "MXToolbox",
   "usedDay": null
  },
  {
   "group": "Outbound & deliverability",
   "id": "apollo",
   "name": "Apollo",
   "usedDay": null
  },
  {
   "group": "Outbound & deliverability",
   "id": "clay",
   "name": "Clay",
   "usedDay": null
  },
  {
   "group": "Data layer",
   "id": "bigquery",
   "name": "BigQuery",
   "usedDay": null
  },
  {
   "group": "Data layer",
   "id": "sql",
   "name": "SQL",
   "usedDay": null
  },
  {
   "group": "Data layer",
   "id": "dbt",
   "name": "dbt Core",
   "usedDay": null
  },
  {
   "group": "Data layer",
   "id": "looker",
   "name": "Looker Studio",
   "usedDay": null
  }
 ]
};
