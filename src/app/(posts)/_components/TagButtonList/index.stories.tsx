import { StoryObj, Meta } from '@storybook/react'

import { TagButtonList } from '.'

const meta: Meta<typeof TagButtonList> = {
  title: 'posts/TagButtonList',
  component: TagButtonList,
  args: { tags: ['Next.js', 'Frontend', 'AWS'] },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof TagButtonList>

export const Default: Story = {}
