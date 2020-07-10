import React from "react"
import { create } from "react-test-renderer"
import { Header } from "./header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = create(<Header text="Lookupdaily" />)
    expect(tree.toJSON()).toMatchSnapshot
  })
})
