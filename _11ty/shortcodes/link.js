const { hostname } = require('../filters');

module.exports = (url, text, external = false) => {
    return `
      <a href="${url}" class="btn-link" ${external ? 'rel="external"' : ''}>
        ${text ? text : hostname(url)}
        ${external
          ? `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" width="1em" height="1em" aria-hidden="true" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`
          : `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" aria-hidden="true" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>`}
      </a>
    `;
  };