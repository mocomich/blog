import { NavLink } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NavLink> = {
  title: 'Common/NavLink',
  component: NavLink,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof NavLink>

export const Default: Story = {
  args: {
    href: '#',
    children: 'NavLink'
  }
}

export const Current: Story = {
  args: {
    href: '#',
    'aria-current': true,
    current: true,
    children: 'NavLink'
  }
}

export const Medium: Story = {
  args: {
    href: '#',
    size: 'md',
    children: 'NavLink'
  }
}
