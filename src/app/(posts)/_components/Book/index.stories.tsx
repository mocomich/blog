import { StoryObj, Meta } from '@storybook/react'

import { flexibleDateFormat } from '@/app/_libs/utils'
import { Typography } from '@/components/Typography'
import { DateTime } from '../DateTime'
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
            <DateTime className="text-xs" dateTime={'2022-09-09T00:00:00.000Z'}>
              {flexibleDateFormat(new Date('2022-09-09'))}
            </DateTime>
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
