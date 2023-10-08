import * as React from 'react'
import { VariantProps } from 'cva'
import Link from 'next/link'
import { PostType } from '@/app/_types'
import { getPostList } from '../../server/posts'
import { bookVariants } from '../Book'
import { Post } from './Post'

export const Posts = ({ posts }: { posts: PostType[] }) => {
  type Result = NonNullable<VariantProps<typeof bookVariants>['variant']>
  function getVariant(num: number): Result {
    const remainder = num % 3
    if (remainder !== 0 && remainder !== 1 && remainder !== 2) {
      throw Error('Error num')
    }
    switch (remainder) {
      case 0:
        return 'primary'
      case 1:
        return 'secondary'
      case 2:
        return 'tertiary'
    }
  }
  return (
    <ul className="flex w-full overflow-x-scroll py-6">
      {posts.map((post, i) => (
        <li key={post.id} className="mx-auto max-w-[300px] px-8">
          <Link aria-label={post.title} href={`/posts/${post.url}`}>
            <Post variant={getVariant(i)} title={post.title} domain={post.domain} publishedAt={post.publishedAt} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export const PostList = async () => {
  const { contents: posts } = await getPostList({ limit: 4 })
  return <Posts posts={posts} />
}
