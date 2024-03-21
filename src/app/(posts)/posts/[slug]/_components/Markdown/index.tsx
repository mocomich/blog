import React from 'react'

import hljs, { AutoHighlightResult } from 'highlight.js'
import parse, { domToReact, HTMLReactParserOptions, Element, Text } from 'html-react-parser'
import { getOgpInfo } from '@/app/_libs/ogp'
import { PostType } from '@/app/_types'
import { H2, H3, H4 } from '../Heading'
import { OGPCard } from '../OgpCard'
import styles from './index.module.css'

type Props = Required<Pick<PostType, 'body'>>

export const Markdown = async ({ body }: Props) => {
  const ogpInfo = await getOgpInfo(body)

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element && domNode?.attribs)) {
        return
      }

      if (domNode.name === 'h2') {
        const id = (domNode.children[0] as Text).data

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

      if (domNode.name === 'a') {
        const url = (domNode.children[0] as Text).data
        const ogp = ogpInfo.find((ogp) => ogp.url === url)
        return (
          ogp && (
            <a aria-label={ogp.title} href={ogp.url} target="_blank" rel="noopener noreferrer" className="block py-6">
              <OGPCard {...ogp} />
            </a>
          )
        )
      }
    }
  }

  return <div className={styles.content}>{parse(body, options)}</div>
}
