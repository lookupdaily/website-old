import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import { Header } from "../header/header"
import { Container } from "../container/container"
import "./layout.css"

export interface LayoutProps {
  pageTitle: string
  children: React.ReactNode
}

interface NavProps {
  to: string
  children: React.ReactNode
}

const ListLink: FunctionComponent<LayoutProps> = props => (
  <li className="nav-item-list">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export const Layout: FunctionComponent<LayoutProps> = props => (
  <div className="layout">
    <div>
      <h3>Look Up.</h3>
      <ListLink to="/about">About</ListLink>
    </div>
    <Header text={props.pageTitle} />
    <Container>{props.children}</Container>
  </div>
)
