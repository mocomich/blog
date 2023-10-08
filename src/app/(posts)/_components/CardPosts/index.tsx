import React from 'react'
import Link from 'next/link'
import { PostType } from '@/app/_types'
import { Post } from './Post'

export const Posts = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="space-y-20">
      <ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="hover:opacity-60">
              <Post title={post.title} tags={post.tags} domain={post.domain} publishedAt={post.publishedAt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
