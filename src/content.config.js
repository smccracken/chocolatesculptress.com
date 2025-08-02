import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: z.object({
    tags: z.array(z.string()),
    title: z.string(),
    date: z.date(),
    slug: z.string(),
  }),
});

const sculptures = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sculptures" }),
  schema: z.object({
    date: z.date(),
    description: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()),
    title: z.string(),
    thumbnail: z.string()
  }),
});

const sculptureImages = defineCollection({
  loader: cldAssetsLoader({
    context: true,
    folder: 'chocolate/sculptures',
    limit: 210
  })
});

const topics = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/topics" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { posts, sculptures, sculptureImages, topics };
