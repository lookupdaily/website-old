import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Container } from "./container"

describe("Container", () => {
  it("wraps content in div", () => {
    render(<Container>Hello, World!</Container>)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
  })
})
