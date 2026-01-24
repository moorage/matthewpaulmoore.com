---
layout: layouts/post.njk
title: The 5 roles of product development
date: 2016-01-26
type: note
subtitle: Because products do not ship themselves, despite what the roadmap says.
tags:
  - product management
  - software engineering
  - startups
---
*No matter how many (or few) people you have on your team, be sure to have each role tied to a* [*Directly Responsible Individual*](http://chemjobber.blogspot.com/2011/10/apples-corporate-innovation-directly.html)*.*

![](/assets/images/notes/the-5-roles-of-product-development/1*bxZbvMSAj9PZSE2UCpI3yw.png)

*(1) **Strategy**, building the right thing at the right time; (2) **Engineering**, building it right; (3) **Marketing**, getting as many people to use the product as possible; (4) **Analytics**, goals that are objective rather than subjective, and how the product is progressing against them; and (5) **Operations**, the continuous struggle to accomplish more in the same amount of time per team member.*

I’ve been launching internet products for more than 15 years now (yikes), in product development teams both large and small. Several times, it was just myself (not recommended), and once it was with nearly one hundred people within a much larger company–but mostly, with groups somewhere in-between. However, regardless of the team size, the product was never successful unless there was a “*DRI*”, or [Directly Responsible Individual](http://chemjobber.blogspot.com/2011/10/apples-corporate-innovation-directly.html) assigned to each of the 5 roles above. If your product development team doesn’t specifically assign at whom the ‘buck stops’ for each of those roles, the will be breakdowns during the development process. And the larger the product team, the harder breakdowns are to recover from, from what I’ve observed.

The first thing most many of you undoubtedly will notice is that there is a glaring omission: ***User Design*** *(UI/UX/VizD)*. I left this out intentionally; I think that User Design should be heavily embedded, horizontally, across the stack. It should influence the goals of selecting the right thing to make, building it right, *and* getting as many people to use it as possible. From what I’ve observed, product development teams that shunt off a “User Design Roles & Goals” to its own silo-ed division have failed. So embed User Design across all roles, in whatever way suits your team best.

## Definitions

**Strategy of building the right thing at the right time**: This is the classical definition of product management. In startups, this is usually “DRI’ed” by (one of) the founders, perhaps at the time of founding. In large corporations, it’s usually within the Product Management division.

Strategy is perhaps the least trainable parts of product development. Being an avid fan of Steve Jobs, I like to think of it as what he termed skating to “where the puck is *going to be*”, a Wayne Gretzky reference. Another way he put it was aiming to “make a leapfrog product” rather than an iterative one. For fans of [Peter Thiel, it is the law of 10x](http://www.amazon.com/gp/product/0804139296/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0804139296&linkCode=as2&tag=matthewpaulmo-20&linkId=JZ4I22ELH3B6MCCQ), or creating a product an order of magnitude better than the competition. The [Blue Ocean Strategy](http://www.amazon.com/gp/product/1625274491/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1625274491&linkCode=as2&tag=matthewpaulmo-20&linkId=7VNQS5IWBK4GTGLD) and [Disruptive Innovation](http://www.amazon.com/gp/product/B008527PTO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008527PTO&linkCode=as2&tag=matthewpaulmo-20&linkId=ZJA7B4QGBIJPO44Z) take another angle on timing.

**Engineering correctly, a.k.a. building it right**: The right implementation for the product depends highly on what stage the product is at. Engineering a product creation scenario is 100% about tradeoffs. One way to think about the tradeoff is durability vs. malleability; the more durable / predictable / comprehensive you make the product’s feature-set, the less malleable you make the product’s feature-set, per unit of engineering time.

This is why [Customer Development](http://www.amazon.com/gp/product/0989200507/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0989200507&linkCode=as2&tag=matthewpaulmo-20&linkId=HLV7SAPMBANLV2MO) and the [Lean Startup](http://www.amazon.com/gp/product/0307887898/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0307887898&linkCode=as2&tag=matthewpaulmo-20&linkId=46DVAJKDCODO2RXP) created build-measure-learn cycles to ensure that the feature-set is *iteratively* more and more baked. Unused features are a huge liability because every line of code is a potential bug! If you don’t know exactly where the puck is going yet, then don’t architect for completeness. Chase scalability *bottlenecks* when they actually happen, rather than try to get in-front of *all* of them–you can’t possibly predict them all accurately.

**Marketing, sales, advertising, and getting as many users of your product as possible**: This is a widely varied role, recently referred to as “Growth”. It can cover anything from [training a b2b sales team](http://www.amazon.com/gp/product/1119047072/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1119047072&linkCode=as2&tag=matthewpaulmo-20&linkId=QJIJBTMNXX436SWC), to [viral coefficients](https://www.quora.com/What-is-the-definitive-way-to-calculate-viral-coefficient-for-a-social-game), and [User Accounting](https://designerfund.com/bridge/to-drive-growth-dive-into-data/). However, the goal is simple: how do you systematically and scalable-y get more people using your product?

Luckily, there are plenty of free training resources, and I would hope that every member of a product development team at least become somewhat versed in the possible strategies. As a foundation, my favorite concept is [User Accounting](https://designerfund.com/bridge/to-drive-growth-dive-into-data/). These days, [Inbound Marketing & content marketing](http://www.amazon.com/gp/product/125958965X/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=125958965X&linkCode=as2&tag=matthewpaulmo-20&linkId=JZHVEFERQCKMGB2H) are certainly good to know as well. In the end, everything comes down to [aggregate Customer Lifetime Value (LTV) vs. aggregate Customer Acquisition Cost (CAC)](http://www.slideshare.net/SarahWilzMEd/cacltv-workshop-redgranite62414pptx).

**Analytics of the objective goals and progress against them**: “That which is measured, improves” says [Peter Drucker](http://www.amazon.com/gp/product/0061345016/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0061345016&linkCode=as2&tag=matthewpaulmo-20&linkId=G7BBIEGIRYGVJ5LR). Half a century earlier, the same thing was true, even with steel workers, [showed Charles M. Schwab](http://www.businessinsider.com/how-charles-schwab-got-his-workers-to-produce-more-steel-2013-7). Every launch should have a measurable goal from which to learn and improve. Intel and Google use [OKRs](https://en.wikipedia.org/wiki/OKR), rooted in [Peter Drucker’s Management by Objectives](https://en.wikipedia.org/wiki/Management_by_objectives).

These days, analytics is also called data science and business intelligence. Luckily, platforms for multivariate testing and querying data are making analysis easier. Just be careful that you fully understand statistical significance and selection bias! Regardless of what you decide to use, a DRI should make sure you’re actually making use of it.

**Operations**: In an age with decreasing capital cost and increasing labor cost, specialized employee time is the scarcest resource. Do everything you can to avoid squandering any of it. The trick is to spend the most time on what will set your product’s key-differentiators, and partner, ignore or outsource work on everything else.

Virtual assistants, crowdsourcing, and process automation software, and communication software improvements should all be regularly considered. Most teams without a DRI get stuck doing things the way they always have, and get out-competed by more agile competitors.

## Implementing Roles Within a Team

Deciding which team member should be accountable for which role(s) is correlated to team size. At many startups, one or two founders take on the responsibility for all five roles. Famously on the Apple I (*not* II), marketing was handled by Jobs, and engineering by Wozniak. Even product strategy and operations was largely driven by Wozniak, according to most public accounts. Analytics were pretty self-explanatory at that time, since it was a function of sales numbers vs. production numbers.

For the most mature products with a lot of users and/or revenue, you’ll probably have a one-to-one relationship between role and people; there’s just a lot of complexity to manage. A Product Manager can own strategy, a Tech. Lead can own engineering, a Product Marketing Manager can own growth, a Product Analyst can own analytics, and a Project Manager can own operations.

For product development team of medium size, the roles are most successfully divvied out to the most skilled people in those areas. For example, a PM might take on strategy and marketing, whereas the Tech. Lead would take Engineering, Analytics, and a project manager could take Operations.

One major question that product development organizations usually have to grapple with at scale is: do Product Managers work more closely with Product Marketing or the Tech. Lead? I hate this decision, but it’s forced by specialization. Worst-case, I like to have a PM, PMM, and Tech. Lead all sitting together; or at least having bi-weekly chats & reviews.

In a more ideal world, the leader of every product development team would be amazing; they would simultaneously understand the marketing, product strategy, and a huge amount of the technology as well. The most successful product leaders seem to have been able to cross these boundaries incredibly well: Steve Jobs, Bill Gates, Mark Zuckerberg, and Elon Musk for example. Of course, they also spent an incredibly high percentage of their waking hours learning and honing these skills, starting from a young age.

## *Designing* Teams of People (or, Let’s Emulate the Beatles)

One thing that’s particularly bothered me about product development teams in the Silicon Valley, is how they are formed. By and large, companies here tend to hire similarly-skilled product managers in the product org., similarly-skilled tech. leads in the engineering org., and similarly-skilled marketing leads in the marketing org., relatively separately. When it comes time to form a new a new product development team, members are selected from this pre-existing pool of talent, based largely on interest in the product (or worse, by availability). We get a roughly-correct division of skill, but little analysis of the resulting team combination, in terms of how the strengths and weaknesses of the individuals play out with each other.

I hope we can start to design product development teams very differently. Where we look for specifically complementary personality traits, weaknesses, and abilities of the individuals within them, and what is needed for the product that’s being made. That way, we can keep our Silicon Valley [cluster of creative genius](http://www.amazon.com/gp/product/1501124595/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1501124595&linkCode=as2&tag=matthewpaulmo-20&linkId=X442FOC2Y67W5XI3) going for years to come.

You can see this team design play out in sports easily, but since they don’t produce products, I like to study teams the way Steve Jobs did: to look at how The Beatles combined. Separately, they were each skilled at their instruments; but they also had strengths and weaknesses in creating hits. As they created, *and iterated*, on each song, they would leverage each of their strengths, but they would–just as importantly–keep each others’ weaknesses in check. And in music, just like product development teams, time is a factor in makeup as well–a ‘fab four’ of today’s music probably wouldn’t have the same people in them.

## DRIs, OKRs, and the 5 Roles

If there’s nothing else I’ve managed to impart from my experiences making products, I hope that this angle on product development can help save time for you and members of your team. When it comes to product development, there’s nothing more demoralizing than a product that doesn’t make it for organizational reasons.

At the outset, each team member should clear know which of their a\*\*es is on the hook for what, all 5 roles should be covered by at least one person, status on all fronts should be regularly reviewed. If your product development team can do that, it should be able to avoid a lot of the mistakes I’ve learned the hard way!

In my subsequent post “[PBTs + DRIs + OKRs = ZOMG](/notes/tpts-dris-okrs-zomg/)”, I cover ideas on how to actually implement these ideas on an day-to-day basis.


<img class="ornament" src="{{ '/assets/ornaments/rule.svg' | url }}" alt="" aria-hidden="true" />

*by Matthew Moore in Cupertino, CA on Monday January 25, 2016*

Thanks to [Drake Mosier](https://www.linkedin.com/in/drake-mosier-30078) for feedback.
