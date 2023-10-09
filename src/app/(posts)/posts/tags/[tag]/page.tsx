import { Posts } from '@/app/(posts)/_components/CardPosts'
import { Pagination } from '@/app/(posts)/_components/Pagination'
import { PerPage } from '@/app/(posts)/_const'
import { getPostList } from '@/app/(posts)/server/posts'
import { PathMap } from '@/app/_const'

type Props = {
  params: {
    tag: string
  }
}

export const revalidate = 60

export default async function Page({ params }: Props) {
  const { tag } = params

  const { contents: posts, totalCount } = await getPostList({
    limit: PerPage,
    filters: `tags[contains]${tag}`
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={1} basePath={PathMap.tagsPosts(tag)} />
    </>
  )
}
