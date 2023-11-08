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

export function flexibleDateFormat(date: Date) {
  const formatDate = (date: Date) => {
    const diffInDays = differenceInDays(new Date(), date)

    if (diffInDays < 8) {
      return formatDistanceToNow(date, {
        locale: ja,
        addSuffix: true
      })
    } else if (diffInDays < 365) {
      return format(date, 'MM月dd日')
    } else {
      return format(date, 'yyyy年MM月dd日')
    }
  }
  return formatDate(date)
}
