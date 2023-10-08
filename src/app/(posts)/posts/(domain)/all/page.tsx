import { PostList } from '@/app/(posts)/_components/CardPosts'
import { SearchParams } from '@/app/_types'

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <PostList searchParams={searchParams} />
}
