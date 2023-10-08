import { PostList } from '@/app/(posts)/_components/CardPosts'
import { SearchParams } from '@/app/_types'

export default function ZennPosts({ searchParams }: { searchParams: SearchParams }) {
  return <PostList searchParams={searchParams} domain={'zenn.dev'} />
}
