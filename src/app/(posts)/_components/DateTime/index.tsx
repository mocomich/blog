import { ComponentPropsWithoutRef } from 'react'

export const DateTime = ({ ...props }: { dateTime: string } & Omit<ComponentPropsWithoutRef<'time'>, 'dateTime'>) => {
  return <time {...props} />
}
