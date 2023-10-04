import * as React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="mx-auto w-full grow px-3 lg:max-w-7xl lg:px-0">{children}</main>
      <Footer />
    </div>
  )
}
