import React from "react"
import { render, screen } from "@testing-library/react"
import { Header } from "./header"

describe("Header", () => {

  it("renders header text", () => {
    render(<Header text="Lookupdaily" />)
    expect(screen.getByText('Lookupdaily')).toBeInTheDocument()
  })
})
