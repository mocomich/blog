import * as React from 'react'
import { PathMap } from '@/app/_const'
import { AnchorButton } from '@/components/AnchorButton'
import { HeadGroup } from '@/components/HeadGroup'

export const HeaderWithLink = ({ title }: { title: string }) => {
  return (
    <HeadGroup title={title} variant={'h1'} as={'h2'}>
      <AnchorButton href={PathMap.allPosts()}>All POSTS</AnchorButton>
    </HeadGroup>
  )
}

export const Header = ({ title }: { title: string }) => {
  return <HeadGroup title={title} variant={'h1'} as={'h2'} />
}
