import { render, screen } from '@testing-library/react'
import { MobileNav } from '.'

const paths = [{ href: '/', title: 'Home' }]

test('role=["navigation"]', () => {
  render(<MobileNav paths={paths} />)
  expect(screen.getByRole('navigation')).toBeInTheDocument()
})
