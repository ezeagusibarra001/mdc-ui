import React from 'react'
import Header, { HeaderProps } from './Header'
import Footer, { FooterProps } from './Footer'
import classNames from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode
  className?: string
  header: HeaderProps
  footer: FooterProps
}

export default function Layout({ children, header, footer }: LayoutProps) {
  return (
    <div className='wrapper'>
      <Header {...header} />
      <main className={classNames.main} >{children}</main>
      <Footer {...footer} />
    </div>
  )
}
