import { Posts } from '@/app/(posts)/_components/CardPosts'
import { Pagination } from '@/app/(posts)/_components/Pagination'
import { PerPage } from '@/app/(posts)/_const'
import { getPostList } from '@/app/(posts)/server/posts'

export default async function Page() {
  const filters = `domain[contains]zenn.dev`
  const { contents: posts, totalCount } = await getPostList({
    limit: PerPage,
    filters
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={1} basePath={'/posts/zenn'} />
    </>
  )
}
