import * as React from 'react'
import { cva, type VariantProps } from 'cva'
import Link from 'next/link'
import { combineStyles } from '@/app/_libs/style'

export const anchorButtonVariants = cva({
  base: 'border border-primary font-semibold hover:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
  variants: {
    size: {
      sm: 'px-2 py-1 text-base',
      md: 'px-3 py-2 text-xl'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

export type LinkProps = React.ComponentPropsWithRef<typeof Link> &
  VariantProps<typeof anchorButtonVariants> & { disabled?: boolean }

export const AnchorButton = React.forwardRef<HTMLAnchorElement, LinkProps>(function AnchorLink(
  { className, disabled, size, ...props },
  ref
) {
  return (
    <Link
      {...props}
      ref={ref}
      aria-disabled={disabled}
      className={combineStyles(anchorButtonVariants({ size }), className)}
      role="button"
    />
  )
})
