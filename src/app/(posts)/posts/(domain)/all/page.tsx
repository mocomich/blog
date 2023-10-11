import { Posts } from '@/app/(posts)/_components/CardPosts'
import { Pagination } from '@/app/(posts)/_components/Pagination'
import { PerPage } from '@/app/(posts)/_const'
import { getPostList } from '@/app/(posts)/server/posts'
import { PathMap } from '@/app/_const'

export default async function Page() {
  const { contents: posts, totalCount } = await getPostList({
    queries: {
      limit: PerPage
    }
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={1} basePath={PathMap.allPosts()} />
    </>
  )
}
