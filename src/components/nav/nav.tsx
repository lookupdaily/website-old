import React, { FunctionComponent, ReactNode, ReactElement, Component } from "react"
import { Link } from "gatsby"
import * as navStyles from "./nav.module.css"

interface GatsbyLinkProps {
  children: ReactNode
  to: string
}

export const NavLink: FunctionComponent<GatsbyLinkProps> = ({children, to}: GatsbyLinkProps) => {
  return (
    <div>
      <Link to={to}>{children}</Link>
    </div>
  )
}

