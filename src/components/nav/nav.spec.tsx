import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { NavLink } from './nav'


describe("Nav Link", () => {
  it("renders element", () => {
    render(<NavLink>Home</NavLink>)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it("links to given link", () => {
    render(<NavLink to="/about">About</NavLink>)
    const link = screen.getByRole('link')
    expect(link).toContainHTML('/about')
  })
})