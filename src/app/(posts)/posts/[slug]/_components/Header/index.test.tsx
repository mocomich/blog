import { render, screen } from '@testing-library/react'
import { Header } from '.'

test('role=["burner"]', () => {
  render(<Header>タイトル</Header>)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})
