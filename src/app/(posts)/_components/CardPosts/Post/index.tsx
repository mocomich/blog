import * as React from 'react'
import Card from '@/app/(posts)/_components/Card'
import { DateTime } from '@/app/(posts)/_components/DateTime'
import { Domain } from '@/app/(posts)/_components/Domain'
import { TagList } from '@/app/(posts)/_components/Tag'
import { PostType } from '@/app/_types'
import { Typography } from '@/components/Typography'

export const Post = ({ ...props }: Pick<PostType, 'title' | 'domain' | 'tags' | 'publishedAt'>) => {
  return (
    <Card>
      <Card.CardContent className="justify-between">
        <Typography as={'h3'} variant="h4">
          {props.title}
        </Typography>
        <div className="grid gap-4">
          <TagList tags={props.tags} />
          <div className="flex justify-between">
            <Domain>{props.domain}</Domain>
            <DateTime className="text-xs" dateTime={props.publishedAt}>
              {new Date(props.publishedAt).toLocaleDateString()}
            </DateTime>
          </div>
        </div>
      </Card.CardContent>
    </Card>
  )
}
