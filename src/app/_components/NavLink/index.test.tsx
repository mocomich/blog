import { render, screen } from '@testing-library/react'

import { NavLink } from '.'

test('role=["link"]', () => {
  render(<NavLink href="#" />)
  expect(screen.getByRole('link')).toBeInTheDocument()
})
