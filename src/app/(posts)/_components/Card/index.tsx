import React from 'react'
import { combineStyles } from '@/app/_libs/style'

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="rounded-lg border p-4">{children}</div>
}

const CardContent = ({
  children,
  className
}: Pick<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>) => {
  return <div className={combineStyles('flex min-h-[160px] flex-col', className)}>{children}</div>
}

Card.CardContent = CardContent

export default Card
