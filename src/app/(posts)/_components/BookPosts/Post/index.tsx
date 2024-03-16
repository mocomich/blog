import React from 'react'
import { Book } from '@/app/(posts)/_components/Book'
import { Domain } from '@/app/(posts)/_components/Domain'
import { PostType } from '@/app/_types'
import { RelativeTimestamp } from '@/components/RelativeTimestamp'
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
          <RelativeTimestamp className="text-xs" date={new Date(props.publishedAt)} />
        </div>
      </div>
    </Book>
  )
}
