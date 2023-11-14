import { PostType } from '@/app/_types'

export const postsFixture = (num: number): PostType[] => {
  return [...new Array(num)].map((_, i) => ({
    id: `${i}`,
    title: `Test Title ${i}`,
    excerpt: '',
    url: 'http',
    body: 'test',
    tags: [
      { id: `nextjs`, name: 'Next.js' },
      { id: `react`, name: 'React' }
    ],
    domain: ['zenn.dev'],
    updatedAt: '2022',
    publishedAt: '202'
  }))
}
