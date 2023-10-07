import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { PaginationLink } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PaginationLink> = {
  title: 'Common/PaginationLink',
  component: PaginationLink,
  args: {
    href: '/'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof PaginationLink>

export const Default: Story = {
  args: {
    children: 1
  }
}

export const IsCurrent: Story = {
  args: {
    children: 1,
    'aria-current': 'page'
  }
}

export const Previous: Story = {
  args: {
    children: <ChevronLeftIcon className="w-6" />
  }
}

export const Next: Story = {
  args: {
    children: <ChevronRightIcon className="w-6" />
  }
}
