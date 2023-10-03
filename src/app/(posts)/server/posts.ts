import { MicroCMSQueries } from 'microcms-js-sdk'
import { PostType } from '@/app/(posts)/_types'
import { client } from '@/app/_libs/microcms'

export async function getPostList(queries?: MicroCMSQueries) {
  const res = await client.getList<PostType>({
    endpoint: 'blogs',
    customRequestInit: {
      cache: 'force-cache'
    },
    queries
  })

  return res
}

export async function getPostDetail(contentId: string, queries?: MicroCMSQueries) {
  const res = await client.getListDetail<PostType>({
    endpoint: 'blogs',
    customRequestInit: {
      cache: 'force-cache'
    },
    contentId,
    queries
  })

  return res
}
