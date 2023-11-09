import React from 'react'
import { DateTime } from '@/app/(posts)/_components/DateTime'
import 'highlight.js/styles/tokyo-night-dark.css'
import { TagButtonList } from '@/app/(posts)/_components/TagButtonList'
import { getHeadingList } from '@/app/_libs/cheerio'
import { assertIsExist, formatDate } from '@/app/_libs/utils'
import { PostType } from '@/app/_types'
import { Header } from '../Header'
import { Markdown } from '../Markdown'
import { TableOfContents } from '../TableOfContents'

type Props = PostType

export const Content = ({ ...props }: Props) => {
  assertIsExist(props.body)
  const headingList = getHeadingList(props.body)

  return (
    <div className="grid w-full gap-16">
      <div className="grid gap-10">
        <Header>{props.title}</Header>
        <DateTime className="mt-4 flex justify-start text-sm" dateTime={props.publishedAt}>
          {formatDate(new Date(props.publishedAt), 'yyyy/MM/dd')}
        </DateTime>
        <TagButtonList tags={props.tags} />
      </div>
      <div className="grid w-full lg:grid-cols-[1fr_300px] lg:items-start lg:gap-10 xl:gap-20">
        <div className="w-full space-y-4 overflow-hidden">
          <Markdown body={props.body} />
        </div>
        <TableOfContents headingList={headingList} />
      </div>
    </div>
  )
}
