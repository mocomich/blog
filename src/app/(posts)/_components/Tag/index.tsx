import * as React from 'react'

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return <span className="rounded-full bg-gray-500 px-2 py-1 text-xs text-white hover:bg-gray-900">{children}</span>
}
