import * as React from "react"
import "./layout.css"

interface LayoutProps { children: React.ReactNode }

export const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <div className="container">{props.children}</div>
    </div>
    )
}