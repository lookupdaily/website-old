import * as React from "react"
import { render, screen } from "@testing-library/react"
import { NavLink, NavBrand, NavBar } from "./nav"

describe("Nav Link", () => {
  it("renders element", () => {
    render(<NavLink to="#">Home</NavLink>)
    expect(screen.getByText("Home")).toBeInTheDocument()
  })

  it("links to given link", () => {
    render(<NavLink to="/about">About</NavLink>)
    const link = screen.getByRole("link")
    expect(link).toContainHTML('href="/about"')
  })
})

describe("Nav brand", () => {
  it("contains an image", () => {
    render(<NavBrand src="logo.png" altText="logo" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("links to home by default", () => {
    render(<NavBrand src="logo.png" altText="logo" />)
    expect(screen.getByRole("link")).toContainHTML('href="/"')
  })

  it("alternative link can be provided", () => {
    render(<NavBrand to="/about" src="me.png" altText="website author" />)
    expect(screen.getByRole("link")).toContainHTML('href="/about"')
  })
})

describe("Nav bar", () => {
  it("renders element", () => {
    render(<NavBar />)
    expect(screen.getByRole("link", { name: /Look Up/ })).toBeInTheDocument()
  })
})
