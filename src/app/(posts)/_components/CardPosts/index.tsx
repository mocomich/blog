import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PerPage } from '@/app/(posts)/_const'

import { getPostList } from '@/app/(posts)/server/posts'
import { getOffset } from '@/app/_libs/pagination'
import { querySchema } from '@/app/_schema'
import { PostType, SearchParams } from '@/app/_types'
import { Pagination } from '../Pagination'
import { Post } from './Post'

export const Posts = ({ posts, totalCount, current }: { posts: PostType[]; totalCount: number; current: number }) => {
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
      <Pagination totalCount={totalCount} current={current} />
    </div>
  )
}

export const PostList = async ({
  searchParams,
  domain
}: {
  searchParams: SearchParams
  domain?: PostType['domain']
}) => {
  const offset = getOffset(searchParams, querySchema)
  if (offset === undefined) {
    notFound()
  }
  const filters = domain ? `domain[contains]${domain}` : undefined
  const { contents: posts, totalCount } = await getPostList({ offset: offset * PerPage, limit: PerPage, filters })
  return <Posts posts={posts} totalCount={totalCount} current={offset + 1} />
}
