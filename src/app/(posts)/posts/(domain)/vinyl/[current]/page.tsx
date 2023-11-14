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

export async function generateStaticParams() {
  const { totalCount } = await getPostList({})
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(totalCount / PerPage)).map((num) => ({
    current: `${num}`
  }))

  return paths
}

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10)
  const filters = `domain[contains]tech-vinyl.com`
  const { contents: posts, totalCount } = await getPostList({
    queries: {
      limit: PerPage,
      offset: PerPage * (current - 1),
      filters
    }
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={current} basePath={PathMap.vinylPosts()} />
    </>
  )
}
