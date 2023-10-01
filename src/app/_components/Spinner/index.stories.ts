import { Spinner } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Spinner> = {
  title: 'Common/Spinner',
  component: Spinner,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Small: Story = {
  args: {
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    size: 'lg'
  }
}
