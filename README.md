# Chocolate Sculptress

Source code for [chocolatesculptress.com](https://chocolatesculptress.com) which an archive site for [Emily McCracken's](https://emilymccracken.com) chocolate art portfilio. Built and maintained by [Scott McCracken](https://scottmccracken.net).


## Tech Stack

- **[Astro](https://astro.build/)** as a static site generator
- **[Netlify](https://netlify/app)** for hosting
- **[Cloudinary](https://cloudinary.com/)** for assets

## Local Development

Install the packages and run the dev server

```bash
pnpm install
pnpm dev
```

To pull assets from a [Cloudinary](https://cloudinary.com/) account, you'll need to define the following keys in an `.env` file:

`
PUBLIC_CLOUDINARY_CLOUD_NAME=xxxxxx
PUBLIC_CLOUDINARY_API_KEY=xxxxxx
CLOUDINARY_API_SECRET=xxxxxx
`

## CI/CD

A [GitHub Actions](https://github.com/features/actions) workflow runs on every push and pull request to `main`. It builds the site and validates the HTML.

## Accessibility

The code is automatically tested for accessibility violations using the [WCAG 2.2 AA specification](https://www.w3.org/TR/WCAG22/). With that said, automated scanning only catches about 30% of actual accessibility violations so I also conduct manual testing. Please [file an issue](https://github.com/smccracken/chocolatesculptress.com/issues) if you ever have trouble accessing content on this site.
