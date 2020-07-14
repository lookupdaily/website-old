import * as React from "react"
import { Header } from "../header/header"
import { Container } from "../container/container"
import "./layout.css"

interface LayoutProps {
  pageTitle: string
  children: React.ReactNode
}

export const Layout: React.ReactNode = (props: LayoutProps) => {
  return (
    <div className="layout">
      <h3>Look Up.</h3>
      <Header text={props.pageTitle} />
      <Container>{props.children}</Container>
    </div>
  )
}
