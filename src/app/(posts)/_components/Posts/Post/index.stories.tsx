import { Meta, StoryObj } from '@storybook/react'
import { postsFixture } from '@/app/(posts)/_fixtures/posts'
import { Post } from '.'

const meta: Meta<typeof Post> = {
  title: 'posts/Post',
  component: Post,
  args: {
    ...postsFixture(1)[0]
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Post>

export const Default: Story = {}
