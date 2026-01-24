---
layout: layouts/post.njk
title: "What bothers me about Google's AppEngine"
date: 2013-04-22
type: note
subtitle: "I’ve finally realized what bothers me so much about Google’s AppEngine compared to Amazon’s AWS Suite."
tags:
  - software engineering
  - product management
---

I've finally realized what bothers me so much about Google's AppEngine compared to Amazon's AWS Suite.

AppEngine is a highly opinionated product; "use our approved stack or use another provider."  Generally, I'm a huge fan of opinionated products, because standards & conventions are fantastic for productivity.  That's why I love Apple products and the Rails web framework.

However, AppEngine is a product for hackers, who love tinkering.  For the same reason that the Apple II had to have expansion slots for hackers, AppEngine is just too constraining of a stack to be a product for web developers.

That's compounded by the fact that the majority of applications on Google's AppEngine are going to find themselves being forced to also use Google's BigTable implementation.  Well, that's a pretty huge investment on the developers' part, because BigTable isn't really a standard that's easily deployable on other cloud providers.  So if you're writing for AppEngine, you probably will have to stay on AppEngine or suffer a rewrite of your data logic layer.

If anything, AppEngine is more accurately compared to Amazon Elastic Beanstalk, not lower-level services like Amazon EC2 or Amazon OpsWorks.

AppEngine is a product/service to be sold for hackers, yet is a fully-enclosed-system that can't be tinkered with.  That means they are selling a consumer-like offering to an audience where a massive percentage of it wants to hack the hell out of it!
