const markdown = require('markdown-it')({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  }).use(require('markdown-it-anchor'), {
    level: [2, 3],
    permalink: false,
  });

module.exports = function({src, alt = '', caption = '', figclass = '', ratio = '16/9', breakout = false, lazyload = false}) {
    const img = `
<figure${figclass ? ` class="${figclass}"` : ''}>
<div style="--aspect-ratio: ${ratio};">
<img src="${src}" alt="${alt}" ${lazyload ? ` loading="lazy"` : ''} />
</div>
${caption
? `<figcaption class="u-text-center">${markdown.renderInline(caption)}</figcaption>`
: ''}
</figure>
    `;
    return `
${breakout
? `<div class="u-breakout">
<div class="o-container o-container--lg">
${img}
</div>
</div>`
: img}
`;
  };