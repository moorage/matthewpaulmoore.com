---
layout: layouts/post.njk
title: The Measure of Slow Reading
subtitle: On pace, attention, and the width of a paragraph
date: 2026-01-12
type: essay
tags: [reading, typography, attention]
plot: bookish
featured: true
featuredRank: 1
---

A good page is not a sprint. It is a path laid out with a pace in mind, each sentence a footfall and each paragraph a pause.[^pace] The right measure, on a screen or on paper, is less about decoration and more about a steady rhythm that invites the next line.

> We do not move through a text; the text moves through us, and we notice its weather.

The measure of a line is a promise. When the column is too wide, the eyes must work to find the next line; when it is too narrow, the thought is chopped into hasty pieces. Between them is a corridor of about 62 to 72 characters, where the sentence can breathe.

You can see the rhythm in the structure of the page. The margin is a kind of silence. The line height is the tempo. The indent is a bow of greeting at the start of a new paragraph. When these elements agree, the reader can forget the scaffolding and enter the room.

<div class="pullquote">
  <p>Reading is a choreography of return: from line to line, from thought to thought.</p>
</div>

Consider how even a small ornament, used sparingly, can mark a change of pace. A fleuron between sections functions like a breath. It does not distract; it shows the reader that the writer cares about the journey.

```
function measureLine(text) {
  const words = text.split(/\s+/).length;
  return Math.round(words / 12);
}
```

The code above is not the point, but it shows how we might count a breath: a rough estimate of words per line, a way to keep track of rhythm as we compose.

[^pace]: Pace is not speed. It is the shape of attention, the distance between glances, the ease with which the mind returns to the line.
