import cheerio from 'cheerio'
import hljs from 'highlight.js'

export function formaText(body: string) {
  const $ = cheerio.load(body)
  $('h2').each((_, elm) => {
    const h2Text = $(elm).text()
    $(elm).attr('id', h2Text)
  })

  $('h3').each((_, elm) => {
    const h3Text = $(elm).text()
    $(elm).attr('id', h3Text)
  })

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  return $.html()
}

export type Heading = {
  id: string
  type: 'h2' | 'h3'
}

export function getHeadingList(body: string): Heading[] {
  const headingList: Heading[] = []

  const $ = cheerio.load(body)

  $('h2,h3').each((_, elm) => {
    const $elm = $(elm)
    const text = $(elm).text()
    if ($elm.is('h2')) {
      headingList.push({ id: text, type: 'h2' })
    } else if ($elm.is('h3')) {
      headingList.push({ id: text, type: 'h3' })
    }
  })

  return headingList
}
