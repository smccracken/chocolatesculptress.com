import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sculptures = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sculptures" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { sculptures };
