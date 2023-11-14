import { getTagDetail } from '@/app/(posts)/server/posts'
import { PathMap } from '@/app/_const'
import { AnchorButton } from '@/components/AnchorButton'
import { HeadGroup } from '@/components/HeadGroup'

type Props = {
  children: React.ReactNode
  params: {
    tag: string
  }
}

export default async function Layout({ children, params }: Props) {
  const { name } = await getTagDetail({ contentId: params.tag })

  return (
    <section aria-label={`${name}の記事一覧`} className="space-y-16 py-8">
      <HeadGroup title={`${name} の記事一覧`} as={'h1'} variant={'h1'}>
        <AnchorButton href={PathMap.allPosts()}>All POSTS</AnchorButton>
      </HeadGroup>
      {children}
    </section>
  )
}
