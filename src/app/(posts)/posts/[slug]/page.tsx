import { getPostDetail } from '../../server/posts'
import { Content } from './_components/Content'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const post = await getPostDetail(params.slug)

  return (
    <article className="py-12" aria-label="記事詳細">
      <Content {...post} />
    </article>
  )
}
