const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function toDateTime(value) {
  if (value instanceof Date) {
    return DateTime.fromJSDate(value, { zone: "utc" });
  }
  if (typeof value === "string") {
    return DateTime.fromISO(value, { zone: "utc" });
  }
  return DateTime.invalid("Invalid date value");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

module.exports = function (eleventyConfig) {
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItFootnote);

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("./src/assets/css/");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const dt = toDateTime(dateObj);
    if (!dt.isValid) {
      console.warn("readableDate: invalid date", dateObj);
      return "Undated";
    }
    return dt.toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("monthYear", (dateObj) => {
    const dt = toDateTime(dateObj);
    if (!dt.isValid) {
      console.warn("monthYear: invalid date", dateObj);
      return "";
    }
    const now = DateTime.now().setZone("utc");
    if (dt.year === now.year) {
      return dt.toFormat("LLL");
    }
    return dt.toFormat("LLL ''yy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    const dt = toDateTime(dateObj);
    if (!dt.isValid) {
      console.warn("htmlDateString: invalid date", dateObj);
      return "";
    }
    return dt.toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("slug", (value) => slugify(value));

  function isNote(item) {
    if (item.data.type === "note") return true;
    return Array.isArray(item.data.tags) && item.data.tags.includes("notes");
  }

  eleventyConfig.addCollection("notes", (collectionApi) => {
    return collectionApi
      .getAllSorted()
      .filter((item) => isNote(item))
      .reverse();
  });

  eleventyConfig.addCollection("latestPosts", (collectionApi) => {
    return collectionApi
      .getAllSorted()
      .filter((item) => isNote(item))
      .reverse();
  });

  eleventyConfig.addCollection("featured", (collectionApi) => {
    const latestNotes = collectionApi
      .getAllSorted()
      .filter((item) => isNote(item))
      .reverse();
    const latestNoteUrls = new Set(
      latestNotes.slice(0, 5).map((item) => item.url)
    );
    return collectionApi
      .getAll()
      .filter((item) => item.data.featured && !latestNoteUrls.has(item.url))
      .sort((a, b) => (a.data.featuredRank || 999) - (b.data.featuredRank || 999));
  });

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagSet = new Set();
    const reserved = new Set(["all", "nav", "post", "posts", "note"]);
    collectionApi.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (!reserved.has(tag)) tagSet.add(tag);
      });
    });
    return Array.from(tagSet).sort();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/"
  };
};
