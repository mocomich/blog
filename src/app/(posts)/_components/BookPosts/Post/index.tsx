import React from 'react'
import { Book } from '@/app/(posts)/_components/Book'
import { DateTime } from '@/app/(posts)/_components/DateTime'
import { Domain } from '@/app/(posts)/_components/Domain'
import { flexibleDateFormat } from '@/app/_libs/utils'
import { PostType } from '@/app/_types'
import { Typography } from '@/components/Typography'

export const Post = ({
  ...props
}: Pick<PostType, 'title' | 'domain' | 'publishedAt'> & React.ComponentPropsWithoutRef<typeof Book>) => {
  return (
    <Book variant={props.variant}>
      <Typography aria-labelledby={props.title} as="h2" variant="h4">
        {props.title}
      </Typography>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <Domain>{props.domain}</Domain>
          <DateTime className="text-xs" dateTime={props.publishedAt}>
            {flexibleDateFormat(new Date(props.publishedAt))}
          </DateTime>
        </div>
      </div>
    </Book>
  )
}
