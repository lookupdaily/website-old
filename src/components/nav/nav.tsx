import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import * as navStyles from "./nav.module.css"

interface NavListItemProps {
  to: string
  children: React.ReactNode
}

interface NavProps {
  navTitle: string
  //TODO: fix navItems type
  navItems: Record<string, unknown>
}

interface NavListProps {
  //TODO: fix navItems type
  navItems: Record<string, unknown>
}

interface NavItem {
  linkUrl: string
  linkText: string
}

const NavListItem: FunctionComponent<NavListItemProps> = ({ to, children }) => (
  <li className="nav-list-item">
    <Link to={to}>{children}</Link>
  </li>
)

const NavBrand: FunctionComponent<NavListItemProps> = ({ to, children }) => (
  <Link to={to} className={navStyles.navBrand}>
    <h3>{children}</h3>
  </Link>
)

const NavList: FunctionComponent<NavListProps> = ({ navItems }) => (
  <ul className={navStyles.navList}>
    {/* TODO: fix map */}
    {navItems.map((navItem: NavItem) => {
      <NavListItem to={navItem.linkUrl}>{navItem.linkText}</NavListItem>
    })}
  </ul>
)

export const Nav: FunctionComponent<NavProps> = ({ navTitle, navItems }) => (
  <div className={navStyles.nav}>
    <NavBrand to="/">{navTitle}</NavBrand>
    <NavList navItems={navItems} />
  </div>
)
