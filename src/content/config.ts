// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
      publishedAt: z.date().transform(d => new Date(d)).optional(),
      updatedAt: z.date().transform(d => new Date(d)).optional()
    }),
  }),
};
