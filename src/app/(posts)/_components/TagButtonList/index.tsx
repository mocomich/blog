import { PathMap } from '@/app/_const'
import { PostType } from '@/app/_types'
import { TagButton } from './Button'

export const TagButtonList = ({ tags }: Pick<PostType, 'tags'>) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <TagButton path={PathMap.tagsPosts(tag)}>{tag}</TagButton>
        </li>
      ))}
    </ul>
  )
}
