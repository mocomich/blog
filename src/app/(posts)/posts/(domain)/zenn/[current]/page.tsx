import { Posts } from '@/app/(posts)/_components/CardPosts'
import { Pagination } from '@/app/(posts)/_components/Pagination'
import { PerPage } from '@/app/(posts)/_const'
import { getPostList } from '@/app/(posts)/server/posts'
import { PathMap } from '@/app/_const'

type Props = {
  params: {
    current: string
  }
}

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10)
  const filters = `domain[contains]zenn`
  const { contents: posts, totalCount } = await getPostList({
    customRequestInit: { next: { revalidate: 60 } },
    queries: {
      limit: PerPage,
      offset: PerPage * (current - 1),
      filters
    }
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={current} basePath={PathMap.zennPosts()} />
    </>
  )
}
