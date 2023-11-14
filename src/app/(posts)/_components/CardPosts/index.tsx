import React from 'react'
import Link from 'next/link'
import { PathMap } from '@/app/_const'
import { PostType } from '@/app/_types'
import { Post } from './Post'

export const Posts = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="space-y-20">
      <ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              aria-labelledby={post.title}
              href={post.domain[0] === 'zenn.dev' ? post.url : PathMap.postDetail(post.id)}
              target={post.domain[0] === 'zenn.dev' ? '_blank' : undefined}
              className="hover:opacity-60"
            >
              <Post title={post.title} tags={post.tags} domain={post.domain} publishedAt={post.publishedAt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
