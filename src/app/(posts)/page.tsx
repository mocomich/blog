import { HeaderWithLink } from './_components/Header'
import { PostList } from './_components/Posts'

export default function Home() {
  return (
    <section aria-label="記事一覧" className="space-y-12 py-8">
      <HeaderWithLink title="Current" />
      <PostList />
    </section>
  )
}
