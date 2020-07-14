import React, { FunctionComponent } from "react"
import "./layout.css"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">{children}</div>
    </div>
  )
}
