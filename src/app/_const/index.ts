import { Path } from '@/app/(posts)/_types'

export const PostsNavPaths = [
  { href: '/posts/all', title: 'All' },
  { href: '/posts/all/vinyl', title: 'Vinyl' },
  { href: '/posts/all/zenn', title: 'Zenn' }
] as const satisfies Readonly<Path[]>

export const HeaderNavPaths = [
  { href: '/', title: 'Home' },
  { href: '/posts/all', title: 'Posts' }
] as const satisfies Readonly<Path[]>