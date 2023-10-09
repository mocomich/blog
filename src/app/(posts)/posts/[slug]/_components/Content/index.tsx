import React from 'react'
import { DateTime } from '@/app/(posts)/_components/DateTime'
import 'highlight.js/styles/tokyo-night-dark.css'
import { getHeadingList } from '@/app/_libs/cheerio'
import { assertIsExist } from '@/app/_libs/utils'
import { PostType } from '@/app/_types'
import { Header } from '../Header'
import { Markdown } from '../Markdown'
import { TableOfContents } from '../TableOfContents'

type Props = PostType

export const Content = ({ ...props }: Props) => {
  assertIsExist(props.body)
  const headingList = getHeadingList(props.body)

  return (
    <div className="grid w-full lg:grid-cols-[1fr_300px] lg:items-start lg:gap-10 xl:gap-20">
      <div className="w-full overflow-hidden">
        <Header>{props.title}</Header>
        <DateTime className="mt-4 flex justify-end text-base" dateTime={props.publishedAt}>
          {new Date(props.publishedAt).toLocaleDateString()}
        </DateTime>
        <Markdown body={props.body} />
      </div>
      <TableOfContents headingList={headingList} />
    </div>
  )
}
