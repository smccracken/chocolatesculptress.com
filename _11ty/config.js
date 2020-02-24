const filters = require('./filters');
const fyi = require('./shortcodes/fyi.js');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

// Load Shortcodes
const figure = require('./shortcodes/figure.js');
const link = require('./shortcodes/link.js');
const note = require('./shortcodes/note.js');
const pill = require('./shortcodes/pill.js');
const quote = require('./shortcodes/quote.js');
const youtube = require('./shortcodes/youtube.js');

module.exports = function(eleventyConfig) {
  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Shortcodes
  eleventyConfig.addPairedShortcode('fyi', fyi);
  eleventyConfig.addShortcode('figure', figure);
  eleventyConfig.addShortcode('link', link);
  eleventyConfig.addShortcode('note', note);
  eleventyConfig.addShortcode('pill', pill);
  eleventyConfig.addShortcode('quote', quote);
  eleventyConfig.addShortcode('youtube', youtube);

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

  eleventyConfig.addCollection("taggedSculptures", function(collection) {
    let resultArrays = {};
    collection
      .getFilteredByGlob('**/sculptures/*.md')
      .reverse()
      .forEach(function(item) {
        if(Array.isArray(item.data["tags"])) {
          for(let topicTag of item.data["tags"]) {
            if( !resultArrays[topicTag] ) {
              resultArrays[topicTag] = [];
            }
            resultArrays[topicTag].push(item);
          }
        }
    });
    return resultArrays;
  });

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('**/posts/*.md').reverse();
  });

  eleventyConfig.addCollection("taggedPosts", function(collection) {
    let resultArrays = {};
    collection
      .getFilteredByGlob('**/posts/*.md')
      .reverse()
      .forEach(function(item) {
        if(Array.isArray(item.data["tags"])) {
          for(let topicTag of item.data["tags"]) {
            if( !resultArrays[topicTag] ) {
              resultArrays[topicTag] = [];
            }
            resultArrays[topicTag].push(item);
          }
        }
    });
    return resultArrays;
  });

  eleventyConfig.addCollection('press', collection => {
    return collection.getFilteredByGlob('**/press/*.md').reverse();
  });

  // Transforms
  // eleventyConfig.addTransform('htmlmin', filters.htmlmin);

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
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
}