export function isExist<T>(v: T | null | undefined): v is NonNullable<T> {
  return typeof v !== 'undefined' && v !== null
}

export function assertIsExist<T>(v: T | null | undefined, target = ''): asserts v is NonNullable<T> {
  if (!isExist(v)) {
    throw new Error(`${target} should be specified`.trim())
  }
}
