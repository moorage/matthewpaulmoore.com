const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
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
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("slug", (value) => slugify(value));
  eleventyConfig.addFilter("wherePlot", (items, plot) => {
    return items.filter((item) => item.data.plot === plot);
  });


  eleventyConfig.addCollection("essays", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => item.data.type === "essay")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("notes", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => item.data.type === "note")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => item.data.type === "project")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("latestPosts", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => ["essay", "note", "project"].includes(item.data.type))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("featured", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => item.data.featured)
      .sort((a, b) => (a.data.featuredRank || 999) - (b.data.featuredRank || 999));
  });

  eleventyConfig.addCollection("plotList", (collectionApi) => {
    const plots = new Set();
    collectionApi.getAll().forEach((item) => {
      if (item.data.plot) plots.add(item.data.plot);
    });
    return Array.from(plots).sort();
  });

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagSet = new Set();
    const reserved = new Set(["all", "nav", "post", "posts", "essay", "note", "project"]);
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
