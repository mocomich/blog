import { differenceInDays, format, formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'

export function isExist<T>(v: T | null | undefined): v is NonNullable<T> {
  return typeof v !== 'undefined' && v !== null
}

export function assertIsExist<T>(v: T | null | undefined, target = ''): asserts v is NonNullable<T> {
  if (!isExist(v)) {
    throw new Error(`${target} should be specified`.trim())
  }
}

export function formatDate(date: Date, formatPattern: string) {
  return format(date, formatPattern)
}

export function flexibleDateFormat(date: Date) {
  const formatDateFn = (date: Date) => {
    const diffInDays = differenceInDays(new Date(), date)

    if (diffInDays < 8) {
      return formatDistanceToNow(date, {
        locale: ja,
        addSuffix: true
      })
    } else if (diffInDays < 365) {
      return formatDate(date, 'MM/dd')
    } else {
      return formatDate(date, 'yyyy/MM/dd')
    }
  }
  return formatDateFn(date)
}
