import React from 'react'
import { Ogp } from '@/app/_libs/ogp'

// MicroCMSの仕様にてすべて<p/>で囲われている為、インラインのタグのみ利用

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="flex h-[120px] justify-between overflow-hidden rounded-lg border hover:bg-secondary/70">
      {children}
    </span>
  )
}

const Main = ({ children }: { children: React.ReactNode }) => {
  return <span className="grid gap-3 p-4">{children}</span>
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return <span className="line-clamp-1 font-bold">{children}</span>
}

const Description = ({ children }: { children: React.ReactNode }) => {
  return <span className="line-clamp-1 text-sm text-primary/50">{children}</span>
}

const Meta = ({ faviconUrl, url }: Pick<Ogp, 'faviconUrl' | 'url'>) => {
  return (
    <span className="flex gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {faviconUrl && <img src={faviconUrl} className="h-4 w-4" alt="favicon icon" />}
      <span className="line-clamp-1 text-xs">{url}</span>
    </span>
  )
}

const Thumbnail = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt="ogp image" className="max-w-[240px]" />
    </>
  )
}

export const OGPCard = ({ url, title, description, faviconUrl, imageUrl }: Ogp) => {
  return (
    <Container>
      <Main>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Meta url={url} faviconUrl={faviconUrl} />
      </Main>
      {imageUrl && <Thumbnail imageUrl={imageUrl} />}
    </Container>
  )
}
