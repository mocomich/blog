import { StoryObj, Meta } from '@storybook/react'

import { RelativeTimestamp } from '@/components/RelativeTimestamp'
import { Typography } from '@/components/Typography'
import { Domain } from '../Domain'
import { Book } from '.'

const meta: Meta<typeof Book> = {
  title: 'posts/Book',
  component: Book,
  args: {
    children: (
      <>
        <Typography as="h2" variant="h4">
          テスト
        </Typography>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <Domain>Zenn</Domain>
            <RelativeTimestamp className="text-xs" date={new Date('2022-09-09')} />
          </div>
        </div>
      </>
    )
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Book>

export const Default: Story = {}
