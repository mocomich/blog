import React from 'react'
import { Heading } from '@/app/_libs/cheerio'

type Props = {
  headingList: Heading[]
}

// h2、h3のみ考慮、それ以降のheadingが必要な場合は追加が必要
export const TableOfContents = ({ headingList }: Props) => {
  function createTableOfContents(headingList: Heading[]) {
    const output: JSX.Element[] = []
    let h3List: JSX.Element[] = []

    for (const el of headingList) {
      if (el.type === 'h2') {
        if (h3List.length > 0) {
          output.push(
            <ol className="[&>li]:list-disc" key={output.length}>
              {h3List}
            </ol>
          )
          h3List = []
        }
        output.push(
          <li key={el.id}>
            <a className="hover:opacity-70" href={`#${el.id}`}>
              {el.id}
            </a>
          </li>
        )
      } else if (el.type === 'h3') {
        h3List.push(
          <li className="ml-3" key={el.id}>
            <a className="hover:opacity-70" href={`#${el.id}`}>
              {el.id}
            </a>
          </li>
        )
      }
    }
    if (h3List.length > 0) {
      output.push(<ol key={output.length}>{h3List}</ol>)
    }

    return <ol className="text-sm leading-8 [&>li]:list-disc">{output}</ol>
  }
  return (
    <div className="sticky top-4 hidden w-[300px] space-y-4 rounded-md border p-4 pl-8 lg:block">
      <div className="font-semibold">目次</div>
      <div>{createTableOfContents(headingList)}</div>
    </div>
  )
}
