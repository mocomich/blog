import * as React from 'react'
import Link from 'next/link'

type Props = React.ComponentPropsWithoutRef<typeof Link>

export const PaginationLink = ({ ...props }: Props) => {
  return (
    <Link
      {...props}
      className="flex h-9 w-9 items-center justify-center bg-tertiary text-primary hover:opacity-80 aria-[current]:pointer-events-none aria-[current]:bg-primary aria-[current]:font-semibold aria-[current]:text-secondary hover:aria-[current]:opacity-100"
    />
  )
}
