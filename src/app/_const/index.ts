import { Path } from '@/app/_types'

export const PathMap = {
  home: () => '/',
  allPosts: () => '/posts/all',
  vinylPosts: () => '/posts/vinyl',
  zennPosts: () => '/posts/zenn',
  postDetail: (id: string) => `posts/${id}`,
  tagsPosts: (tag: string) => `/posts/tags/${tag}`
} as const

export const PostsNavPaths = [
  { href: PathMap.allPosts(), title: 'All' },
  { href: PathMap.vinylPosts(), title: 'Vinyl' },
  { href: PathMap.zennPosts(), title: 'Zenn' }
] as const satisfies Readonly<Path[]>

export const HeaderNavPaths = [
  { href: PathMap.home(), title: 'Home' },
  { href: PathMap.allPosts(), title: 'Posts' }
] as const satisfies Readonly<Path[]>
