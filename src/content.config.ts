/**
 * This file is used to define the collections.
 * @see https://docs.astro.build/en/guides/content-collections
 */

import { defineCollection, reference, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    author: z.string(),
    category: z.string(),
    pubDate: z.date(),
    relatedPosts: z.array(reference('blog')).optional(),
  }),
})

const docsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // Buat opsional karena tidak semua docs perlu description
    section: z.string().optional(), // Buat opsional karena ada docs yang mungkin tidak dalam section
    sectionOrder: z.number().optional(),
    order: z.number().optional(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
})

const changelogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    type: z.enum(['major', 'feature', 'patch']).default('patch'),
    author: z.string().optional(),
  }),
})

export const collections = {
  blog: blogCollection,
  docs: docsCollection,
  changelog: changelogCollection,
}
