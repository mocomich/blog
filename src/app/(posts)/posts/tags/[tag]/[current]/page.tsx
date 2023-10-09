import { Posts } from '@/app/(posts)/_components/CardPosts'
import { Pagination } from '@/app/(posts)/_components/Pagination'
import { PerPage } from '@/app/(posts)/_const'
import { getPostList } from '@/app/(posts)/server/posts'
import { PathMap } from '@/app/_const'

type Props = {
  params: {
    current: string
    tag: string
  }
}

export const revalidate = 60

export default async function Page({ params }: Props) {
  const { tag } = params
  const current = parseInt(params.current as string, 10)
  const filters = `tags[contains]${tag}`
  const { contents: posts, totalCount } = await getPostList({
    limit: PerPage,
    offset: PerPage * (current - 1),
    filters
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={current} basePath={PathMap.tagsPosts(tag)} />
    </>
  )
}