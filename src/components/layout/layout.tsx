import React, { FunctionComponent } from "react"
import { Container } from "../container/container"
import "./layout.css"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Container>{children}</Container>
    </div>
  )
}
