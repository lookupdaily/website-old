import React, { FunctionComponent, ReactNode } from "react"
import { Link } from "gatsby"
import nav from "./nav.module.css"

interface GatsbyLinkProps {
  children: ReactNode
  to: string
}

interface ImageLinkProps {
  to: string
  src: string
  altText: string
  title: string
}

export const NavLink: FunctionComponent<GatsbyLinkProps> = ({
  children,
  to,
}: GatsbyLinkProps) => {
  return (
    <Link to={to} className={nav.link}>
      {children}
    </Link>
  )
}

export const NavBrand: FunctionComponent<ImageLinkProps> = ({
  to = "/",
  src,
  altText,
  title,
}) => {
  return (
    <Link to={to} title={title} className={nav.brand}>
      <img src={src} alt-text={altText} />
    </Link>
  )
}

export const NavBar: FunctionComponent<null> = () => {
  return (
    <nav className={nav.bar}>
      <div>
        <NavLink to={"/"}>Look Up.</NavLink>
      </div>
      <div>
        <NavLink to={"#"}>About.</NavLink>
      </div>
    </nav>
  )
}
