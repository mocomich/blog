import React from 'react'
import { PostType } from '@/app/(posts)/_types'
import { Typography } from '@/app/_components/Typography'
import { Book } from '../../Book'
import { DateTime } from '../../DateTime'
import { Domain } from '../../Domain'

export const Post = ({
  ...props
}: Pick<PostType, 'title' | 'domain' | 'publishedAt'> & React.ComponentPropsWithoutRef<typeof Book>) => {
  return (
    <Book variant={props.variant}>
      <Typography as="h2" variant="h4">
        {props.title}
      </Typography>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <Domain>{props.domain}</Domain>
          <DateTime className="text-xs" dateTime={props.publishedAt}>
            {new Date(props.publishedAt).toLocaleDateString()}
          </DateTime>
        </div>
      </div>
    </Book>
  )
}
