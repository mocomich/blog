import { GetListRequest, GetListDetailRequest } from 'microcms-js-sdk'
import { client } from '@/app/_libs/microcms'
import { PostType } from '@/app/_types'

const ENDPOINT = 'blogs' as const

export async function getPostList({
  customRequestInit = {
    next: { revalidate: 60 }
  },
  queries
}: Pick<GetListRequest, 'queries' | 'customRequestInit'>) {
  const res = await client.getList<PostType>({
    endpoint: ENDPOINT,
    customRequestInit,
    queries
  })

  return res
}

export async function getPostDetail({
  customRequestInit = {
    next: { revalidate: 60 }
  },
  contentId,
  queries
}: Pick<GetListDetailRequest, 'contentId' | 'queries' | 'customRequestInit'>) {
  const res = await client.getListDetail<PostType>({
    endpoint: ENDPOINT,
    customRequestInit,
    contentId,
    queries
  })

  return res
}
