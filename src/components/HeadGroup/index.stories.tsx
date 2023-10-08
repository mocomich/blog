import { AnchorButton } from '../AnchorButton'
import { HeadGroup } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HeadGroup> = {
  title: 'Common/HeadGroup',
  component: HeadGroup,
  args: {
    title: 'タイトル'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof HeadGroup>

export const Default: Story = {
  args: { children: <AnchorButton href={'#'}>Link</AnchorButton>, title: 'タイトル' }
}
