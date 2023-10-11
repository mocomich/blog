import React from 'react'
import { Heading } from '@/app/_libs/cheerio'

type Props = {
  headingList: Heading[]
}

// h2、h3のみ考慮、それ以降のheadingが必要な場合は追加が必要
export const TableOfContents = ({ headingList }: Props) => {
  function createTableOfContents(headingList: Heading[]) {
    const output: JSX.Element[] = []
    let currentList: JSX.Element[] = []

    for (const el of headingList) {
      const listItem = (
        <li key={el.id} className={`${el.type === 'h3' ? 'ml-3' : el.type === 'h4' ? 'ml-6' : 'ml-0'} list-disc`}>
          <a className="hover:opacity-70" href={`#${el.id}`}>
            {el.id}
          </a>
        </li>
      )

      if (el.type === 'h2') {
        if (currentList.length > 0) {
          output.push(<ol key={output.length}>{currentList}</ol>)
          currentList = []
        }
        output.push(listItem)
      } else {
        currentList.push(listItem)
      }
    }

    if (currentList.length > 0) {
      output.push(<ol key={output.length}>{currentList}</ol>)
    }

    return <ol className="text-sm leading-8">{output}</ol>
  }

  return (
    <div className="sticky top-4 hidden w-[300px] space-y-4 break-words rounded-md border p-4 pl-8 lg:block">
      <div className="font-semibold">目次</div>
      <div>{createTableOfContents(headingList)}</div>
    </div>
  )
}
