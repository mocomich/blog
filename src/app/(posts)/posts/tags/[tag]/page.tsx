import { Posts } from '@/app/(posts)/_components/CardPosts'
import { Pagination } from '@/app/(posts)/_components/Pagination'
import { PerPage } from '@/app/(posts)/_const'
import { getPostList, getTagList } from '@/app/(posts)/server/posts'
import { PathMap } from '@/app/_const'

type Props = {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const { contents: tags } = await getTagList({})

  return tags.map((tag) => ({ tag: tag.id }))
}

export default async function Page({ params }: Props) {
  const { tag } = params
  const filters = `tags[contains]${tag}`
  const { contents: posts, totalCount } = await getPostList({
    queries: {
      limit: PerPage,
      filters
    }
  })
  return (
    <>
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} current={1} basePath={PathMap.tagsPosts(tag)} />
    </>
  )
}
