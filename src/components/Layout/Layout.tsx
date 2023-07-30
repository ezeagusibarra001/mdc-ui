import React from 'react'

type LayoutProps = {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <header>Header</header>
      <main className={className}>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
