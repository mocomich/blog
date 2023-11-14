import { Posts } from '@/app/(posts)/_components/CardPosts'
import { Pagination } from '@/app/(posts)/_components/Pagination'
import { PerPage } from '@/app/(posts)/_const'
import { getPostList, getTagList } from '@/app/(posts)/server/posts'
import { PathMap } from '@/app/_const'

type Props = {
  params: {
    current: string
    tag: string
  }
}

export async function generateStaticParams() {
  const { totalCount } = await getPostList({})
  const { contents } = await getTagList({})
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const currents = range(1, Math.ceil(totalCount / PerPage)).map((num) => ({ current: `${num}` }))
  const tags = contents.map((tag) => ({ tag: tag.id }))
  const paths = currents.flatMap((current) => tags.map((tag) => ({ ...current, ...tag })))

  return paths
}

export default async function Page({ params }: Props) {
  const { tag } = params
  const current = parseInt(params.current as string, 10)
  const filters = `tags[contains]${tag}`
  const { contents: posts, totalCount } = await getPostList({
    queries: {
      offset: current,
      limit: PerPage,
      filters
    }
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={current} basePath={PathMap.tagsPosts(tag)} />
    </>
  )
}
