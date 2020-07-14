import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Layout } from "./layout"

describe("Layout", () => {
  it("wraps content in div", () => {
    render(<Layout pageTitle="test">Hello, World!</Layout>)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
  })

  it("displays page title", () => {
    render(<Layout pageTitle="Home">Welcome!</Layout>)
    expect(screen.getByText(/Home/)).toBeInTheDocument()
  })
})
