import * as React from 'react'
import { VariantProps } from 'cva'
import Link from 'next/link'
import { PathMap } from '@/app/_const'
import { PostType } from '@/app/_types'
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
          <Link
            aria-labelledby={post.title}
            href={post.domain[0] === 'zenn.dev' ? post.url : PathMap.postDetail(post.id)}
            target={post.domain[0] === 'zenn.dev' ? '_blank' : undefined}
          >
            <Post variant={getVariant(i)} title={post.title} domain={post.domain} publishedAt={post.publishedAt} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
