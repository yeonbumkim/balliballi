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
      // service = 전환 동선 (어느 서비스 페이지로 보낼까). 독자용 분류가 아니다
      service: z.enum(['plumbing', 'locksmith', 'cleaning', 'moving', 'etc']),
      // category = 독자용 분류 (/blog 목록 칩). service와 역할이 다르다 — README 참고
      category: z
        .enum(['home', 'food', 'transport', 'health', 'settling-in', 'things-to-do', 'culture'])
        .optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().max(60).optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
