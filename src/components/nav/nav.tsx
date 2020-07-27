import React, { FunctionComponent, ReactNode } from "react"
import { Link } from "gatsby"
// import * as navStyles from "./nav.module.css"

interface GatsbyLinkProps {
  children: ReactNode
  to: string
}

interface ImageLinkProps {
  to: string
  src: string
  altText: string
}

export const NavLink: FunctionComponent<GatsbyLinkProps> = ({
  children,
  to,
}: GatsbyLinkProps) => {
  return <Link to={to}>{children}</Link>
}

export const NavBrand: FunctionComponent<ImageLinkProps> = ({
  to = "/",
  src,
  altText,
}) => {
  return (
    <Link to={to}>
      <img src={src} alt-text={altText} />
    </Link>
  )
}

export const NavBar: FunctionComponent<null> = () => {
  return (
    <div>
      <NavBrand src="#" altText="test" />
      <NavLink to={"/"}>Look Up.</NavLink>
    </div>
  )
}
