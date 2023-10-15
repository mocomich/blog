import React from 'react'

import hljs, { AutoHighlightResult } from 'highlight.js'
import parse, { domToReact, HTMLReactParserOptions, Element, Text } from 'html-react-parser'
import { PostType } from '@/app/_types'
import { H2, H3, H4 } from '../Heading'
import styles from './index.module.css'

type Props = Required<Pick<PostType, 'body'>>

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!(domNode instanceof Element && domNode?.attribs)) {
      return
    }

    if (domNode.name === 'h2') {
      const id = (domNode.children[0] as Text).data
      console.log(id)

      return <H2 id={id}>{domToReact(domNode.children, options)}</H2>
    }
    if (domNode.name === 'h3') {
      const id = (domNode.children[0] as Text).data
      return <H3 id={id}>{domToReact(domNode.children, options)}</H3>
    }
    if (domNode.name === 'h4') {
      const id = (domNode.children[0] as Text).data
      return <H4 id={id}>{domToReact(domNode.children, options)}</H4>
    }
    if (domNode.name === 'pre') {
      const code = ((domNode.children[0] as Element).children[0] as Text).data
      const highlightCode: AutoHighlightResult = hljs.highlightAuto(code)
      return (
        <pre>
          <code
            className="hljs" // eslint-disable-line
          >
            {parse(highlightCode.value)}
          </code>
        </pre>
      )
    }
  }
}

export const Markdown = ({ body }: Props) => {
  return <div className={styles.content}>{parse(body, options)}</div>
}
