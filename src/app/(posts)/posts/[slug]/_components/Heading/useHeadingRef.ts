import React from 'react'
import { useSnapshot } from 'valtio'
import { useIntersection } from '@/app/(posts)/_hooks/useIntersection'
import { state } from '@/app/(posts)/libs/proxy'

export const useHeadingRef = (id: string | undefined) => {
  const { ref, entry } = useIntersection({
    threshold: 1,
    rootMargin: '0px 0px -25% 0px'
  })
  const { set } = useSnapshot(state)

  React.useEffect(() => {
    if (!id) return
    if (!entry) return
    if (entry.isIntersecting) {
      set(id)
    }
  }, [entry?.isIntersecting, id])

  return { ref }
}
