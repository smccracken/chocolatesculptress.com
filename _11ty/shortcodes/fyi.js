const fs = require('fs');
const markdown = require('markdown-it')({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  }).use(require('markdown-it-anchor'), {
    level: [2, 3],
    permalink: false,
  });

module.exports = (content, icon = 'fyi') => {
    const iconContent = fs.readFileSync(`./_src/_includes/icons/${icon}.svg`)
    return `
<aside class="c-fyi u-full-bleed">
<div class="u-full-bleed__container">
<div class="u-full-bleed__icon" aria-hidden="true">
${iconContent}
</div>
<div class="u-full-bleed__content u-linear">${markdown.render(content)}</div>
</div>
</aside>
    `;
};