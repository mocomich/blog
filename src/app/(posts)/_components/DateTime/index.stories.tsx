import { StoryObj, Meta } from '@storybook/react'

import { DateTime } from '.'

const meta: Meta<typeof DateTime> = {
  title: 'posts/DateTime',
  component: DateTime,
  args: {
    children: '2022-09-09',
    dateTime: '2022-09-09T00:00:00.000Z'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof DateTime>

export const Default: Story = {}
