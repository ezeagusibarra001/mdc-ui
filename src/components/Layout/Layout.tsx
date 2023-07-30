import React from 'react'
import Header, { HeaderProps } from './Header'

type LayoutProps = {
  children: React.ReactNode
  className?: string
  header: HeaderProps
}

export default function Layout({ children, className, header }: LayoutProps) {
  return (
    <>
      <Header {...header} />
      <main className={className}>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
