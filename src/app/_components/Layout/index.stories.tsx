import { Layout } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Layout> = {
  title: 'Common/Layout',
  component: Layout,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {
  args: {
    children: ''
  }
}
