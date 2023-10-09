import React from 'react'

import { formaText } from '@/app/_libs/cheerio'
import { PostType } from '@/app/_types'
import styles from './index.module.css'

type Props = Required<Pick<PostType, 'body'>>

export const Markdown = ({ body }: Props) => {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{
        __html: `${formaText(body)}`
      }}
    />
  )
}
