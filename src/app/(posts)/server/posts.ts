import { GetListRequest, GetListDetailRequest } from 'microcms-js-sdk'
import { client } from '@/app/_libs/microcms'
import { PostType, TagType } from '@/app/_types'

export async function getPostList({
  customRequestInit = {
    next: { revalidate: 60 }
  },
  queries
}: Pick<GetListRequest, 'queries' | 'customRequestInit'>) {
  const res = await client.getList<PostType>({
    endpoint: 'blogs',
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
    endpoint: 'blogs',
    customRequestInit,
    contentId,
    queries
  })

  return res
}

export async function getTagList({
  customRequestInit = {
    cache: 'force-cache'
  },
  queries
}: Pick<GetListRequest, 'queries' | 'customRequestInit'>) {
  const res = await client.getList<TagType>({
    endpoint: 'tags',
    customRequestInit,
    queries
  })

  return res
}

export async function getTagDetail({
  customRequestInit = {
    cache: 'force-cache'
  },
  contentId,
  queries
}: Pick<GetListDetailRequest, 'contentId' | 'queries' | 'customRequestInit'>) {
  const res = await client.getListDetail<TagType>({
    endpoint: 'tags',
    customRequestInit,
    contentId,
    queries
  })

  return res
}
