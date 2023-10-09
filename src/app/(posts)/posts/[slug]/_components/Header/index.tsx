import React from 'react'
import { Typography } from '@/components/Typography'

type Props = {
  children: React.ReactNode
}

export const Header = ({ children }: Props) => {
  return (
    <header>
      <Typography as="h1" variant="h2">
        {children}
      </Typography>
    </header>
  )
}
