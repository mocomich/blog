import { Meta, StoryObj } from '@storybook/react'
import { postsFixture } from '../../_fixtures/posts'
import { Posts } from '.'

const meta: Meta<typeof Posts> = {
  title: 'posts/Posts',
  component: Posts,
  args: { posts: postsFixture(1) },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Posts>

export const Default: Story = {
  args: { posts: postsFixture(4) }
}
