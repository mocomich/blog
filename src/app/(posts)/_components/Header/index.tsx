import * as React from 'react'
import { AnchorButton } from '@/components/AnchorButton'
import { HeadGroup } from '@/components/HeadGroup'

export const HeaderWithLink = ({ title }: { title: string }) => {
  return (
    <HeadGroup title={title} variant={'h1'} as={'h2'}>
      <AnchorButton href={'/posts/all'}>All Posts</AnchorButton>
    </HeadGroup>
  )
}

export const Header = ({ title }: { title: string }) => {
  return <HeadGroup title={title} variant={'h1'} as={'h2'} />
}
