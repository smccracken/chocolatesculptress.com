const markdown = require('markdown-it')({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  }).use(require('markdown-it-anchor'), {
    level: [2, 3],
    permalink: false,
  });

module.exports = function({ text, cite, size }) {
    return `
      <figure class="c-quote u-margin-bottom-2">
        <blockquote class="c-quote__text${size ? ` c-quote__text--${size}` : ''}">
          <p>${markdown.renderInline(text)}</p>
        </blockquote>
        ${cite
          ? `<figcaption class="c-quote__cite${
              size ? ` u-text-align-right` : ''
            }"><cite>${markdown.renderInline(cite)}</cite></figcaption>`
          : ''}
      </figure>
    `;
  };