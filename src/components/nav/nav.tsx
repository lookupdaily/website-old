import React, { FunctionComponent, ReactNode, ReactElement, Component } from "react"
import { Link } from "gatsby"
import * as navStyles from "./nav.module.css"

interface GatsbyLinkProps {
  children: ReactNode
  to: string
}

interface ImageLinkProps {
  to: string
  src: string
  altText: string
}

interface NavProps {

}

export const NavLink: FunctionComponent<GatsbyLinkProps> = ({children, to}: GatsbyLinkProps) => {
  return <Link to={to}>{children}</Link>
}

export const NavBrand: FunctionComponent<ImageLinkProps> = ({to, src, altText}: ImageLinkProps) => {
  return(
    <Link to={to}>
      <img src={src} alt-text={altText}/>
    </Link>
  )
} 

export const NavBar: FunctionComponent<NavProps> = () => {
  return (
    <div>
      <NavBrand src="#" altText="test"/>
      <NavLink to={'/'}>Home</NavLink>
    </div>
  )
} 

