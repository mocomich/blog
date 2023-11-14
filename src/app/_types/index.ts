export type TagType = {
  id: string
  name: string
}

export type PostType = {
  body?: string
  domain: ['tech-vinyl.com' | 'zenn.dev']
  excerpt: string
  id: string
  publishedAt: string
  tags: TagType[]
  title: string
  updatedAt: string
  url: string
}

export type Path = { href: string; title: string }

export type SearchParams = { [key: string]: string | string[] | undefined }
