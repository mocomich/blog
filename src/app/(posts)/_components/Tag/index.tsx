import * as React from 'react'
import { PostType } from '../../../_types'

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return <span className="rounded-full bg-gray-500 px-2 py-0.5 text-xs">{children}</span>
}

export const TagList = ({ tags }: Pick<PostType, 'tags'>) => {
  return (
    <div className="flex flex-wrap gap-2 text-white">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  )
}
