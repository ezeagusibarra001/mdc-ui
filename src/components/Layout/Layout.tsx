import React from 'react'
import Header, { HeaderProps } from './Header'
import Footer, { FooterProps } from './Footer'
import classNames from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode
  fontFamily?: string
  header: HeaderProps
  footer: FooterProps
}

export default function Layout({ children, fontFamily, header, footer }: LayoutProps) {
  return (
    <div className={fontFamily}>
      <Header {...header} />
      <main className={classNames.main} >{children}</main>
      <Footer {...footer} />
    </div>
  )
}
