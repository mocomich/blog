import { Pagination } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  title: 'posts/Pagination',
  component: Pagination,
  args: {
    totalCount: 18,
    current: 1
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {}
}
