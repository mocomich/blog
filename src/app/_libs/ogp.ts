import ogpParser, { type OgpParserResult } from 'ogp-parser'

export type Ogp = {
  url: string
  title: string
  description: string
  faviconUrl?: string
  imageUrl?: string
}

export async function getOgpInfo(input: string): Promise<Ogp[]> {
  const anchorRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>.*?<\/a>/gi
  const matches = input.match(anchorRegex) || []

  if (matches.length === 0) {
    return []
  }

  const hrefValues = extractHrefValues(matches)
  const ogpInfo = await Promise.all(hrefValues.map((url) => getOgp(url)))

  return ogpInfo
}

async function fetchOgp(url: string): Promise<OgpParserResult> {
  const encodeURL = encodeURI(url)
  return ogpParser(encodeURL)
}

async function getOgp(url: string): Promise<Ogp> {
  try {
    const { title, ogp } = await fetchOgp(url)

    return {
      url: encodeURI(url),
      title,
      description: ogp['og:description']?.[0] || '',
      imageUrl: ogp['og:image']?.[0],
      faviconUrl: `https://www.google.com/s2/favicons?domain=${encodeURI(url)}`
    }
  } catch (error) {
    console.error('OGPの取得に失敗しました', error)

    return {
      url,
      title: '',
      description: ''
    }
  }
}

function extractHrefValues(input: string[]): string[] {
  return input.map((match) => {
    const hrefRegex = /href=["']([^"']*)["']/i
    const hrefMatch = match.match(hrefRegex)
    return hrefMatch ? hrefMatch[1] : ''
  })
}
