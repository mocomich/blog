import '@/app/globals.css'
import { Layout } from '@/components/Layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Vinyl',
  description: '一応テックブログです。自身の知識の定着の為に書いてます。',
  alternates: {
    canonical: '/'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="relative flex min-h-screen flex-col overflow-auto">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
