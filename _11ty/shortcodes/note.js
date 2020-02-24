const markdown = require('markdown-it')({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  }).use(require('markdown-it-anchor'), {
    level: [2, 3],
    permalink: false,
  });
  
module.exports = ({ label = 'Note', text = '', type = 'default', labelHidden = false, link }) => {
    return `
<div class="c-note c-note--${type}">
<p>
<span class="c-note__label${labelHidden ? ' u-hidden-visually' : ''}">${label}:</span>
${markdown.renderInline(text)}${link
? `<br><a class="btn-link" href="${link.url}">${link.text} <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" aria-hidden="true"viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></a>`
: ''}
</p>
</div>  
    `;
};