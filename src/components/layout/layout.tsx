import * as React from 'react'

interface LayoutProps { children: React.ReactNode }

export const Layout = (props: LayoutProps) => {
  return <div>{props.children}</div>
}