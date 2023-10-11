import { Posts } from './_components/BookPosts'
import { HeaderWithLink } from './_components/Header'
import { getPostList } from './server/posts'

export default async function Home() {
  const { contents: posts } = await getPostList({ queries: { limit: 4 } })
  return (
    <section aria-label="記事一覧" className="space-y-12 py-8">
      <HeaderWithLink title="Current" />
      <Posts posts={posts} />
    </section>
  )
}
