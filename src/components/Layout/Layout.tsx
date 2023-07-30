import React from 'react'
import Header, { HeaderProps } from './Header'
import Footer, { FooterProps } from './Footer'

type LayoutProps = {
  children: React.ReactNode
  className?: string
  header: HeaderProps
  footer: FooterProps
}

export default function Layout({ children, className, header, footer }: LayoutProps) {
  return (
    <div className='wrapper'>
      <Header {...header} />
      <main className={className}>{children}</main>
      <Footer {...footer} />
      <style jsx>
        {`
          .wrapper{
            display: flex;
            flex-direction: column;
          }
          main{
            height: calc(100vh - 100px);
          }
        `}
      </style>
    </div>
  )
}
