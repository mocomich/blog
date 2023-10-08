'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import { PostsNavPaths } from '@/app/_const'
import { isCurrent } from '@/app/_libs/pagination'
import { NavLink } from '@/components/NavLink'

type NavProps = React.ComponentPropsWithoutRef<'nav'>

export const Nav = ({ ...props }: NavProps) => {
  const pathname = usePathname()

  return (
    <nav {...props} aria-label="記事のドメインメニュー">
      <ul className="flex gap-8">
        {PostsNavPaths.map((path) => (
          <li key={path.title}>
            <NavLink href={path.href} {...isCurrent(pathname === path.href)} size="md" current>
              {path.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
