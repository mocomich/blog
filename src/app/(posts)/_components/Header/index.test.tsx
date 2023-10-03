import { render, screen } from '@testing-library/react'
import { Header } from '.'

test('role=["banner"]', () => {
  render(<Header title="All Posts" />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})
