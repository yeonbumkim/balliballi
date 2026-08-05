import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 글 하나 = 폴더 하나, 본문은 항상 index.md (BLOG_GUIDE.md 참고)
const blog = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60, 'title은 60자 이내 (검색 결과에서 잘림)'),
      description: z.string().max(155, 'description은 155자 이내 (검색 결과에서 잘림)'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      service: z.enum(['plumbing', 'locksmith', 'cleaning', 'moving', 'etc']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().max(60).optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
