---
layout: layouts/post.njk
title: TPTs + DRIs + OKRs = ZOMG
date: 2016-04-21
type: note

featured: true
subtitle: The best structure I’ve come up with to run a product development & marketing team (so far).
tags:
  - product management
  - startups
  - software engineering
---

Something funny inevitably happens when a product development team grows to 20–30 people: the process (or lack-thereof) that used to work, completely disintegrates. The left hand doesn’t know what the right hand is doing, misaligned choices are made, and frustration almost always tends to creep in. I think this is a common breaking point because there is too much productivity for a central person (e.g. CEO or VP) to keep in mind, be available for, and coordinate.

I’ve tried different mixes of organizational strategies to combat this at my own startups, at medium and large companies like Google, and in companies I’ve advised. The magic combination I’ve found to work best (although never perfectly) is:

> [**Two Pizza Teams**](http://blog.idonethis.com/two-pizza-team/) of people fed by 2 pizzas max, *comprising* [**Directly Responsible (Cross-Functional) Individuals**](http://www.forbes.com/sites/quora/2012/10/02/how-well-does-apples-directly-responsible-individual-dri-model-work-in-practice/#1d0459db704b) for task shepherding, *held accountable by* [**Objectives & Key Results**](https://library.gv.com/how-google-sets-goals-okrs-a1f69b0b72c7#.2l351i1hf).

Of course, if you clicked on the links above, I came up with zero of those ideas. I’ve borrowed PBTs from Jeff Bezos, DRIs from Apple, and OKRs from Intel and Google (originally called [MBO](https://en.wikipedia.org/wiki/Management_by_objectives) by Peter Drucker). Let me dive in to how the best teams I’ve been on actually use all of these practices together.

## Squad Composition

I like to call Two Pizza Teams “squads”. I’m sure you can come up with a better name, but that’s how I’ll refer to them throughout the rest of this article. Squads should be at most 10 people, and be highly cross functional.

In [Creativity, Inc.](http://www.amazon.com/gp/product/0812993012/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812993012&linkCode=as2&tag=matthewpaulmo-20&linkId=ZEFHQ2I7RQBLD4GB), Ed Catmul of Pixar talks about how Production, Marketing, and Finance/Budgeting all have to be delicately balanced. I agree, and thus, I like to have members from product, engineering, marketing, and analytics (e.g. Business Intelligence) on the squad.

With regard to product roles, I wrote previously about the [5 roles of product development](https://medium.com/@m3moore/the-5-roles-of-product-development-3c45659b403e#.91wton8vd); I make sure all 5 are covered, although possibly by a single person.

When it comes to engineering on squads; I make sure that the engineering team on the squad comprises full-stack competency, so you have no outside bottlenecks. Inter-squad dependencies are recipes for failure, so avoid them at all costs.

## Setting OKRs

Let’s get one thing out of the way: nobody likes OKRs; they can turn even the most enjoyable tasks into drudgery. So why are they critical to success? Because if they’re used correctly, they get the entire squad on the same page. They lay out the common goal and let each member make intelligent 80/20 decisions on their own.

Consider the [stone cutter’s parable](http://www.anecdote.com/2008/07/the-stonecutters-cathedral-builder/): does everyone on the team know that they’re building a cathedral, or are they just chipping away on their own little rocks? Particularly in technology companies, motivation comes from autonomy, mastery, and purpose over slight increases in pay (not my research, see [Dan Pink’s TED Talk](http://www.ted.com/talks/dan_pink_on_motivation)).

First, make sure the squad can agree on what long-term success looks like. Once you’ve established what the end-game looks like, shorter-timeframe OKRs become much easier to set.

You simply work backwards identifying key assumptions and key risks. Then you turn those around into achievable milestones over time. [The Lean Startup by Eric Ries](http://www.amazon.com/gp/product/0307887898/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0307887898&linkCode=as2&tag=matthewpaulmo-20&linkId=42JHMP77RL2KMMVL) writes about this process better than I ever could; and it applies to a software product of any size, not just startups.

With regard to personal OKRs, I think you can survive without them. Squad OKRs, on the other-hand, your team shouldn’t live without.

## Running Cross Functional Meetings

The whole-squad-meeting should happen regularly; I start with once every week until the risks and assumptions are fully proven. I then move, and stick to once every two-weeks. Less whole-squad-meetings mean more gets done by each sub-function; but the cross-functional feedback time is so much slower.

So the more *fundamental* experiments you’re running, the more often you should be having meetings. The more *optimization* you’re doing, the less often you can survive without cross-functional meetings.

## Weekly Rollup Emails

Cross-Squad (e.g. multi-squad) weekly rollup emails are the most undervalued business management tool I’ve come across. They are *critically important*. In fact, let me make that stand out:

> Weekly rollup emails are critically important and woefully undervalued. You should use them on your squads.

Here’s what I mean by rollup emails: every Friday, each squad writes out their top 5 updates in bullet-point form. The multi-squad lead (e.g. a director) picks out the single most important bullet from each squad for a “summary” section at the top, listed with the DRI, and combines all bullet points in a “more details” section below.

I like sending these rollups to the entire organization, personally. The rollups keep everyone up-to-date with the drumbeat of regular progress. The “well I wasn’t told such and such” excuses will fade away too. I’ve even seen dramatic decreases in over-promising by sales because they can see all the other high-priority things currently happening.

The hard part here is discipline. It’s hard work, and the DRI for compiling the rollup (e.g. director) has to annoy people. There are also much more enjoyable things to do on a Friday. But keep it up — I promise it will reap rewards. And if some squads don’t comply, call them out on the summary area of the rollup. If they’re any good, they’ll start ;-)

## Quarterly OKR Post Mortem's

Every quarter, before/while you set your new OKRs, make time to talk about *why* the squad didn’t accomplish the last OKRs. More importantly, have the squad lead (e.g. Product Manager) share with the other squads what didn’t work.

The idea is not to point fingers, but rather to recognize anti-patterns in process. Having all squads share these shortcomings with each other expedites the learning process. Plus, it shows that all squads are in the company together, and not off in their own little fiefdom.

## Celebrating Wins

With all this focus on optimization, it’s easy to lose track of how far squads come over the long arcs of time. Don’t forget to also do a retrospective of the last 6 and 12 months every so often, too.

And if you need my advice on how to celebrate with your team, just ask them. I personally am partial to [Mezcal](https://en.wikipedia.org/wiki/Mezcal) ;-)

<img class="ornament" src="{{ '/assets/ornaments/rule.svg' | url }}" alt="" aria-hidden="true" />

*by Matthew Moore in Palo Alto, CA on Thursday April 21, 2016*

