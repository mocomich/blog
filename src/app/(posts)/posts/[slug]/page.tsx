import { Metadata } from 'next'
import { getPostDetail } from '../../server/posts'
import { Content } from './_components/Content'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostDetail({ contentId: params.slug })

  return {
    title: post.title,
    description: post.excerpt
  }
}

export default async function Page({ params }: Props) {
  const post = await getPostDetail({ contentId: params.slug })

  return (
    <article className="py-12" aria-label="記事詳細">
      <Content {...post} />
    </article>
  )
}
