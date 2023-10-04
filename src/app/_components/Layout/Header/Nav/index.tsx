'use client'

import * as React from 'react'
import { Path } from '@/app/(posts)/_types'
import { NavLink } from '@/app/_components/NavLink'

export const Nav = ({ paths }: { paths: Readonly<Path[]> }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {paths.map((path) => (
          <li key={path.title}>
            <NavLink href={path.href}>{path.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
