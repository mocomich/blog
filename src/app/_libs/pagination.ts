/**
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current
 * @param flag
 * @returns
 */
export function isCurrent(flag: boolean): React.AnchorHTMLAttributes<HTMLAnchorElement> {
  if (!flag) return {}
  return { 'aria-current': 'page' }
}
