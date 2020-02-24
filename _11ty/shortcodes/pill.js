module.exports = (str, url) => {
    if (url) {
      return `
        <a class="c-pill" href="${url}">${str}</a>
      `;
    }
    return `
      <span class="c-pill">${str}</span>
    `;
  };