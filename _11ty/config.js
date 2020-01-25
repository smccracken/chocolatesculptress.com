const filters = require('./filters');
const shortcodes = require('./shortcodes');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function(eleventyConfig) {
  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Shortcodes
  Object.keys(shortcodes).forEach(shortCodeName => {
    eleventyConfig.addShortcode(shortCodeName, shortcodes[shortCodeName]);
  });

  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  // Collections
  eleventyConfig.addCollection('sculptures', collection => {
    return collection.getFilteredByGlob('**/sculptures/*.md').reverse();
  });

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('**/posts/*.md').reverse();
  });

  eleventyConfig.addCollection('bookmarks', collection => {
    return collection.getFilteredByGlob('**/bookmarks/*.md').reverse();
  });

  // Transforms
  eleventyConfig.addTransform('htmlmin', filters.htmlmin);

  // Passthroughs
  eleventyConfig
    .addPassthroughCopy('_src/assets')
    .addPassthroughCopy('_src/_redirects');

  // Setup
  return {
    templateFormats: ['njk', 'md', 'html'],
    dir: {
      input: '_src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
}