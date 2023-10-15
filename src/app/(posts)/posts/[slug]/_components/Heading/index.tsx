'use client'

import * as React from 'react'
import { useHeadingRef } from './useHeadingRef'

export const H2 = ({ ...props }: React.ComponentPropsWithoutRef<'h2'>) => {
  const { ref } = useHeadingRef(props.id)
  return <h2 ref={ref} {...props}></h2>
}

export const H3 = ({ ...props }: React.ComponentPropsWithoutRef<'h3'>) => {
  const { ref } = useHeadingRef(props.id)
  return <h3 ref={ref} {...props}></h3>
}

export const H4 = ({ ...props }: React.ComponentPropsWithoutRef<'h4'>) => {
  const { ref } = useHeadingRef(props.id)
  return <h4 ref={ref} {...props}></h4>
}
