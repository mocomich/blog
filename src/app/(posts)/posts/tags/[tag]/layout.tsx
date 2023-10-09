import { HeadGroup } from '@/components/HeadGroup'

type Props = {
  children: React.ReactNode
  params: {
    tag: string
  }
}

export default function Layout({ children, params }: Props) {
  const { tag } = params

  return (
    <section aria-label={`${tag}の記事一覧`} className="space-y-16 py-8">
      <HeadGroup title={`${tag} の記事一覧`} as={'h1'} variant={'h1'} />
      {children}
    </section>
  )
}
