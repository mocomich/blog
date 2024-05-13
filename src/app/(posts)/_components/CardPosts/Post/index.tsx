import * as React from 'react'
import Card from '@/app/(posts)/_components/Card'
import { Domain } from '@/app/(posts)/_components/Domain'
import { PostType } from '@/app/_types'
import { Typography } from '@/components/Typography'
import { DateTime } from '../../DateTime'
import { TagButtonList } from '../../TagButtonList'

export const Post = ({ ...props }: Pick<PostType, 'title' | 'domain' | 'tags' | 'publishedAt'>) => {
  return (
    <Card>
      <Card.CardContent className="justify-between">
        <Typography as={'h3'} variant="h4">
          {props.title}
        </Typography>
        <div className="grid gap-4">
          <TagButtonList tags={props.tags} />
          <div className="flex justify-between">
            <Domain>{props.domain}</Domain>
            <DateTime className="text-xs" date={new Date(props.publishedAt)} />
          </div>
        </div>
      </Card.CardContent>
    </Card>
  )
}
