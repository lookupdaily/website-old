import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Layout } from "./layout"

describe("Layout", () => {
  it("wraps content in div", () => {
    render(<Layout>Hello, World!</Layout>)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
  })
})
