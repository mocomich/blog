import * as React from 'react'
import { VariantProps, cva } from 'cva'
import NextLink from 'next/link'
import { combineStyles } from '@/app/_libs/style'

export const linkVariants = cva({
  base: 'text-black underline-offset-[6px] hover:underline disabled:pointer-events-none disabled:opacity-50',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
type Props = React.ComponentPropsWithoutRef<typeof NextLink> & VariantProps<typeof linkVariants>

export const Link = React.forwardRef<HTMLAnchorElement, Props>(function AnchorButtonBase(
  { children, className, size, ...props },
  ref
) {
  return (
    <NextLink className={combineStyles(linkVariants({ size }), className)} ref={ref} {...props}>
      {children}
    </NextLink>
  )
})
