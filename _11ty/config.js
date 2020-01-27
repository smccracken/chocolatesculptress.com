const filters = require('./filters');
const shortcodes = require('./shortcodes');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

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
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Collections
  eleventyConfig.addCollection('bookmarks', collection => {
    return collection.getFilteredByGlob('**/bookmarks/*.md').reverse();
  });

  eleventyConfig.addCollection('sculptures', collection => {
    return collection.getFilteredByGlob('**/sculptures/*.md').reverse();
  });

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('**/posts/*.md').reverse();
  });

  eleventyConfig.addCollection('press', collection => {
    return collection.getFilteredByGlob('**/press/*.md').reverse();
  });

  // Transforms
  eleventyConfig.addTransform('htmlmin', filters.htmlmin);

  // Passthroughs
  eleventyConfig
    .addPassthroughCopy('_src/assets')
    .addPassthroughCopy('_src/manifest.json')
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