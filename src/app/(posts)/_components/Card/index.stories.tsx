import { StoryObj, Meta } from '@storybook/react'

import { Typography } from '@/components/Typography'
import { DateTime } from '../DateTime'
import { Domain } from '../Domain'
import { TagButtonList } from '../TagButtonList'
import Card from '.'

const meta: Meta<typeof Card> = {
  title: 'posts/Card',
  component: Card,
  args: {
    children: (
      <Card>
        <Card.CardContent className="justify-between">
          <Typography as={'h3'} variant="h4">
            テスト
          </Typography>
          <div className="grid gap-4">
            <TagButtonList tags={['Next.js', 'React']} />
            <div className="flex justify-between">
              <Domain>vinyl.com</Domain>
              <DateTime className="text-xs" dateTime={'2022-09-09T00:00:00.000Z'}>
                {new Date('2022-09-09T00:00:00.000Z').toLocaleDateString()}
              </DateTime>
            </div>
          </div>
        </Card.CardContent>
      </Card>
    )
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {}
