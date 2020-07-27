import * as React from "react"
import { render, screen } from "@testing-library/react"
import { NavLink, NavBrand, NavBar } from './nav'


describe("Nav Link", () => {
  it("renders element", () => {
    render(<NavLink to="#">Home</NavLink>)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it("links to given link", () => {
    render(<NavLink to="/about">About</NavLink>)
    const link = screen.getByRole('link')
    expect(link).toContainHTML('/about')
  })
})

describe("Nav brand", () => {
  it("contains an image", () => {
    render(<NavBrand to="#" src="test.png" altText="test"/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})

describe("Nav bar", () => {
  it("renders element", () => {
    render(<NavBar/>)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})