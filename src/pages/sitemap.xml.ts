import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString() || 'https://chocolatesculptress.com';
  
  // Get all sculptures and posts
  const sculptures = await getCollection('sculptures');
  const posts = await getCollection('posts');
  
  // Get unique tags from sculptures for topic pages
  const uniqueTags = [...new Set(sculptures.map((sculpture) => sculpture.data.tags).flat())];
  
  // Static pages
  const staticPages = [
    '',
    'sculptures',
    'posts',
    'about',
    'accessibility',
  ];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${sculptures.map(sculpture => `
  <url>
    <loc>${baseUrl}${sculpture.id}</loc>
    <lastmod>${sculpture.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${baseUrl}posts/${post.id}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
  ${uniqueTags.map(tag => {
    const topicSlug = tag.replace(/\s+/g, '-').toLowerCase();
    return `
  <url>
    <loc>${baseUrl}topics/${topicSlug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
  }).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};