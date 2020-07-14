import * as React from 'react'
import "./layout.css"

interface LayoutProps { children: React.ReactNode }

export const Layout = (props: LayoutProps) => {
  return <div class="layout">{props.children}</div>
}