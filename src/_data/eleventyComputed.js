function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

module.exports = {
  readTime: (data) => {
    const raw = data.page && data.page.templateContent ? data.page.templateContent : "";
    if (!raw) return 0;
    const text = stripHtml(raw);
    if (!text) return 0;
    const words = text.split(" ").length;
    return Math.max(1, Math.round(words / 220));
  }
};
