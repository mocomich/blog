'use client'

import { useRouter } from 'next/navigation'
import { Tag } from '../../Tag'

export const TagButton = ({
  path,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'> & { path: string }) => {
  const router = useRouter()
  return (
    <button
      {...props}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        router.push(path)
      }}
    >
      <Tag> {children}</Tag>
    </button>
  )
}
