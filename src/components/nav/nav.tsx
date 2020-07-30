import React, { FunctionComponent, ReactNode } from "react"
import { Link } from "gatsby"

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
  return <Link to={to}>{children}</Link>
}

export const NavBrand: FunctionComponent<ImageLinkProps> = ({
  to = "/",
  src,
  altText,
  title,
}) => {
  return (
    <Link to={to} title={title}>
      <img src={src} alt-text={altText} />
    </Link>
  )
}

export const NavBar: FunctionComponent<null> = () => {
  return (
    <nav>
      <div>
        <NavBrand src="#" altText="LookUp logo" title="Look Up" />
        <NavLink to={"/"}>Daily.</NavLink>
      </div>
      <div>
        <NavLink to={"#"}>About.</NavLink>
      </div>
    </nav>
  )
}
