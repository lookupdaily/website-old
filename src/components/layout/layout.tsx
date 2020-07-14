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

const NavItem: FunctionComponent<NavProps> = props => (
  <li className="nav-list-item">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export const Layout: FunctionComponent<LayoutProps> = props => (
  <div className="layout">
    <div className="nav">
      <Link to="/" className="nav-brand">
        <h3>Look Up.</h3>
      </Link>
      <ul className="nav-list">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
    </div>
    <Container>
      <Header text={props.pageTitle} />
      {props.children}
    </Container>
  </div>
)
