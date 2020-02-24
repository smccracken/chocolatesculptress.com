module.exports = function(id, lazyload = false, fullWidth = false) {
    return `
      <figure${fullWidth ? ` class="o-content__fullWidth"` : ''} style="--aspect-ratio: 16/9;">
        <iframe${
          lazyload ? ` loading="lazy"` : ''
        } width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </figure>
    `;
  };