import * as React from 'react'
import { VariantProps, cva } from 'cva'
import Link from 'next/link'
import { combineStyles } from '@/app/_libs/style'

const navLinkVariants = cva({
  base: 'whitespace-nowrap p-1 transition-all hover:border-b-2 hover:border-b-primary',
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-2xl font-bold'
    },
    current: {
      true: 'aria-[current]:border-b-2 aria-[current]:border-b-primary aria-[current]:font-semibold',
      false: ''
    }
  },
  defaultVariants: {
    size: 'sm',
    current: false
  }
})
type Props = React.ComponentPropsWithoutRef<typeof Link> & VariantProps<typeof navLinkVariants>

export const NavLink = ({ size, current, className, ...props }: Props) => {
  return <Link {...props} className={combineStyles(navLinkVariants({ size, current }), className)} />
}
